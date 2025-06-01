"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Activity, Truck, BarChart3, Laptop, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "health",
    icon: <Activity className="h-10 w-10" />,
    title: "Health & Diagnostics Strategy",
    description:
      "Design national diagnostics roadmaps, optimize referral networks, and interface with WHO/Global Fund strategies.",
    items: ["National diagnostics roadmaps", "ARV, VL/EID, TB referral networks", "WHO/Global Fund strategy alignment"],
  },
  {
    id: "supply",
    icon: <Truck className="h-10 w-10" />,
    title: "Adaptive Supply Chain & Logistics Design",
    description:
      "End-to-end supply chain design, 3PL strategy, performance monitoring, SOP building, and cold chain solutions.",
    items: [
      "End-to-end supply chain design",
      "3PL strategy & performance monitoring",
      "Cold chain & reverse logistics",
    ],
  },
  {
    id: "implementation",
    icon: <BarChart3 className="h-10 w-10" />,
    title: "Program Implementation & Project Turnaround",
    description:
      "High-risk project stabilization, field-level execution with measurable KPIs, and stakeholder engagement.",
    items: ["High-risk project stabilization", "Field-level execution with KPIs", "Stakeholder ecosystem engagement"],
  },
  {
    id: "digital",
    icon: <Laptop className="h-10 w-10" />,
    title: "Digital Systems & KPI-Driven Reform",
    description:
      "Strategic deployment of SIHA, SITB, SIMRS, SITRUST, dashboard design, and digital transformation roadmaps.",
    items: ["SIHA, SITB, SIMRS deployment", "Dashboard design & analytics", "Digital transformation roadmaps"],
  },
]

export default function ServicesSection() {
  const [activeService, setActiveService] = useState("health")

  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">What We Do</h2>
          <p className="text-xl text-muted-foreground">
            Our services bridge the gap between strategy and execution, delivering measurable results across sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={cn(
                "relative p-6 rounded-lg border transition-all duration-300",
                activeService === service.id ? "border-accent bg-accent/5" : "border-border hover:border-accent/50",
              )}
            >
              <div
                className={cn(
                  "text-accent mb-4 transition-colors",
                  activeService === service.id ? "text-accent" : "text-muted-foreground",
                )}
              >
                {service.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{service.title}</h3>
              <div
                className={cn(
                  "absolute bottom-0 left-0 w-full h-1 scale-x-0 transition-transform duration-300 origin-left",
                  activeService === service.id && "scale-x-100 bg-accent",
                )}
              />
            </button>
          ))}
        </div>

        <div className="bg-background/50 backdrop-blur-sm rounded-lg p-8 border border-border">
          {services.map((service) => (
            <div
              key={service.id}
              className={cn(
                "grid md:grid-cols-2 gap-8 transition-opacity duration-300",
                activeService === service.id ? "block" : "hidden",
              )}
            >
              <div>
                <h3 className="text-2xl font-medium mb-4 gradient-text">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <Button asChild>
                  <Link href={`/services#${service.id}`}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div>
                <ul className="space-y-4">
                  {service.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-4 mt-1 h-2 w-2 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
