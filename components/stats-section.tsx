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
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "transition-all duration-700 opacity-0 translate-y-4 border-l-2 border-primary/20 pl-6 py-2",
                isVisible && "opacity-100 translate-y-0",
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl md:text-5xl  tracking-tighter mb-2">
                <span className="text-slate-900">{stat.value}</span>
                <span className="text-primary">{stat.suffix}</span>
              </div>
              <p className="text-xs  text-slate-400 uppercase tracking-[0.2em]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
