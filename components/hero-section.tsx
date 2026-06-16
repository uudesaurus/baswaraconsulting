"use client"

import { useEffect, useRef } from "react"
import ClientMarquee from "@/components/client-marquee"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

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
    <section ref={heroRef} className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-slate-200/40 rounded-full blur-[100px]" />
        <div
          className="absolute top-1/2 left-1/4 w-[300px] h-[300px] border border-primary/10 rounded-full parallax"
          data-speed="0.2"
        />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl space-y-8 md:space-y-10">
          <div className="space-y-4">
            <div className="inline-block px-4 py-1.5 bg-primary/5 border border-primary/10 rounded-full animate-fade-up [animation-delay:200ms] opacity-0">
              <span className="text-xs sm:text-sm text-primary uppercase tracking-[0.2em]">Strategic Excellence. Global Impact.</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight text-slate-900 leading-[1.1] md:leading-[0.95] animate-fade-up [animation-delay:300ms] opacity-0">
              Multisectoral <span className="text-primary">Insight.</span><br />
              <span className="text-slate-400">Proven Execution.</span>
            </h1>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed animate-fade-up [animation-delay:400ms] opacity-0">
            Baswara Consulting bridges the gap between high-level strategy and operational reality. We deliver data-driven results for Indonesia's most critical industries.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 pt-4 animate-fade-up [animation-delay:500ms] opacity-0">
            <Button size="lg" className="w-full sm:w-auto rounded-full px-8 h-14 text-base" asChild>
              <Link href="/contact">
                Work with Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 h-14 text-base" asChild>
              <Link href="/capabilities">
                Our Capabilities
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-24 pt-16 border-t border-slate-100 animate-fade-up [animation-delay:700ms] opacity-0">
          <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-[0.2em] mb-6 sm:mb-8">Trusted by leading organizations worldwide</p>
          <ClientMarquee />
        </div>
      </div>
    </section>
  )
}
