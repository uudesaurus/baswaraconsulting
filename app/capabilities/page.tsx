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
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        style={{
          backgroundColor: 'white',
          paddingTop: 'var(--spacing-11)',
          paddingBottom: 'var(--spacing-11)',
          borderBottom: '1px solid var(--gray-30)',
        }}
      >
        <div className="container">
          <div className="max-w-4xl">
            <div
              style={{
                display: 'inline-block',
                padding: 'var(--spacing-02) var(--spacing-04)',
                backgroundColor: 'var(--ui-02)',
                border: '1px solid var(--gray-30)',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                marginBottom: 'var(--spacing-06)',
              }}
            >
              Functional Expertise
            </div>
            <h1 style={{ fontSize: '48px', lineHeight: '56px', fontWeight: 600, color: 'var(--text-01)', marginBottom: 'var(--spacing-04)' }}>
              Our Capabilities
            </h1>
            <p style={{ fontSize: '18px', lineHeight: '28px', color: 'var(--text-02)', marginBottom: 'var(--spacing-09)' }}>
              Seven core capabilities that combine strategic thinking with hands-on execution. We don't just recommend—we deliver results.
            </p>
            <div style={{ display: 'flex', gap: 'var(--spacing-04)', flexWrap: 'wrap' }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-[var(--spacing-06)] h-12 text-[14px] font-semibold text-white bg-[var(--red-90)] hover:bg-[var(--red-80)] transition-colors"
                style={{ textDecoration: 'none', border: 'none', cursor: 'pointer' }}
              >
                Discuss Your Needs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From strategy to execution, sustainability to digital transformation—
              our integrated capabilities address your most complex challenges.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {CAPABILITIES.map((capability, idx) => (
              <Link
                key={capability.slug}
                href={`/capabilities/${capability.slug}`}
                className="group relative p-8 border border-[var(--gray-30)] bg-white transition-all duration-200 hover:border-[var(--red-90)] hover:shadow-[0_4px_8px_rgba(196,30,58,0.1)]"
                style={{ textDecoration: 'none' }}
              >
                {/* Number Badge */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-[var(--ui-02)]" style={{ border: '1px solid var(--gray-30)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'var(--text-01)' }}>
                  {String(idx + 1).padStart(2, '0')}
                </div>

                {/* Content */}
                <div className="pr-16">
                  <h3 className="text-2xl font-semibold mb-3 text-[var(--text-01)]">
                    {capability.name}
                  </h3>
                  <p className="text-[var(--text-02)] mb-6">
                    {capability.hook}
                  </p>

                  {/* Service Highlights */}
                  <div className="space-y-2 mb-6">
                    {capability.serviceSuite.slice(0, 3).map((service, serviceIdx) => (
                      <div key={serviceIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4" color="var(--red-90)" />
                        <span className="text-sm font-medium text-[var(--text-01)]">{service.title}</span>
                      </div>
                    ))}
                    {capability.serviceSuite.length > 3 && (
                      <div className="text-sm text-[var(--text-02)] pl-6">
                        +{capability.serviceSuite.length - 3} more services
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-sm font-semibold" style={{ color: 'var(--red-90)' }}>
                    Explore Capability →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The Baswara Approach */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              The Baswara Approach
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              How we combine strategic excellence with hands-on execution
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Diagnose</h3>
                <p className="text-sm text-muted-foreground">
                  Deep dive into your business to identify root causes and opportunities
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Design</h3>
                <p className="text-sm text-muted-foreground">
                  Co-create solutions with your team, blending strategy with pragmatism
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Deliver</h3>
                <p className="text-sm text-muted-foreground">
                  Execute with skin in the game, transferring capabilities to ensure sustainability
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Linking Info */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border-2 border-blue-200">
            <h3 className="text-2xl font-bold mb-4">The Baswara Matrix</h3>
            <p className="text-muted-foreground mb-6">
              Each capability page is a node in our three-dimensional knowledge architecture, 
              connecting functional expertise with industry context and specialized delivery units. 
              Insights tagged to each capability surface automatically, proving thought leadership 
              through deep-dive research.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/industries" className="text-sm font-medium text-primary hover:underline">
                View Industries →
              </Link>
              <Link href="/units" className="text-sm font-medium text-primary hover:underline">
                View Delivery Units →
              </Link>
              <Link href="/insights" className="text-sm font-medium text-primary hover:underline">
                View Insights →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss which capabilities can drive the most value for your organization
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
