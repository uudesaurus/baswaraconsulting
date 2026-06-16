import Link from 'next/link'
import { ArrowRight, Globe, ShieldCheck } from 'lucide-react'
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
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-white via-white to-primary/10 py-32 overflow-hidden border-b">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="container relative">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1 bg-primary/5 border border-primary/10 text-primary text-xs  uppercase tracking-[0.2em] rounded-full mb-8">
              Sector Expertise
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 md:mb-8 text-slate-900 tracking-tight">
              Industries We Serve
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-10 md:mb-12 leading-relaxed font-medium max-w-3xl">
              Deep expertise across Indonesia's most critical sectors. We understand the unique 
              regulatory landscape, competitive dynamics, and operational challenges of each industry.
            </p>
            <div className="flex flex-wrap gap-6">
              <Button size="lg" className="rounded-full px-8 h-14 text-base " asChild>
                <Link href="/contact">
                  Find Your Industry <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Indonesia First */}
      <section className="py-24 bg-white border-b">
        <div className="container">
          <div className="max-w-5xl">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <div>
                <div className="text-xs  text-primary uppercase tracking-[0.2em] mb-4">
                  The Baswara Advantage
                </div>
                <h2 className="text-3xl md:text-5xl  mb-6">Deep Local Knowledge</h2>
                <p className="text-xl text-slate-700 leading-relaxed mb-6 max-w-3xl">
                  Unlike global consulting firms that parachute in generic frameworks, we bring 
                  deep local knowledge. Every industry we serve is a node in our knowledge matrix, 
                  highlighting specific Indonesian regulatory contexts—from RKAB approvals in mining to OJK compliance in finance.
                </p>
                <p className="text-lg  text-slate-500 border-l-4 border-primary/20 pl-6 py-2">
                  Our team has worked directly with government stakeholders, BUMN leadership, 
                  and industry associations to shape policy and ensure successful implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries by Cluster */}
      {Object.entries(groupedIndustries).map(([cluster, industries]) => (
        <section key={cluster} className="py-24 bg-slate-50 border-b">
          <div className="container">
            <div className="max-w-4xl mb-16">
              <div className="text-xs  text-primary uppercase tracking-[0.2em] mb-4">
                {cluster} Cluster
              </div>
              <h2 className="text-3xl md:text-5xl ">
                {cluster}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="group bg-white rounded-xl p-8 border-2 border-slate-200 hover:border-primary hover:shadow-2xl transition-all duration-300 flex flex-col"
                >
                  <h3 className="text-2xl  mb-3 group-hover:text-primary transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-slate-600 mb-6 flex-1">
                    {industry.hook}
                  </p>

                  {/* Core Services */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {industry.coreServices.map((service, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px]  uppercase tracking-wider rounded"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* Local Context Badge */}
                  <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <div className="text-[10px]  text-primary uppercase tracking-widest mb-1">
                      Indonesia Context
                    </div>
                    <div className="text-sm  text-slate-800">
                      {industry.localContext.title}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-sm  text-primary group-hover:gap-2 transition-all">
                    Explore Sector
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* How We Work Across Industries */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-5xl">
            <div className="text-xs  text-primary uppercase tracking-[0.2em] mb-4">
              Integrated Expertise
            </div>
            <h2 className="text-3xl md:text-5xl  mb-8">
              Matrix-Based Delivery
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-16 max-w-3xl">
              We do not believe in siloed expertise. Our industry pages demonstrate the intersection of functional capability and deep sector-specific context.
            </p>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="text-4xl  text-primary/20 mb-6 tracking-tighter">01</div>
                <h3 className="text-xl  mb-3">Capabilities</h3>
                <p className="text-slate-600">
                  World-class functional expertise across Strategy, Operations, and Digital.
                </p>
              </div>
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="text-4xl  text-primary/20 mb-6 tracking-tighter">02</div>
                <h3 className="text-xl  mb-3">Industries</h3>
                <p className="text-slate-600">
                  Deep sector-specific context and regulatory foresight in Indonesia.
                </p>
              </div>
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="text-4xl  text-primary/20 mb-6 tracking-tighter">03</div>
                <h3 className="text-xl  mb-3">Delivery</h3>
                <p className="text-slate-600">
                  Execution through specialized units designed for high-impact implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
