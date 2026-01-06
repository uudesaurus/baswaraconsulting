"use client"

import Link from "next/link"
import { Building2, Rocket, Code2 } from "lucide-react"
import { UNITS } from "@/lib/data"

const unitIcons = {
  'x': Code2,
  'implementation': Building2,
  'ventures': Rocket
}

export default function UnitsGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-01)' }}>
            How We Deliver
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-02)' }}>
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
                className="group relative p-8 border transition-all duration-300 hover:border-[var(--red-90)] hover:shadow-[0_8px_16px_rgba(196,30,58,0.15)]"
                style={{ backgroundColor: 'white', borderColor: 'var(--gray-30)' }}
              >
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16" style={{ backgroundColor: 'var(--ui-02)', border: '1px solid var(--gray-30)' }}>
                  <Icon className="h-8 w-8" style={{ color: 'var(--red-90)' }} />
                </div>

                {/* Content */}
                <div className="mb-4">
                  <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-02)' }}>
                    {unit.role}
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-01)' }}>
                    {unit.name}
                  </h3>
                  <p className="text-sm font-medium mb-4" style={{ color: 'var(--red-90)' }}>
                    {unit.subtitle}
                  </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {unit.services.slice(0, 4).map((service: string, idx: number) => (
                    <div key={idx} className="text-xs font-medium" style={{ color: 'var(--text-02)' }}>
                      <div style={{ color: 'var(--red-90)' }}>✓</div>
                      {service.slice(0, 20)}...
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center text-sm font-semibold" style={{ color: 'var(--red-90)' }}>
                  Explore Unit →
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
