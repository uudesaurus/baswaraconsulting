import Link from "next/link"
import { ArrowRight, Building2, Rocket, Code2 } from "lucide-react"
import { UNITS } from "@/lib/data"
import { Button } from "@/components/ui/button"
import UnitsGrid from "@/components/units-grid"

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
            <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-6">
              Beyond Traditional Consulting
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
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
      <UnitsGrid />

      {/* The Baswara Difference */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Baswara Difference
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Unlike traditional consulting firms, we maintain skin in the game through three 
              integrated delivery models that ensure your transformation succeeds.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-white p-6 rounded-xl border">
                <div className="text-4xl font-bold text-primary mb-4">01</div>
                <h3 className="text-lg font-bold mb-2">Strategic + Technical</h3>
                <p className="text-sm text-muted-foreground">
                  We combine McKinsey-style strategy with hands-on engineering capability
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border">
                <div className="text-4xl font-bold text-primary mb-4">02</div>
                <h3 className="text-lg font-bold mb-2">Shared Accountability</h3>
                <p className="text-sm text-muted-foreground">
                  Success-based engagement models align our incentives with your outcomes
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border">
                <div className="text-4xl font-bold text-primary mb-4">03</div>
                <h3 className="text-lg font-bold mb-2">Indonesia-First</h3>
                <p className="text-sm text-muted-foreground">
                  Deep local regulatory knowledge and government relations expertise
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss which delivery model fits your challenge
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
