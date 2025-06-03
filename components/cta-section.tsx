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
    <div ref={sectionRef} className="py-16 relative overflow-hidden bg-secondary/50">
      <div className="absolute inset-0 animated-gradient opacity-10" />

      <div className="container relative z-10">
        <div
          ref={contentRef}
          className="max-w-2xl mx-auto text-center space-y-6 transition-all duration-1000 opacity-0 translate-y-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading">
            Ready to Transform Your <span className="gradient-text">Business</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Let's discuss how we can help you achieve measurable results through data-driven, practical solutions.
          </p>
          <div className="pt-4">
            <Button size="lg" className="min-w-[200px]" asChild>
              <Link href="/contact">
                Book Intro Call <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
