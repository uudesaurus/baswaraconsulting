import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { INDUSTRIES, CAPABILITIES, UNITS, getInsightsByIndustry } from '@/lib/data'
import InsightsEngine from '@/components/insights-engine'
import WhitepaperSection from '@/components/whitepaper-section'

export async function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({
    slug: industry.slug,
  }))
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const slug = params.slug
  const industry = INDUSTRIES.find((i) => i.slug === slug)

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

export default async function IndustryPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const slug = params.slug
  const industry = INDUSTRIES.find((i) => i.slug === slug)
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
      <section className="relative bg-gradient-to-r from-white via-white to-primary/10 py-32 overflow-hidden border-b">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="container relative">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1 bg-primary/5 border border-primary/10 text-primary text-xs  uppercase tracking-[0.2em] rounded-full mb-8">
              Sector Overview — {industry.cluster}
            </div>
            <h1 className="text-5xl md:text-7xl  mb-8 text-slate-900 tracking-tight">{industry.name}</h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed  max-w-3xl">
              {industry.hook}
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              {industry.coreServices.map((service, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-slate-100 border border-slate-200 text-slate-700 rounded-lg text-sm  uppercase tracking-wider"
                >
                  {service}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-6">
              <Button size="lg" className="rounded-full px-8 h-14 text-base " asChild>
                <Link href="/contact">
                  Discuss Your Challenge <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Context - The Indonesian Advantage */}
      <section className="py-20 bg-white border-b">
        <div className="container">
          <div className="max-w-5xl">
            <div className="flex items-start gap-4 mb-8">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-xs  text-primary uppercase tracking-[0.2em] mb-3">
                  Strategic Landscape: Indonesia
                </div>
                <h2 className="text-3xl md:text-4xl  mb-4">{industry.localContext.title}</h2>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/20" />
              <div className="pl-8">
                <p className="text-xl text-slate-700 leading-relaxed  max-w-4xl">
                  {industry.localContext.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Matrix */}
      <section className="py-24 bg-slate-50 border-b">
        <div className="container">
          <div className="max-w-5xl mb-16">
            <h2 className="text-3xl md:text-5xl  mb-6">
              Strategic Solutions for {industry.name}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We apply our deep functional expertise to solve the most critical challenges facing {industry.name.toLowerCase()} leadership in Indonesia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relevantCapabilities.map((capability) => (
              <div
                key={capability.slug}
                className="group bg-white p-6 rounded-xl border-2 border-slate-200 hover:border-primary hover:shadow-lg transition-all"
              >
                <h3 className="text-xl  mb-3 group-hover:text-primary transition-colors">
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
                        <span>{service.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/capabilities/${capability.slug}`}
                  className="flex items-center text-sm  text-primary group-hover:gap-2 transition-all"
                >
                  Explore Capability
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Whitepapers & Research */}
      {industry.whitepapers && industry.whitepapers.length > 0 && (
        <WhitepaperSection
          whitepapers={industry.whitepapers}
          title="Research & Whitepapers"
          description={`Download our in-depth research and analysis specific to ${industry.name}`}
          industryName={industry.name}
        />
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
    </main>
  )
}
