import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Building2, Rocket, Code2 } from "lucide-react"
import { UNITS, INDUSTRIES, CAPABILITIES, getInsightsByUnit } from "@/lib/data"
import { Button } from "@/components/ui/button"
import InsightsEngine from "@/components/insights-engine"

const unitIcons = {
  'x': Code2,
  'implementation': Building2,
  'ventures': Rocket
}

export function generateStaticParams() {
  return UNITS.map((unit) => ({
    slug: unit.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const unit = UNITS.find((u) => u.slug === params.slug)
  
  if (!unit) {
    return {
      title: "Unit Not Found",
    }
  }

  return {
    title: `${unit.name} | Specialized Units`,
    description: unit.hook,
  }
}

export default function UnitPage({ params }: { params: { slug: string } }) {
  const unit = UNITS.find((u) => u.slug === params.slug)

  if (!unit) {
    return notFound()
  }

  const Icon = unitIcons[unit.slug as keyof typeof unitIcons]
  const relatedIndustries = INDUSTRIES.filter((ind) =>
    unit.relatedIndustries?.includes(ind.slug)
  )
  const relatedCapabilities = CAPABILITIES.filter((cap) =>
    unit.relatedCapabilities?.includes(cap.slug)
  )
  const relevantInsights = getInsightsByUnit(unit.slug, 3)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-accent text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container relative">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm">
                <Icon className="h-7 w-7" />
              </div>
              <div className="text-sm font-semibold text-white/80 uppercase tracking-wider">
                {unit.role}
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{unit.name}</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-4 leading-relaxed">
              {unit.hook}
            </p>
            <p className="text-lg opacity-80 italic">"{unit.tagline}"</p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Engage This Unit <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Build</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Our core offerings are designed to deliver tangible, measurable results
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {unit.coreOfferings.map((offering, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border-2 border-slate-200 hover:border-primary hover:shadow-lg transition-all"
                >
                  <div className="text-4xl font-bold text-primary/20 mb-4">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{offering.title}</h3>
                  <p className="text-muted-foreground">{offering.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">How We Work</h2>

            <div className="space-y-6">
              <div className="flex gap-4 bg-white p-6 rounded-xl border">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Discovery & Scoping</h3>
                  <p className="text-muted-foreground">
                    We start with deep immersion in your business context, constraints, and 
                    ambitions. Unlike traditional consulting, we dig into technical and operational 
                    details from day one.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white p-6 rounded-xl border">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Co-Creation & Build</h3>
                  <p className="text-muted-foreground">
                    Working shoulder-to-shoulder with your teams, we design, build, and validate 
                    solutions. This isn't just advice—we write code, run pilots, and manage 
                    implementations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white p-6 rounded-xl border">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Scale & Transfer</h3>
                  <p className="text-muted-foreground">
                    Success means your team can sustain results without us. We build capability 
                    through structured knowledge transfer and coaching, not dependency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      {relatedIndustries.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Where We Apply Our Expertise
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Industries where {unit.name} drives transformation
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedIndustries.map((industry) => (
                  <Link
                    key={industry.slug}
                    href={`/industries/${industry.slug}`}
                    className="group bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border-2 border-slate-200 hover:border-primary hover:shadow-lg transition-all"
                  >
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      {industry.cluster}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {industry.hook}
                    </p>
                    <div className="flex items-center text-sm font-medium text-primary">
                      Explore Industry
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Capabilities */}
      {relatedCapabilities.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Integrated Capabilities
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Functional expertise we bring to delivery
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {relatedCapabilities.map((capability) => (
                  <Link
                    key={capability.slug}
                    href={`/capabilities/${capability.slug}`}
                    className="group bg-white p-6 rounded-xl border-2 border-slate-200 hover:border-primary hover:shadow-lg transition-all"
                  >
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {capability.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {capability.hook}
                    </p>
                    <div className="flex items-center text-sm font-medium text-primary">
                      View Capability
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Insights Engine */}
      {relevantInsights.length > 0 && (
        <InsightsEngine
          insights={relevantInsights}
          title="Our Latest Insights"
          description="Research and analysis from our delivery teams"
          context={unit.name}
        />
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build Together
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {unit.name} is ready to partner on your most ambitious challenges
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              Start a Conversation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
