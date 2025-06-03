"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

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
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "text-center transition-all duration-700 opacity-0 translate-y-8",
                isVisible && "opacity-100 translate-y-0",
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl md:text-5xl font-heading mb-2">
                <span className="gradient-text">{stat.value}</span>
                <span className="text-accent">{stat.suffix}</span>
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
