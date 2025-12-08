import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, Building2, Lightbulb } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { INDUSTRIES, CAPABILITIES, UNITS, getInsightsByIndustry } from '@/lib/data'
import InsightsEngine from '@/components/insights-engine'

export function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({
    slug: industry.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const industry = INDUSTRIES.find((i) => i.slug === params.slug)
  
  if (!industry) {
    return {
      title: "Industry Not Found",
    }
  }

  return {
    title: `${industry.name} | Industries`,
    description: industry.hook,
  }
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = INDUSTRIES.find((i) => i.slug === params.slug)
  if (!industry) return notFound()

  const relevantCapabilities = CAPABILITIES.filter((cap) => 
    industry.relatedCapabilities.includes(cap.slug)
  )
  const relevantUnits = UNITS.filter((u) => 
    industry.relatedUnits.includes(u.slug)
  )
  const relevantInsights = getInsightsByIndustry(industry.slug, 3)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-accent text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container relative">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-6">
              {industry.cluster}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{industry.name}</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              {industry.hook}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {industry.coreServices.map((service, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium"
                >
                  {service}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Discuss Your Challenge <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Context - The Indonesian Advantage */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Indonesia Context
                </div>
                <h2 className="text-3xl font-bold mb-3">{industry.localContext.title}</h2>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl border-2 border-amber-200">
              <p className="text-lg text-slate-700 leading-relaxed">
                {industry.localContext.description}
              </p>
              <div className="mt-6 flex items-start gap-3 p-4 bg-white/60 rounded-lg">
                <Lightbulb className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-600">
                  <strong className="text-slate-900">Baswara's Advantage:</strong> Our team has deep 
                  experience navigating Indonesia's regulatory landscape, having worked directly 
                  with government stakeholders and industry leaders to shape policy and implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Matrix */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We Help {industry.name} Clients
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Integrated capabilities designed for the unique challenges of this industry
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relevantCapabilities.map((capability) => (
                <div
                  key={capability.slug}
                  className="group bg-white p-6 rounded-xl border-2 border-slate-200 hover:border-primary hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {capability.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {capability.hook}
                  </p>
                  <div className="space-y-2 mb-6">
                    {capability.serviceSuite.slice(0, 3).map((service, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <div className="text-sm">
                          <strong className="font-semibold">{service.title}</strong>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/capabilities/${capability.slug}`}
                    className="flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all"
                  >
                    Explore Capability
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Delivery Units */}
      {relevantUnits.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Specialized Delivery
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Units equipped to handle the complexity of {industry.name} transformation
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {relevantUnits.map((unit) => (
                  <Link
                    key={unit.slug}
                    href={`/units/${unit.slug}`}
                    className="group relative bg-gradient-to-br from-primary to-accent text-white p-8 rounded-xl overflow-hidden hover:shadow-2xl transition-all"
                  >
                    <div className="relative z-10">
                      <div className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                        {unit.role}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{unit.name}</h3>
                      <p className="text-white/90 mb-6">{unit.hook}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {unit.coreOfferings.map((offering, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm"
                          >
                            {offering.title}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-sm font-semibold group-hover:gap-2 transition-all">
                        Learn More
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
          description="Research and analysis specific to this industry"
          context={industry.name}
        />
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your {industry.name} Business?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss how Baswara can help you navigate challenges and capture opportunities
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              Start the Conversation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
