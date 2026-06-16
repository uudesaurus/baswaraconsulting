"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Activity, Truck, BarChart3, Laptop, ArrowRight, Building2, FileText, Users2, Globe2, ChevronRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "strategic-advisory",
    title: "Strategic Advisory",
    description: "Transformation and growth strategy.",
    categories: [
      {
        id: "corporate-strategy",
        icon: <Building2 className="h-8 w-8" />,
        title: "Corporate Strategy",
        description: "Defining long-term direction and positioning for sustainable growth in evolving markets.",
        items: [
          "Business Strategy Formulation",
          "Transformation Roadmap Design",
          "Market Opportunity Assessment"
        ]
      },
      {
        id: "model-innovation",
        icon: <FileText className="h-8 w-8" />,
        title: "Model Innovation",
        description: "Redesigning business models to align with technological and regulatory shifts.",
        items: [
          "Business Model Reinvention",
          "Long-Term Planning (RJPP)",
          "Institutional Governance"
        ]
      }
    ]
  },
  {
    id: "operations",
    title: "Operations",
    description: "Supply chain and resilience.",
    categories: [
      {
        id: "supply-chain",
        icon: <Truck className="h-8 w-8" />,
        title: "Supply Chain Strategy",
        description: "Optimizing end-to-end supply chains for visibility, responsiveness, and efficiency.",
        items: [
          "E2E Supply Chain Redesign",
          "Logistics & Network Optimization",
          "Inventory Policy Strategy"
        ]
      },
      {
        id: "resilience",
        icon: <Activity className="h-8 w-8" />,
        title: "Operational Resilience",
        description: "Building continuity plans that safeguard operations in high-risk environments.",
        items: [
          "Supply Risk Mitigation",
          "Business Continuity Planning",
          "Process Reengineering"
        ]
      }
    ]
  },
  {
    id: "digital",
    title: "Digital",
    description: "Technology and data strategy.",
    categories: [
      {
        id: "digital-strategy",
        icon: <Laptop className="h-8 w-8" />,
        title: "Digital Enablement",
        description: "Integrating modern technology and managing organizational adoption of digital change.",
        items: [
          "Digital Transformation Blueprint",
          "ERP & WMS Strategy",
          "Tech-Led Change Management"
        ]
      },
      {
        id: "data-strategy",
        icon: <BarChart3 className="h-8 w-8" />,
        title: "Data Strategy",
        description: "Leveraging data as a strategic asset for real-time, predictive decision making.",
        items: [
          "Data Governance Frameworks",
          "Executive Dashboarding",
          "Advanced Analytics Modeling"
        ]
      }
    ]
  }
]

export default function ServicesSection() {
  const [activeService, setActiveService] = useState("strategic-advisory")
  const selectedService = services.find(s => s.id === activeService)

  return (
    <section id="services" className="py-24 bg-white border-y">
      <div className="container">
        <div className="max-w-4xl mb-16">
          <div className="text-xs  text-primary uppercase tracking-[0.2em] mb-4">
            Our Core Offerings
          </div>
          <h2 className="text-3xl md:text-5xl  mb-6">Expert Service Suite</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We deliver highly specialized consulting services that bridge the gap between abstract strategy and Indonesian operational reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Service Tabs */}
          <div className="lg:col-span-4 space-y-2">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={cn(
                  "w-full text-left p-6 rounded-xl border-2 transition-all duration-300",
                  activeService === service.id 
                    ? "border-primary bg-primary/5 shadow-md" 
                    : "border-transparent hover:bg-slate-50 text-slate-500"
                )}
              >
                <h3 className={cn(
                  "text-lg  mb-1",
                  activeService === service.id ? "text-primary" : "text-slate-900"
                )}>
                  {service.title}
                </h3>
                <p className="text-sm opacity-80">{service.description}</p>
              </button>
            ))}
          </div>

          {/* Service Content */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-8 animate-in fade-in duration-500">
              {selectedService?.categories.map((category) => (
                <div key={category.id} className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
                    <div className="text-primary">{category.icon}</div>
                  </div>
                  <h4 className="text-xl  mb-3">{category.title}</h4>
                  <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm  text-slate-700">
                        <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button variant="link" className="p-0 h-auto text-primary  group" asChild>
                    <Link href="/capabilities">
                      Deep Dive <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
