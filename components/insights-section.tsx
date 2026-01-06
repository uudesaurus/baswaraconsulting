"use client";

import Image from "next/image"
import Link from "next/link"

const insights = [
  {
    id: 1,
    title: "Building an Agile Supply Chain for Public Health Commodities in Indonesia",
    date: "March 2024",
    category: "Healthcare & Supply Chain",
    excerpt: "Managing essential public health commodities such as AIDS, TB and Malaria (ATM) commodities involves navigating a complex ecosystem of logistical, institutional, and governance-related barriers.",
    slug: "agile-supply-chain-indonesia",
    image: "/images/insight.png",
    readTime: "15 min read",
  }
]

export default function InsightsSection() {
  return (
    <section
      style={{
        backgroundColor: 'var(--ui-background)',
        paddingTop: 'var(--spacing-11)',
        paddingBottom: 'var(--spacing-11)',
        borderTop: '1px solid var(--gray-30)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 var(--spacing-07)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 'var(--spacing-04)',
            marginBottom: 'var(--spacing-09)',
          }}
        >
          <div style={{ maxWidth: '720px' }}>
            <h2 style={{ fontSize: '42px', lineHeight: '50px', fontWeight: 600, color: 'var(--text-01)', marginBottom: 'var(--spacing-03)' }}>
              Thought Leadership
            </h2>
            <p style={{ fontSize: '18px', lineHeight: '28px', color: 'var(--text-02)' }}>
              Explore our latest research, analysis, and insights on industry trends and best practices.
            </p>
          </div>

          <Link
            href="/insights"
            className="inline-flex items-center justify-center px-[var(--spacing-06)] h-12 text-sm font-semibold text-[var(--text-01)] border border-[var(--gray-30)] bg-white transition-all duration-200 hover:border-[var(--red-90)] hover:bg-[var(--red-50)]"
            style={{
              textDecoration: 'none',
            }}
          >
            View All Insights →
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--spacing-06)',
          }}
        >
          {insights.map((insight) => (
            <Link
              key={insight.id}
              href={`/insights/${insight.slug}`}
              className="group flex flex-col gap-[var(--spacing-04)] border border-[var(--gray-30)] bg-white p-[var(--spacing-06)] text-inherit transition-all duration-200 hover:border-[var(--red-90)] hover:shadow-[0_4px_8px_rgba(196,30,58,0.1)]"
              style={{
                textDecoration: 'none',
              }}
            >
              <div style={{ position: 'relative', height: '180px', overflow: 'hidden', backgroundColor: 'var(--gray-10)' }}>
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: 'var(--spacing-03)',
                    left: 'var(--spacing-03)',
                    padding: 'var(--spacing-01) var(--spacing-03)',
                    backgroundColor: 'var(--ui-02)',
                    border: '1px solid var(--gray-30)',
                    fontSize: '12px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.4px',
                  }}
                >
                  {insight.category}
                </div>
              </div>

              <div style={{ display: 'flex', gap: 'var(--spacing-02)', alignItems: 'center', color: 'var(--text-02)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.4px' }}>
                <span>{insight.date}</span>
                <span>•</span>
                <span>{insight.readTime}</span>
              </div>

              <h3 style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 600, color: 'var(--text-01)' }}>
                {insight.title}
              </h3>

              <p style={{ fontSize: '14px', lineHeight: '20px', color: 'var(--text-02)' }}>
                {insight.excerpt}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--red-90)', fontWeight: 600, fontSize: '14px', marginTop: 'auto' }}>
                Read More →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
