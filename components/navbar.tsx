"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown, ArrowRight } from "lucide-react"
import { CAPABILITIES, INDUSTRIES } from "@/lib/data"

// Group industries by cluster
const industryGroups = {
  "Natural Resources": INDUSTRIES.filter(i => i.cluster === "Natural Resources"),
  "Industrial": INDUSTRIES.filter(i => i.cluster === "Industrial"),
  "Services": INDUSTRIES.filter(i => i.cluster === "Services"),
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md py-3 shadow-sm border-b" : "bg-white py-4 border-b",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/logo.svg" alt="Baswara Consulting Logo" width={40} height={40} priority className="h-8 w-auto" />
          <span className="text-xl font-light text-slate-900 tracking-tight">Baswara Consulting</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {/* Capabilities Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("capabilities")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="px-4 py-2 text-sm  text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              Capabilities
              <ChevronDown className="h-3 w-3" />
            </button>
            
            {activeDropdown === "capabilities" && (
              <div className="absolute left-0 top-full pt-2 w-[520px]">
                <div className="bg-white rounded-lg shadow-xl border p-6">
                  <div className="mb-4">
                    <Link 
                      href="/capabilities"
                      className="text-xs  text-primary uppercase tracking-wider hover:underline"
                    >
                      View All Capabilities →
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {CAPABILITIES.map((capability) => (
                      <Link
                        key={capability.slug}
                        href={`/capabilities/${capability.slug}`}
                        className="group p-3 rounded-md hover:bg-slate-50 transition-colors"
                      >
                        <div className=" text-sm mb-1 group-hover:text-primary transition-colors">
                          {capability.name}
                        </div>
                        <div className="text-xs text-muted-foreground line-clamp-2">
                          {capability.headline}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("industries")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="px-4 py-2 text-sm  text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              Industries
              <ChevronDown className="h-3 w-3" />
            </button>
            
            {activeDropdown === "industries" && (
              <div className="absolute left-0 top-full pt-2 w-[720px]">
                <div className="bg-white rounded-lg shadow-xl border p-6">
                  <div className="mb-4">
                    <Link 
                      href="/industries"
                      className="text-xs  text-primary uppercase tracking-wider hover:underline"
                    >
                      View All Industries →
                    </Link>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    {Object.entries(industryGroups).map(([cluster, industries]) => (
                      <div key={cluster}>
                        <div className="text-xs  text-slate-900 uppercase tracking-wider mb-3 pb-2 border-b">
                          {cluster}
                        </div>
                        <div className="space-y-2">
                          {industries.map((industry) => (
                            <Link
                              key={industry.slug}
                              href={`/industries/${industry.slug}`}
                              className="group block p-2 rounded-md hover:bg-slate-50 transition-colors"
                            >
                              <div className=" text-sm mb-0.5 group-hover:text-primary transition-colors">
                                {industry.name}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {industry.coreServices[0]}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Units Link */}
          {/* <Link
            href="/units"
            className="px-4 py-2 text-sm  text-muted-foreground hover:text-foreground transition-colors"
          >
            Specialized Units
          </Link> */}

          {/* Insights Link */}
          <Link
            href="/insights"
            className="px-4 py-2 text-sm  text-muted-foreground hover:text-foreground transition-colors"
          >
            Insights
          </Link>

          {/* About Link */}
          <Link
            href="/about"
            className="px-4 py-2 text-sm  text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>

          {/* Career Link */}
          <Link
            href="/career"
            className="px-4 py-2 text-sm  text-muted-foreground hover:text-foreground transition-colors"
          >
            Career
          </Link>

          {/* CTA Button */}
          <Button variant="default" size="sm" className="ml-2" asChild>
            <Link href="/contact">Book Intro Call</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[320px] sm:w-[400px] overflow-y-auto">
            <nav className="flex flex-col gap-6 mt-8">
              {/* Capabilities */}
              <div>
                <Link 
                  href="/capabilities"
                  className="flex items-center justify-between text-lg  mb-3 hover:text-primary transition-colors"
                >
                  Capabilities
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="space-y-2 pl-4 border-l-2 border-slate-200">
                  {CAPABILITIES.map((cap) => (
                    <Link
                      key={cap.slug}
                      href={`/capabilities/${cap.slug}`}
                      className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {cap.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Industries */}
              <div>
                <Link 
                  href="/industries"
                  className="flex items-center justify-between text-lg  mb-3 hover:text-primary transition-colors"
                >
                  Industries
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="space-y-4 pl-4 border-l-2 border-slate-200">
                  {Object.entries(industryGroups).map(([cluster, industries]) => (
                    <div key={cluster}>
                      <div className="text-xs  text-slate-900 uppercase tracking-wider mb-2">
                        {cluster}
                      </div>
                      <div className="space-y-1.5">
                        {industries.map((industry) => (
                          <Link
                            key={industry.slug}
                            href={`/industries/${industry.slug}`}
                            className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {industry.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other Links */}
              {/* <Link
                href="/units"
                className="text-lg  hover:text-primary transition-colors"
              >
                Specialized Units
              </Link> */}
              <Link
                href="/insights"
                className="text-lg  hover:text-primary transition-colors"
              >
                Insights
              </Link>
              <Link
                href="/about"
                className="text-lg  hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="/career"
                className="text-lg  hover:text-primary transition-colors"
              >
                Career
              </Link>

              {/* CTA Button */}
              <Button asChild className="mt-4">
                <Link href="/contact">Book Intro Call</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
