import { notFound } from 'next/navigation'
import Link from 'next/link'
import ContextualCTA from '../../../components/ContextualCTA'
import { CAPABILITIES, INDUSTRIES } from '@/lib/mock-data'

export default function CapabilityPage({ params }: { params: { slug: string } }){
  const capability = CAPABILITIES.find((c) => c.slug === params.slug)
  if (!capability) return notFound()

  // Find Industries where this capability is applied
  const appliedIndustries = INDUSTRIES.filter((ind) => ind.relatedCapabilities.includes(capability.slug))

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">{capability.title}</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl">{capability.heroHeadline}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-heading mb-4">Service deep dive</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {capability.serviceSuite.map((s, idx) => (
              <div key={idx} className="p-6 border rounded bg-card">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.clientProblem}</p>
                <details className="mt-2 text-sm">
                  <summary className="cursor-pointer font-medium">Methodology</summary>
                  <p className="mt-2 text-muted-foreground">{s.methodology}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-heading mb-8">Where we apply this capability</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {appliedIndustries.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className="block p-6 rounded border bg-white hover:shadow-md">
                <h4 className="text-lg font-semibold">{ind.title}</h4>
                <p className="text-sm text-muted-foreground">{ind.localContext.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContextualCTA pageType="capability" slug={params.slug} />

    </main>
  )
}
