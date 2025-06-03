"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function CTASection() {
  const pathname = usePathname()
  
  // Don't show CTA on contact and career pages
  if (pathname === "/contact" || pathname === "/career" || pathname === "/") {
    return null
  }

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10" />
      
      {/* Subtle mesh gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 max-w-5xl">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Ready to Drive{" "}
              <span className="relative inline-block">
                <span className="relative z-10 gradient-text">Real Impact</span>
                <span className="absolute inset-x-0 bottom-0 h-3 bg-primary/10 -skew-x-12 transform" />
              </span>
              ?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Schedule a free 30-minute intro call. Let's discuss your challenges and explore how our proven strategies can help achieve your goals.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex flex-wrap justify-center gap-6 text-base text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary/50" />
                <span>No Commitment Required</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary/50" />
                <span>Personalized Discussion</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary/50" />
                <span>Clear Next Steps</span>
              </div>
            </div>

            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="min-w-[280px] h-12 text-base" 
                asChild
              >
                <Link href="/contact?type=intro">
                  Book Free 30 Minutes Call
                  <Calendar className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
