"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 26, label: "Years Experience", suffix: "+" },
  { value: 10, label: "Countries", suffix: "+" },
  { value: 100, label: "Stakeholders Served", suffix: "+" },
  { value: 40, label: "Projects Completed", suffix: "+" },
]

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef} 
      style={{
        backgroundColor: 'var(--ui-background)',
        paddingTop: 'var(--spacing-11)',
        paddingBottom: 'var(--spacing-11)',
        borderTop: '1px solid var(--gray-30)',
        borderBottom: '1px solid var(--gray-30)',
        position: 'relative',
        overflow: 'hidden',
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--spacing-09)',
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                textAlign: 'center',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
                transition: `all var(--transition-accent) ${index * 150}ms`,
              }}
            >
              {/* Large number */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'center',
                  gap: '4px',
                  marginBottom: 'var(--spacing-03)',
                }}
              >
                <span
                  style={{
                    fontSize: '48px',
                    lineHeight: '56px',
                    fontWeight: 600,
                    color: 'var(--red-90)',
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: '28px',
                    fontWeight: 400,
                    color: 'var(--red-90)',
                  }}
                >
                  {stat.suffix}
                </span>
              </div>
              
              {/* Label */}
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: 'var(--text-02)',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
