"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const caseStudies = [
  {
    id: "world-bank",
    client: "World Bank",
    project: "TB PforR",
    problem: "Fragmented, underperforming TB specimen logistics.",
    solution: "Multi-region system mapping, typology-based models, policy design.",
    result: "Integration into 2024 roadmap, cost-efficiency projections, and policy adoption.",
  },
  {
    id: "usaid",
    client: "USAID GHSC-PSM",
    project: "National HIV/TB SCM",
    problem: "National HIV/TB SCM inefficiencies, frequent stockouts.",
    solution: "Directed $25M supply chain project, optimized DNO, rolled out digital tools.",
    result: "Improved diagnostics coverage, lower stockout rates.",
  },
  {
    id: "chai",
    client: "CHAI",
    project: "ARV Delivery",
    problem: "ARV delivery inefficiencies across provinces.",
    solution: "SOP development with MoH, decentralized system.",
    result: "Scalable and monitored provincial logistics model.",
  },
  {
    id: "sumitomo",
    client: "Sumitomo / Atlas Copco",
    project: "Import Optimization",
    problem: "Long import lead times and rising cost.",
    solution: "Streamlined import workflows, improved KPIs.",
    result: "Cut lead times by 40%, reduced landed costs by 10%.",
  },
]

export default function CaseStudiesSection() {
  const [activeCase, setActiveCase] = useState("world-bank")

  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Case Studies</h2>
          <p className="text-xl text-muted-foreground">
            Our work spans across public and private sectors, delivering measurable results for complex challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {caseStudies.map((study) => (
            <button
              key={study.id}
              onClick={() => setActiveCase(study.id)}
              className={cn(
                "p-6 rounded-lg border text-left transition-all duration-300",
                activeCase === study.id ? "border-accent bg-accent/5" : "border-border hover:border-accent/50",
              )}
            >
              <div className="text-sm text-muted-foreground mb-2">{study.client}</div>
              <h4
                className={cn(
                  "text-lg font-medium mb-1 transition-colors",
                  activeCase === study.id ? "text-accent" : "",
                )}
              >
                {study.project}
              </h4>
            </button>
          ))}
        </div>

        <div className="bg-background/50 backdrop-blur-sm rounded-lg p-8 border border-border">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className={cn("transition-opacity duration-300", activeCase === study.id ? "block" : "hidden")}
            >
              <div className="mb-8">
                <div className="text-sm text-muted-foreground mb-2">Client</div>
                <h3 className="text-2xl font-medium gradient-text">{study.client}</h3>
                <p className="text-accent">{study.project}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-medium mb-3">Problem</h4>
                  <p className="text-muted-foreground">{study.problem}</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-3">Solution</h4>
                  <p className="text-muted-foreground">{study.solution}</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-3">Result</h4>
                  <p className="text-muted-foreground">{study.result}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="/credentials">
                View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
