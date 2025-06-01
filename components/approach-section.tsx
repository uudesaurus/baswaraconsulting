"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const steps = [
  {
    number: "01",
    title: "Site Selection & Sampling",
    description: "Strategic identification of representative sites across urban, rural, and remote contexts.",
  },
  {
    number: "02",
    title: "Mixed-Methods Data Collection",
    description: "Combining Google Forms, FGDs, and structured interviews for comprehensive insights.",
  },
  {
    number: "03",
    title: "Systems Mapping",
    description: "Value Stream Mapping and Fishbone Diagrams to visualize complex processes and identify bottlenecks.",
  },
  {
    number: "04",
    title: "Solution Modeling",
    description: "Developing tailored models for urban, remote, and hybrid contexts based on data analysis.",
  },
  {
    number: "05",
    title: "Policy Dialogue & Integration",
    description: "Collaborating with stakeholders to integrate solutions into national frameworks.",
  },
]

export default function ApproachSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    )

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Our Approach</h2>
          <p className="text-xl text-muted-foreground">
            A systematic methodology that transforms complex challenges into actionable solutions.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepsRef.current[index] = el)}
                className={cn(
                  "relative grid md:grid-cols-2 gap-8 transition-all duration-700 opacity-0 translate-y-12",
                  index % 2 === 0 ? "md:text-right" : "",
                )}
              >
                <div className={cn("flex items-center", index % 2 === 0 ? "md:justify-end md:order-1" : "")}>
                  <div className="relative">
                    <div className="absolute left-[30px] md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[60px] h-[60px] bg-background rounded-full border-4 border-accent flex items-center justify-center z-10">
                      <span className="text-accent font-heading text-xl">{step.number}</span>
                    </div>
                    <div className="pl-24 md:pl-0">
                      <h3 className="text-2xl font-medium mb-3">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>

                <div className={cn("hidden md:block", index % 2 === 0 ? "order-0" : "")} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button asChild>
            <Link href="/approach">
              Learn More About Our Methodology <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
