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
    <section className="py-24 md:py-32 bg-white" style={{ borderTop: '1px solid var(--gray-30)', borderBottom: '1px solid var(--gray-30)' }}>
      <div className="container max-w-5xl">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: 'var(--text-01)' }}>
              Ready to Drive Real Impact?
            </h2>
            <p className="text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--text-02)' }}>
              Schedule a free 30-minute intro call. Let's discuss your challenges and explore how our proven strategies can help achieve your goals.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex flex-wrap justify-center gap-6 text-base" style={{ color: 'var(--text-02)' }}>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2" style={{ backgroundColor: 'var(--red-90)' }} />
                <span>No Commitment Required</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2" style={{ backgroundColor: 'var(--red-90)' }} />
                <span>Personalized Discussion</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2" style={{ backgroundColor: 'var(--red-90)' }} />
                <span>Clear Next Steps</span>
              </div>
            </div>

            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="min-w-[280px] h-12 text-base" 
                style={{ backgroundColor: 'var(--red-90)', color: 'white', border: 'none', fontWeight: 500 }}
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
