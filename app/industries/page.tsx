import Link from 'next/link'
import { ArrowRight, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { INDUSTRIES } from '@/lib/data'

export const metadata = {
  title: "Industries",
  description: "Deep expertise across Natural Resources, Industrial, and Services sectors in Indonesia",
}

// Group industries by cluster
const groupedIndustries = INDUSTRIES.reduce((acc, industry) => {
  if (!acc[industry.cluster]) {
    acc[industry.cluster] = []
  }
  acc[industry.cluster].push(industry)
  return acc
}, {} as Record<string, typeof INDUSTRIES>)

export default function IndustriesPage(){
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-accent text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container relative">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-6">
              Sector Expertise
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              Deep expertise across Indonesia's most critical sectors. We understand the unique 
              regulatory landscape, competitive dynamics, and operational challenges of each industry.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Find Your Industry <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Indonesia First */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl border-2 border-amber-200">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-600/10 flex items-center justify-center">
                <Globe className="h-6 w-6 text-amber-700" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">The Indonesia Advantage</h2>
                <p className="text-muted-foreground mb-4">
                  Unlike global consulting firms that parachute in generic frameworks, we bring 
                  deep local knowledge. Every industry page highlights the specific Indonesian 
                  regulatory context—from RKAB approvals in mining to OJK compliance in finance.
                </p>
                <p className="text-sm font-medium text-amber-900">
                  This is not theory. Our team has worked directly with government stakeholders, 
                  BUMN leadership, and industry associations to shape policy and implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries by Cluster */}
      {Object.entries(groupedIndustries).map(([cluster, industries]) => (
        <section key={cluster} className="py-16 bg-slate-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <div className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                  {cluster}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  {cluster === 'Natural Resources' && 'Natural Resources'}
                  {cluster === 'Industrial' && 'Industrial'}
                  {cluster === 'Services' && 'Services'}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industries.map((industry) => (
                  <Link
                    key={industry.slug}
                    href={`/industries/${industry.slug}`}
                    className="group bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-primary hover:shadow-xl transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {industry.hook}
                    </p>

                    {/* Core Services */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {industry.coreServices.slice(0, 2).map((service, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded"
                        >
                          {service}
                        </span>
                      ))}
                      {industry.coreServices.length > 2 && (
                        <span className="px-2 py-1 text-slate-500 text-xs font-medium">
                          +{industry.coreServices.length - 2} more
                        </span>
                      )}
                    </div>

                    {/* Local Context Badge */}
                    <div className="mb-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
                      <div className="text-xs font-semibold text-amber-900 uppercase tracking-wider mb-1">
                        Indonesia Context
                      </div>
                      <div className="text-sm font-medium text-amber-800">
                        {industry.localContext.title}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                      Explore Industry
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* How We Work Across Industries */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Integrated, Not Siloed
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Industry pages don't list generic services. Instead, they show specific 
              applications of our capabilities tailored to each sector's unique challenges.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-slate-50 p-6 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-4">→</div>
                <h3 className="text-lg font-bold mb-2">Capabilities</h3>
                <p className="text-sm text-muted-foreground">
                  Functional expertise like Operations, Digital, or Sustainability
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-4">×</div>
                <h3 className="text-lg font-bold mb-2">Industries</h3>
                <p className="text-sm text-muted-foreground">
                  Sector-specific context and regulatory knowledge
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-4">=</div>
                <h3 className="text-lg font-bold mb-2">Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Executed through specialized units like Baswara X or Implementation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Talk About Your Industry
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Every sector has unique challenges. Let's discuss how Baswara can help you navigate yours.
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
