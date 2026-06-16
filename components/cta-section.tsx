"use client"

import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, ShieldCheck, Clock, Compass } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function CTASection() {
  const pathname = usePathname()
  
  // Don't show CTA on contact and career pages
  if (pathname === "/contact" || pathname === "/career") {
    return null
  }

  return (
    <section className="py-24 bg-white border-t">
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-xs  text-primary uppercase tracking-[0.2em]">Next Steps</div>
              <h2 className="text-4xl md:text-5xl  tracking-tight text-slate-900">
                Ready to Drive <br/>Real Impact?
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg ">
                Schedule a complimentary 30-minute introductory call to discuss your organizational challenges and explore tailored strategic solutions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-3 h-3 text-primary" />
                </div>
                <div>
                  <p className="text-sm  text-slate-900 uppercase tracking-wide">No Commitment</p>
                  <p className="text-xs text-slate-500">Purely exploratory discussion</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-3 h-3 text-primary" />
                </div>
                <div>
                  <p className="text-sm  text-slate-900 uppercase tracking-wide">Personalized</p>
                  <p className="text-xs text-slate-500">Tailored to your sector</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Compass className="w-3 h-3 text-primary" />
                </div>
                <div>
                  <p className="text-sm  text-slate-900 uppercase tracking-wide">Clear Path</p>
                  <p className="text-xs text-slate-500">Actionable next steps defined</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-10 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -mr-32 -mt-32" />
            <div className="relative z-10 space-y-8">
              <h3 className="text-2xl ">Schedule Your Consultation</h3>
              <p className="text-slate-300">
                Choose a time that works for you. Our consultants are ready to help you navigate your next transformation.
              </p>
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full h-14 text-base  bg-primary hover:bg-primary/90 text-white rounded-xl" 
                  asChild
                >
                  <Link href="/contact?type=intro">
                    Book 30-Minute Intro Call
                    <Calendar className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <p className="text-center text-xs text-slate-500">
                  Available for Senior Management & Stakeholders
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
