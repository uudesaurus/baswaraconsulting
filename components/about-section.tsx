"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === imageRef.current) {
              entry.target.classList.add("opacity-100", "translate-x-0")
            }
            if (entry.target === contentRef.current) {
              entry.target.classList.add("opacity-100", "translate-x-0")
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    if (imageRef.current) observer.observe(imageRef.current)
    if (contentRef.current) observer.observe(contentRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="relative transition-all duration-1000 opacity-0 -translate-x-12">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/arief.png"
                alt="Arief Sudrajat, Founder of Ayah Consulting"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-lg border border-border shadow-lg">
              <p className="text-sm text-muted-foreground mb-2">Founder</p>
              <h4 className="text-xl font-medium">Arief Sudrajat</h4>
              <p className="text-accent text-sm">26+ Years Experience</p>
            </div>
          </div>

          <div ref={contentRef} className="transition-all duration-1000 opacity-0 translate-x-12">
            <h2 className="mb-6">
              About <span className="gradient-text">Baswara Consulting</span>
            </h2>
            <p className="text-muted-foreground mb-6">
            At Baswara Consulting, we bring together hands-on execution and high-level strategic advisory. Our founder’s experience spans both the private and public sectors — from operational roles at Panasonic, Sumitomo, and Atlas Copco, to consulting engagements with institutions such as the World Bank, UNDP, CHEMONICS, and CHAI. This dual perspective allows us to translate policy into actionable transformation and ground strategy in the realities of implementation.
            <br/>
            <br/>
            We operate at the intersection of systems thinking, adaptive design, and contextual intelligence — helping clients solve complex challenges across supply chains, operations, digital transformation, and institutional strategy.
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h4 className="text-lg font-medium mb-2">Our Vision</h4>
                <p className="text-muted-foreground">
                  "To shape adaptive, measurable transformation across industries and systems."
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2">Our Mission</h4>
                <p className="text-muted-foreground">
                  "Deliver advisory rooted in execution, strategy built on evidence, and solutions co-created with
                  clients."
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <div className="px-4 py-2 bg-secondary rounded-full text-sm">Data-Driven</div>
              <div className="px-4 py-2 bg-secondary rounded-full text-sm">Collaborative</div>
              <div className="px-4 py-2 bg-secondary rounded-full text-sm">Impact-Oriented</div>
              <div className="px-4 py-2 bg-secondary rounded-full text-sm">Practical</div>
              <div className="px-4 py-2 bg-secondary rounded-full text-sm">Sustainable</div>
            </div>

            <Button asChild>
              <Link href="/about">
                Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
