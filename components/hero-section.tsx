"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"
import ClientMarquee from "@/components/client-marquee"

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const moveX = ((clientX - innerWidth / 2) / innerWidth) * 20
      const moveY = ((clientY - innerHeight / 2) / innerHeight) * 20

      const elements = heroRef.current.querySelectorAll(".parallax")
      elements.forEach((el) => {
        const speed = Number.parseFloat((el as HTMLElement).dataset.speed || "1")
        ;(el as HTMLElement).style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-[100px]" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-accent/20 rounded-full parallax"
          data-speed="0.5"
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary/20 rounded-full parallax"
          data-speed="0.3"
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent/10 rounded-full parallax"
          data-speed="0.1"
        />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-block px-4 py-1.5 bg-accent/10 rounded-full mb-6 animate-fade-up [animation-delay:200ms] opacity-0">
            <span className="text-sm font-medium text-accent">Transforming Industries & Systems</span>
          </div>

          <h1 className="animate-fade-up [animation-delay:300ms] opacity-0">
            <span className="gradient-text">Multisectoral Insight.</span> <br />
            Global Execution.
          </h1>

          <p className="text-xl text-muted-foreground animate-fade-up [animation-delay:400ms] opacity-0">
            Baswara Consulting brings 26+ years of experience across global industry and national health reform into
            integrated, actionable strategy.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4 animate-fade-up [animation-delay:500ms] opacity-0">
            <Button size="lg" variant="outline" asChild>
              <Link href="#">
                Download Company Profile
                <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-20 animate-fade-up [animation-delay:600ms] opacity-0">
          <p className="text-center text-sm text-muted-foreground mb-6">Trusted by leading organizations worldwide</p>
          <ClientMarquee />
        </div>
      </div>
    </section>
  )
}
