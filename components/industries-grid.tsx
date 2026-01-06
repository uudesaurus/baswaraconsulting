"use client"

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { INDUSTRIES } from '@/lib/data'

const groupedIndustries = INDUSTRIES.reduce((acc, industry) => {
  if (!acc[industry.cluster]) {
    acc[industry.cluster] = []
  }
  acc[industry.cluster].push(industry)
  return acc
}, {} as Record<string, typeof INDUSTRIES>)

export default function IndustriesGrid() {
  return (
    <>
      {Object.entries(groupedIndustries).map(([cluster, industries]) => (
        <section key={cluster} className="py-16 bg-white" style={{ borderTop: '1px solid var(--gray-30)' }}>
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <div className="inline-block px-4 py-1 text-sm font-semibold mb-4" style={{ backgroundColor: 'var(--ui-02)', border: '1px solid var(--gray-30)', color: 'var(--text-01)' }}>
                  {cluster}
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text-01)]">
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
                    className="group bg-white p-6 border border-[var(--gray-30)] transition-all duration-200 hover:border-[var(--red-90)] hover:shadow-[0_4px_8px_rgba(196,30,58,0.1)]"
                    style={{
                      textDecoration: 'none',
                    }}
                  >
                    <h3 className="text-2xl font-semibold mb-2 text-[var(--text-01)]">
                      {industry.name}
                    </h3>
                    <p className="text-[var(--text-02)] mb-4">
                      {industry.hook}
                    </p>

                    {/* Core Services */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {industry.coreServices.slice(0, 2).map((service, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-[var(--text-01)] text-xs font-medium"
                          style={{ border: '1px solid var(--gray-30)', backgroundColor: 'var(--ui-02)' }}
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
                    <div className="mb-4 p-3" style={{ border: '1px solid var(--gray-30)', backgroundColor: 'var(--ui-02)' }}>
                      <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--text-01)' }}>
                        Indonesia Context
                      </div>
                      <div className="text-sm font-medium" style={{ color: 'var(--text-02)' }}>
                        {industry.localContext.title}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-sm font-semibold" style={{ color: 'var(--red-90)' }}>
                      Explore Industry →
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
