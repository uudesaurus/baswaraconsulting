import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CAPABILITIES, INDUSTRIES, UNITS, getInsightsByCapability } from '@/lib/data'
import InsightsEngine from '@/components/insights-engine'

export function generateStaticParams() {
  return CAPABILITIES.map((capability) => ({
    slug: capability.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const capability = CAPABILITIES.find((c) => c.slug === params.slug)
  
  if (!capability) {
    return {
      title: "Capability Not Found",
    }
  }

  return {
    title: `${capability.name} | Capabilities`,
    description: capability.hook,
  }
}

export default function CapabilityPage({ params }: { params: { slug: string } }){
  const capability = CAPABILITIES.find((c) => c.slug === params.slug)
  if (!capability) return notFound()

  // Find Industries where this capability is applied
  const appliedIndustries = INDUSTRIES.filter((ind) => 
    ind.relatedCapabilities.includes(capability.slug)
  )

  // Find Units that deliver this capability
  const relatedUnits = UNITS.filter((unit) => 
    unit.relatedCapabilities?.includes(capability.slug)
  )

  // Get relevant insights
  const relevantInsights = getInsightsByCapability(capability.slug, 3)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-accent text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container relative">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-6">
              Capability
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{capability.name}</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-4 leading-relaxed">
              {capability.headline}
            </p>
            <p className="text-lg opacity-80 italic">"{capability.hook}"</p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Discuss Your Needs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Deep Dive */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Help</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Our approach combines strategic thinking with hands-on execution
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {capability.serviceSuite.map((service, idx) => (
                <div
                  key={idx}
                  className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl border-2 border-slate-200 hover:border-primary hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <CheckCircle2 className="h-5 w-5 text-primary group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-medium mb-4">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {service.clientProblem && (
                    <div className="mb-3 pl-14">
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                        Client Challenge
                      </div>
                      <p className="text-sm text-muted-foreground">{service.clientProblem}</p>
                    </div>
                  )}

                  {service.methodology && (
                    <details className="pl-14 text-sm group/details">
                      <summary className="cursor-pointer font-semibold text-primary hover:text-accent transition-colors">
                        Our Methodology →
                      </summary>
                      <p className="mt-2 text-muted-foreground">{service.methodology}</p>
                    </details>
                  )}

                  {service.deliverable && (
                    <div className="mt-3 pl-14 pt-3 border-t">
                      <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                        Typical Outcome
                      </div>
                      <p className="text-sm font-medium">{service.deliverable}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      {appliedIndustries.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Where We Apply This Capability
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Industries where our {capability.name.toLowerCase()} expertise drives value
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {appliedIndustries.map((industry) => (
                  <Link
                    key={industry.slug}
                    href={`/industries/${industry.slug}`}
                    className="group bg-white p-6 rounded-xl border-2 border-slate-200 hover:border-primary hover:shadow-lg transition-all"
                  >
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      {industry.cluster}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {industry.localContext.title}
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

      {/* Delivery Units */}
      {relatedUnits.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How We Deliver
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Specialized units that bring this capability to life
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {relatedUnits.map((unit) => (
                  <Link
                    key={unit.slug}
                    href={`/units/${unit.slug}`}
                    className="group bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-xl border-2 border-slate-200 hover:border-primary hover:shadow-lg transition-all"
                  >
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      {unit.role}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {unit.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">{unit.hook}</p>
                    <div className="flex items-center text-sm font-medium text-primary">
                      Learn More
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
          description="Deep-dive research and thought leadership"
          context={capability.name}
        />
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our {capability.name.toLowerCase()} expertise can drive value for your organization
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
