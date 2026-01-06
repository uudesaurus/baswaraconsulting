"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === imageRef.current) {
              entry.target.style.opacity = '1'
              entry.target.style.transform = 'translateX(0)'
            }
            if (entry.target === contentRef.current) {
              entry.target.style.opacity = '1'
              entry.target.style.transform = 'translateX(0)'
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    if (imageRef.current) observer.observe(imageRef.current)
    if (contentRef.current) observer.observe(contentRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef} 
      style={{
        backgroundColor: 'var(--ui-background)',
        paddingTop: 'var(--spacing-11)',
        paddingBottom: 'var(--spacing-11)',
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
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--spacing-09)',
            alignItems: 'center',
          }}
        >
          {/* Image */}
          <div 
            ref={imageRef} 
            style={{
              opacity: 0,
              transform: 'translateX(-32px)',
              transition: 'all 800ms var(--transition-accent)',
              position: 'relative',
            }}
          >
            <div style={{ position: 'relative', height: '500px', overflow: 'hidden' }}>
              <Image
                src="/images/arief.png"
                alt="Arief Sudrajat, Founder of Baswara Consulting"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            
            {/* Founder card */}
            <div
              style={{
                position: 'absolute',
                bottom: '-24px',
                right: '-24px',
                backgroundColor: 'white',
                padding: 'var(--spacing-06)',
                border: '1px solid var(--gray-30)',
                width: '280px',
              }}
            >
              <p
                style={{
                  fontSize: '12px',
                  color: 'var(--text-02)',
                  marginBottom: 'var(--spacing-02)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  fontWeight: 500,
                }}
              >
                Founder
              </p>
              <h4
                style={{
                  fontSize: '18px',
                  lineHeight: '24px',
                  fontWeight: 600,
                  color: 'var(--text-01)',
                  marginBottom: 'var(--spacing-02)',
                }}
              >
                Arief Sudrajat
              </h4>
              <p
                style={{
                  fontSize: '12px',
                  color: 'var(--red-90)',
                  fontWeight: 600,
                }}
              >
                26+ Years Experience
              </p>
            </div>
          </div>

          {/* Content */}
          <div
            ref={contentRef}
            style={{
              opacity: 0,
              transform: 'translateX(32px)',
              transition: 'all 800ms var(--transition-accent)',
            }}
          >
            <h2
              style={{
                fontSize: '42px',
                lineHeight: '50px',
                fontWeight: 600,
                color: 'var(--text-01)',
                marginBottom: 'var(--spacing-06)',
              }}
            >
              About <span style={{ color: 'var(--red-90)' }}>Baswara</span> Consulting
            </h2>

            <p
              style={{
                fontSize: '16px',
                lineHeight: '24px',
                color: 'var(--text-02)',
                marginBottom: 'var(--spacing-06)',
              }}
            >
              At Baswara Consulting, we bring together hands-on execution and high-level strategic advisory. Our founder's experience spans both the private and public sectors — from operational roles at Panasonic, Sumitomo, and Atlas Copco, to consulting engagements with institutions such as the World Bank, UNDP, CHEMONICS, and CHAI.
            </p>

            <p
              style={{
                fontSize: '16px',
                lineHeight: '24px',
                color: 'var(--text-02)',
                marginBottom: 'var(--spacing-09)',
              }}
            >
              We operate at the intersection of systems thinking, adaptive design, and contextual intelligence — helping clients solve complex challenges across supply chains, operations, digital transformation, and institutional strategy.
            </p>

            {/* Vision & Mission */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-06)', marginBottom: 'var(--spacing-09)' }}>
              <div
                style={{
                  paddingBottom: 'var(--spacing-06)',
                  borderBottom: '1px solid var(--gray-30)',
                }}
              >
                <h4
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--text-01)',
                    marginBottom: 'var(--spacing-02)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  Our Vision
                </h4>
                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: 'var(--text-02)',
                  }}
                >
                  "To shape adaptive, measurable transformation across industries and systems."
                </p>
              </div>

              <div>
                <h4
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--text-01)',
                    marginBottom: 'var(--spacing-02)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  Our Mission
                </h4>
                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: 'var(--text-02)',
                  }}
                >
                  "Deliver advisory rooted in execution, strategy built on evidence, and solutions co-created with clients."
                </p>
              </div>
            </div>

            {/* Values pills */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'var(--spacing-03)',
                marginBottom: 'var(--spacing-07)',
              }}
            >
              {['Data-Driven', 'Collaborative', 'Impact-Oriented', 'Practical', 'Sustainable'].map((value) => (
                <div
                  key={value}
                  style={{
                    padding: 'var(--spacing-02) var(--spacing-04)',
                    backgroundColor: 'var(--ui-02)',
                    border: '1px solid var(--gray-30)',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: 'var(--text-01)',
                  }}
                >
                  {value}
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-[var(--spacing-06)] h-12 text-[14px] font-semibold text-white bg-[var(--red-90)] hover:bg-[var(--red-80)] transition-colors"
              style={{
                padding: '0 var(--spacing-06)',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
                cursor: 'pointer',
                border: 'none',
              }}
            >
              Learn More About Us →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
