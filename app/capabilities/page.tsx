import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CAPABILITIES } from '@/lib/data'

export const metadata = {
  title: "Capabilities",
  description: "Seven core capabilities combining strategic thinking with hands-on execution",
}

export default function CapabilitiesPage(){
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-white via-white to-primary/10 py-32 overflow-hidden border-b">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="container relative">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1 bg-primary/5 border border-primary/10 text-primary text-xs  uppercase tracking-[0.2em] rounded-full mb-8">
              Functional Expertise
            </div>
            <h1 className="text-5xl md:text-7xl  mb-8 text-slate-900 tracking-tight">
              Our Capabilities
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed  max-w-3xl">
              Seven core capabilities that combine McKinsey-style strategic thinking with 
              hands-on execution. We deliver data-driven results through deep local expertise.
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

      {/* Capabilities Grid */}
      <section className="py-24 bg-white border-b">
        <div className="container">
          <div className="max-w-4xl mb-16">
            <div className="text-xs  text-primary uppercase tracking-[0.2em] mb-4">
              Our Service Architecture
            </div>
            <h2 className="text-3xl md:text-5xl  mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From strategy to execution, sustainability to digital transformation—
              our integrated capabilities address your most complex challenges in the Indonesian market.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {CAPABILITIES.map((capability, idx) => (
              <Link
                key={capability.slug}
                href={`/capabilities/${capability.slug}`}
                className="group relative bg-white rounded-xl p-8 border-2 border-slate-200 hover:border-primary hover:shadow-2xl transition-all duration-300"
              >
                {/* Number Badge */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary  text-lg group-hover:bg-primary group-hover:text-white transition-colors">
                  {String(idx + 1).padStart(2, '0')}
                </div>

                {/* Content */}
                <div className="pr-16">
                  <h3 className="text-2xl  mb-3 group-hover:text-primary transition-colors">
                    {capability.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {capability.hook}
                  </p>

                  {/* Service Highlights */}
                  <div className="space-y-2 mb-6">
                    {capability.serviceSuite.slice(0, 3).map((service, serviceIdx) => (
                      <div key={serviceIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm ">{service.title}</span>
                      </div>
                    ))}
                    {capability.serviceSuite.length > 3 && (
                      <div className="text-sm text-muted-foreground pl-6">
                        +{capability.serviceSuite.length - 3} more services
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-sm  text-primary group-hover:gap-2 transition-all">
                    Explore Capability
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The Baswara Approach */}
      <section className="py-24 bg-slate-50 border-b">
        <div className="container">
          <div className="max-w-4xl mb-16">
            <h2 className="text-3xl md:text-5xl  mb-6">
              The Baswara Approach
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              How we combine strategic excellence with hands-on execution to deliver measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-2xl  text-primary">01</span>
              </div>
              <h3 className="text-xl  mb-3">Diagnose</h3>
              <p className="text-slate-600 leading-relaxed">
                We perform a rigorous, data-driven deep dive into your business to identify root causes and quantify untapped opportunities.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-2xl  text-primary">02</span>
              </div>
              <h3 className="text-xl  mb-3">Design</h3>
              <p className="text-slate-600 leading-relaxed">
                We co-create pragmatic solutions with your leadership team, blending world-class strategic frameworks with local operational realities.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-2xl  text-primary">03</span>
              </div>
              <h3 className="text-xl  mb-3">Deliver</h3>
              <p className="text-slate-600 leading-relaxed">
                We execute with shared accountability, transferring capabilities to your team to ensure that improvements are sustained long after we leave.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Baswara Matrix */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-5xl bg-gradient-to-br from-slate-900 to-slate-800 p-12 rounded-2xl text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-32 -mt-32" />
            <div className="relative z-10">
              <h3 className="text-3xl  mb-6">The Baswara Matrix</h3>
              <p className="text-lg opacity-80 mb-8 max-w-3xl leading-relaxed">
                Our three-dimensional knowledge architecture connects functional expertise with industry context and specialized delivery units. This ensures that every strategy is grounded in sector-specific reality and every execution is powered by deep technical capability.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link href="/industries" className="text-sm  text-white hover:text-primary transition-colors flex items-center">
                  View Industries <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/insights" className="text-sm  text-white hover:text-primary transition-colors flex items-center">
                  View Insights <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
