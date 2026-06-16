import Link from "next/link"
import { ArrowRight, Building2, Rocket, Code2 } from "lucide-react"
import { UNITS } from "@/lib/data"
import { Button } from "@/components/ui/button"

const unitIcons = {
  'x': Code2,
  'implementation': Building2,
  'ventures': Rocket
}

export const metadata = {
  title: "Specialized Units",
  description: "Three distinct delivery engines combining consulting excellence with hands-on execution capability",
}

export default function UnitsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-accent text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container relative">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm text-white text-sm  rounded-full mb-6">
              Beyond Traditional Consulting
            </div>
            <h1 className="text-4xl md:text-6xl  mb-6">
              Specialized Delivery Engines
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              Three distinct units combining strategic consulting with hands-on execution. 
              We don't just recommend—we build, implement, and scale alongside you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Discuss Your Challenge <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Units Grid */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl  mb-4">
              How We Deliver
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each unit brings specialized capabilities, from technology engineering to on-the-ground 
              execution to venture building.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {UNITS.map((unit, unitIndex) => {
              const Icon = unitIcons[unit.slug as keyof typeof unitIcons]
              
              return (
                <Link
                  key={unit.slug}
                  href={`/units/${unit.slug}`}
                  className="group relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 border-2 border-slate-200 hover:border-primary hover:shadow-2xl transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="h-8 w-8" />
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <div className="text-xs  text-muted-foreground uppercase tracking-wider mb-2">
                      {unit.role}
                    </div>
                    <h3 className="text-2xl  mb-2 group-hover:text-primary transition-colors">
                      {unit.name}
                    </h3>
                    <p className="text-sm text-primary/80  mb-4">
                      {unit.tagline}
                    </p>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {unit.hook}
                  </p>

                  {/* Core Offerings */}
                  <div className="space-y-3 mb-6">
                    {unit.coreOfferings.map((offering, offeringIdx) => (
                      <div key={offeringIdx} className="flex items-start gap-2">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <div>
                          <div className=" text-sm">{offering.title}</div>
                          <div className="text-xs text-muted-foreground">{offering.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-sm  text-primary group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 text-6xl  text-slate-100 group-hover:text-primary/10 transition-colors">
                    {unitIndex + 1}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* The Baswara Difference */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl  mb-6">
              The Baswara Difference
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Unlike traditional consulting firms, we maintain skin in the game through three 
              integrated delivery models that ensure your transformation succeeds.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-white p-6 rounded-xl border">
                <div className="text-4xl  text-primary mb-4">01</div>
                <h3 className="text-lg  mb-2">Strategic + Technical</h3>
                <p className="text-sm text-muted-foreground">
                  We combine top-tier strategy with hands-on engineering capability
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border">
                <div className="text-4xl  text-primary mb-4">02</div>
                <h3 className="text-lg  mb-2">Shared Accountability</h3>
                <p className="text-sm text-muted-foreground">
                  Success-based engagement models align our incentives with your outcomes
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border">
                <div className="text-4xl  text-primary mb-4">03</div>
                <h3 className="text-lg  mb-2">Indonesia-First</h3>
                <p className="text-sm text-muted-foreground">
                  Deep local regulatory knowledge and government relations expertise
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
