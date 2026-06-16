import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CAPABILITIES, INDUSTRIES, UNITS, getInsightsByCapability } from '@/lib/data'
import InsightsEngine from '@/components/insights-engine'

export async function generateStaticParams() {
  return CAPABILITIES.map((capability) => ({
    slug: capability.slug,
  }))
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const slug = params.slug
  const capability = CAPABILITIES.find((c) => c.slug === slug)
  
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

export default async function CapabilityPage(props: { params: Promise<{ slug: string }> }){
  const params = await props.params
  const slug = params.slug
  const capability = CAPABILITIES.find((c) => c.slug === slug)
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
      <section className="relative bg-gradient-to-r from-white via-white to-primary/10 py-32 overflow-hidden border-b">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="container relative">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1 bg-primary/5 border border-primary/10 text-primary text-xs  uppercase tracking-[0.2em] rounded-full mb-8">
              Functional Capability
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl mb-6 md:mb-8 text-slate-900 tracking-tight">{capability.name}</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-6 leading-relaxed max-w-3xl">
              {capability.headline}
            </p>
            <p className="text-lg text-slate-500 italic mb-10 border-l-4 border-primary/20 pl-6">
              {capability.hook}
            </p>
            <div className="flex flex-wrap gap-6">
              <Button size="lg" className="rounded-full px-8 h-14 text-base " asChild>
                <Link href="/contact">
                  Discuss Your Needs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Deep Dive */}
      <section className="py-24 bg-white border-b">
        <div className="container">
          <div className="max-w-5xl mb-16">
            <div className="text-xs  text-primary uppercase tracking-[0.2em] mb-4">
              Our Expertise
            </div>
            <h2 className="text-3xl md:text-5xl  mb-6">How We Deliver Value</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              We provide a comprehensive suite of services designed to address complex operational and strategic challenges, combining world-class methodology with local execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
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
                    <h3 className="text-xl  mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground  mb-4">
                      {service.description}
                    </p>
                  </div>
                </div>

                {service.clientProblem && (
                  <div className="mb-3 pl-14">
                    <div className="text-xs  text-muted-foreground uppercase tracking-wider mb-1">
                      Client Challenge
                    </div>
                    <p className="text-sm text-muted-foreground">{service.clientProblem}</p>
                  </div>
                )}

                {service.methodology && (
                  <details className="pl-14 text-sm group/details">
                    <summary className="cursor-pointer  text-primary hover:text-accent transition-colors">
                      Our Methodology →
                    </summary>
                    <p className="mt-2 text-muted-foreground">{service.methodology}</p>
                  </details>
                )}

                {service.deliverable && (
                  <div className="mt-3 pl-14 pt-3 border-t">
                    <div className="text-xs  text-primary uppercase tracking-wider mb-1">
                      Typical Outcome
                    </div>
                    <p className="text-sm ">{service.deliverable}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      {appliedIndustries.length > 0 && (
        <section className="py-24 bg-slate-50 border-b">
          <div className="container">
            <div className="max-w-5xl mb-16">
              <h2 className="text-3xl md:text-5xl  mb-6">
                Sector Applications
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our {capability.name.toLowerCase()} expertise is deployed across Indonesia's most critical industries, solving sector-specific challenges with proven results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {appliedIndustries.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="group bg-white p-6 rounded-xl border-2 border-slate-200 hover:border-primary hover:shadow-lg transition-all"
                >
                  <div className="text-xs  text-muted-foreground uppercase tracking-wider mb-2">
                    {industry.cluster}
                  </div>
                  <h3 className="text-xl  mb-2 group-hover:text-primary transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {industry.localContext.title}
                  </p>
                  <div className="flex items-center text-sm  text-primary">
                    Explore Industry
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
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
    </main>
  )
}
