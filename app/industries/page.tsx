import Link from 'next/link'
import { ArrowRight, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { INDUSTRIES } from '@/lib/data'
import IndustriesGrid from '@/components/industries-grid'

export const metadata = {
  title: "Industries",
  description: "Deep expertise across Natural Resources, Industrial, and Services sectors in Indonesia",
}

export default function IndustriesPage(){
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
              Sector Expertise
            </div>
            <h1 style={{ fontSize: '48px', lineHeight: '56px', fontWeight: 600, color: 'var(--text-01)', marginBottom: 'var(--spacing-04)' }}>
              Industries We Serve
            </h1>
            <p style={{ fontSize: '18px', lineHeight: '28px', color: 'var(--text-02)', marginBottom: 'var(--spacing-09)' }}>
              Deep expertise across Indonesia's most critical sectors. We understand the unique regulatory landscape, competitive dynamics, and operational challenges of each industry.
            </p>
            <div style={{ display: 'flex', gap: 'var(--spacing-04)', flexWrap: 'wrap' }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-[var(--spacing-06)] h-12 text-[14px] font-semibold text-white bg-[var(--red-90)] hover:bg-[var(--red-80)] transition-colors"
                style={{ textDecoration: 'none', border: 'none', cursor: 'pointer' }}
              >
                Find Your Industry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Indonesia First */}
      <section className="py-16 bg-white" style={{ borderTop: '1px solid var(--gray-30)' }}>
        <div className="container">
          <div className="max-w-4xl mx-auto p-8 border border-[var(--gray-30)] bg-[var(--ui-background)]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[var(--red-50)] flex items-center justify-center" style={{ border: '1px solid var(--gray-30)' }}>
                <Globe className="h-6 w-6" color="var(--red-90)" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-[var(--text-01)]">The Indonesia Advantage</h2>
                <p className="text-[var(--text-02)] mb-4">
                  Unlike global consulting firms that parachute in generic frameworks, we bring 
                  deep local knowledge. Every industry page highlights the specific Indonesian 
                  regulatory context—from RKAB approvals in mining to OJK compliance in finance.
                </p>
                <p className="text-sm font-medium" style={{ color: 'var(--red-90)' }}>
                  This is not theory. Our team has worked directly with government stakeholders, 
                  BUMN leadership, and industry associations to shape policy and implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries by Cluster */}
      <IndustriesGrid />

      {/* How We Work Across Industries */}
      <section className="py-24 bg-white" style={{ borderTop: '1px solid var(--gray-30)' }}>
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text-01)' }}>
              Integrated, Not Siloed
            </h2>
            <p className="text-xl mb-12" style={{ color: 'var(--text-02)' }}>
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
      <section className="py-20" style={{ backgroundColor: 'var(--ui-background)', borderTop: '1px solid var(--gray-30)' }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[var(--text-01)]">
            Let's Talk About Your Industry
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-02)' }}>
            Every sector has unique challenges. Let's discuss how Baswara can help you navigate yours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-[var(--spacing-06)] h-12 text-[14px] font-semibold text-white bg-[var(--red-90)] hover:bg-[var(--red-80)] transition-colors"
            style={{ textDecoration: 'none', border: 'none', cursor: 'pointer' }}
          >
            Start the Conversation
          </Link>
        </div>
      </section>
    </main>
  )
}
