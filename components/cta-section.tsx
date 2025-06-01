"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (contentRef.current) {
            contentRef.current.classList.add("opacity-100", "translate-y-0")
          }
        }
      },
      { threshold: 0.1 },
    )

    if (contentRef.current) observer.observe(contentRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-10" />

      <div className="container relative z-10">
        <div
          ref={contentRef}
          className="max-w-3xl mx-auto text-center space-y-8 transition-all duration-1000 opacity-0 translate-y-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading">
            Ready to Transform Your <span className="gradient-text">Strategy</span>?
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's discuss how Ayah Consulting can help you achieve measurable results through data-driven, practical
            solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button size="lg" asChild>
              <Link href="/contact">
                Book Intro Call <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">
                Submit RFP Inquiry <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
