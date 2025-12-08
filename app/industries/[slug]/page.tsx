import { notFound } from 'next/navigation'
import { INDUSTRIES, CAPABILITIES, UNITS } from '@/lib/mock-data'

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = INDUSTRIES.find((i) => i.slug === params.slug)
  if (!industry) return notFound()

  const relevantCapabilities = CAPABILITIES.filter((cap) => industry.relatedCapabilities.includes(cap.slug))
  const relevantUnits = UNITS.filter((u) => industry.relatedUnits.includes(u.slug))

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">{industry.title}</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl">{industry.heroHeadline}</p>
        </div>
      </section>

      {/* LOCAL CONTEXT */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="bg-card p-8 rounded-lg border-l-4 border-primary/60">
            <h6 className="text-xs font-semibold uppercase text-muted-foreground">Indonesia Context</h6>
            <h3 className="text-2xl font-heading mt-2 mb-3">{industry.localContext.title}</h3>
            <p className="text-muted-foreground">{industry.localContext.description}</p>
          </div>
        </div>
      </section>

      {/* CAPABILITY MATRIX */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-heading mb-8">How we help {industry.title} clients</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {relevantCapabilities.map((cap) => (
              <div key={cap.slug} className="group bg-white p-6 rounded-lg shadow-sm border">
                <h4 className="text-xl font-semibold mb-3">{cap.title}</h4>
                <ul className="space-y-3">
                  {cap.serviceSuite.slice(0, 3).map((s, idx) => (
                    <li key={idx}>
                      <strong className="block">{s.title}</strong>
                      <span className="text-sm text-muted-foreground">{s.clientProblem}</span>
                    </li>
                  ))}
                </ul>
                <a href={`/capabilities/${cap.slug}`} className="inline-block mt-6 text-sm font-semibold text-primary">Explore capability →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY UNITS */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-heading mb-8">Specialized Delivery</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {relevantUnits.map((unit) => (
              <div key={unit.slug} className="bg-primary text-primary-foreground p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-2">{unit.brandName}</h3>
                <p className="mb-4">{unit.valueProp}</p>
                <div className="flex flex-wrap gap-2">
                  {unit.techAssets.map((a) => (
                    <span key={a} className="bg-white/10 px-3 py-1 rounded-full text-sm">{a}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
