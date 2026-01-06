"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
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
      className="fixed top-0 w-full z-[9000] border-b border-gray-200"
      style={{
        backgroundColor: 'white',
        height: '52px',
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 1px 0 rgba(0,0,0,0.08)',
      }}
    >
      <div className="container flex items-center justify-between h-full px-[var(--spacing-07)]">
        <Link 
          href="/" 
          className="flex items-center gap-2 h-full flex-shrink-0"
          style={{
            textDecoration: 'none',
            color: 'black',
          }}
        >
          <span 
            className="font-bold"
            style={{
              fontSize: '14px',
              lineHeight: '18px',
              fontWeight: 700,
              color: 'black',
              letterSpacing: '0.5px',
            }}
          >
            BASWARA
          </span>
          <span 
            style={{
              fontSize: '13px',
              lineHeight: '18px',
              fontWeight: 400,
              color: 'black',
            }}
          >
            CONSULTING
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav 
          className="hidden lg:flex items-center h-full"
          style={{
            gap: 'var(--spacing-01)',
          }}
        >
          {/* Capabilities Dropdown */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => handleMouseEnter("capabilities")}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className="flex items-center gap-1 px-3 py-2 text-sm font-500 text-black bg-transparent hover:bg-gray-100 transition-colors rounded"
              style={{
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Capabilities
              <ChevronDown className="h-3 w-3" />
            </button>
            
            {activeDropdown === "capabilities" && (
              <div 
                className="absolute left-0 top-full"
                style={{
                  marginTop: 0,
                  width: '520px',
                  zIndex: 'var(--z-index-dropdown)',
                }}
              >
                <div 
                  style={{
                    backgroundColor: 'var(--ui-01)',
                    border: '1px solid var(--gray-30)',
                    padding: 'var(--spacing-06)',
                  }}
                >
                  <div style={{ marginBottom: 'var(--spacing-04)' }}>
                    <Link 
                      href="/capabilities"
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: 'var(--interactive-01)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        textDecoration: 'none',
                      }}
                    >
                      View All Capabilities →
                    </Link>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-03)' }}>
                    {CAPABILITIES.map((capability) => (
                      <Link
                        key={capability.slug}
                        href={`/capabilities/${capability.slug}`}
                        className="block px-[var(--spacing-04)] py-[var(--spacing-04)] transition-all duration-150 border-l-2 border-transparent hover:border-[var(--red-90)] hover:bg-[var(--gray-20)]"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '4px', color: 'var(--text-01)' }}>
                          {capability.name}
                        </div>
                        <div style={{ fontSize: '12px', color: 'var(--text-02)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
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
            className="relative h-full flex items-center"
            onMouseEnter={() => handleMouseEnter("industries")}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className="flex items-center gap-1 px-3 py-2 text-sm font-500 text-black bg-transparent hover:bg-gray-100 transition-colors rounded"
              style={{
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Industries
              <ChevronDown className="h-3 w-3" />
            </button>
            
            {activeDropdown === "industries" && (
              <div 
                className="absolute left-0 top-full"
                style={{
                  marginTop: 0,
                  width: '720px',
                  zIndex: 'var(--z-index-dropdown)',
                }}
              >
                <div 
                  style={{
                    backgroundColor: 'var(--ui-01)',
                    border: '1px solid var(--gray-30)',
                    padding: 'var(--spacing-06)',
                  }}
                >
                  <div style={{ marginBottom: 'var(--spacing-04)' }}>
                    <Link 
                      href="/industries"
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: 'var(--interactive-01)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        textDecoration: 'none',
                      }}
                    >
                      View All Industries →
                    </Link>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-06)' }}>
                    {Object.entries(industryGroups).map(([cluster, industries]) => (
                      <div key={cluster}>
                        <div 
                          style={{
                            fontSize: '12px',
                            fontWeight: 600,
                            color: 'var(--text-01)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            marginBottom: 'var(--spacing-03)',
                            paddingBottom: 'var(--spacing-02)',
                            borderBottom: '1px solid var(--gray-30)',
                          }}
                        >
                          {cluster}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-02)' }}>
                          {industries.map((industry) => (
                            <Link
                              key={industry.slug}
                              href={`/industries/${industry.slug}`}
                              className="block px-[var(--spacing-02)] py-[var(--spacing-03)] transition-all duration-150 border-l-2 border-transparent hover:border-[var(--red-90)] hover:bg-[var(--gray-20)]"
                              style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                              <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '2px', color: 'var(--text-01)' }}>
                                {industry.name}
                              </div>
                              <div style={{ fontSize: '12px', color: 'var(--text-02)' }}>
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
          <Link
            href="/units"
            className="flex items-center px-[var(--spacing-04)] h-full text-[var(--text-01)] transition-colors hover:bg-[var(--gray-10)]"
            style={{ textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}
          >
            Specialized Units
          </Link>

          {/* Insights Link */}
          <Link
            href="/insights"
            className="flex items-center px-[var(--spacing-04)] h-full text-[var(--text-01)] transition-colors hover:bg-[var(--gray-10)]"
            style={{ textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}
          >
            Insights
          </Link>

          {/* About Link */}
          <Link
            href="/about"
            className="flex items-center px-[var(--spacing-04)] h-full text-[var(--text-01)] transition-colors hover:bg-[var(--gray-10)]"
            style={{ textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}
          >
            About
          </Link>

          {/* Career Link */}
          <Link
            href="/career"
            className="flex items-center px-[var(--spacing-04)] h-full text-[var(--text-01)] transition-colors hover:bg-[var(--gray-10)]"
            style={{ textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}
          >
            Career
          </Link>

          {/* CTA Button - IBM style primary action */}
          <Link
            href="/contact"
            className="flex items-center justify-center px-5 h-9 ml-6 text-sm font-600 text-white bg-black hover:bg-gray-900 transition-colors rounded"
            style={{ textDecoration: 'none', border: 'none' }}
          >
            Book Intro Call
          </Link>
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
                  className="flex items-center justify-between text-lg font-bold mb-3 hover:text-primary transition-colors"
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
                  className="flex items-center justify-between text-lg font-bold mb-3 hover:text-primary transition-colors"
                >
                  Industries
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="space-y-4 pl-4 border-l-2 border-slate-200">
                  {Object.entries(industryGroups).map(([cluster, industries]) => (
                    <div key={cluster}>
                      <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
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
              <Link
                href="/units"
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                Specialized Units
              </Link>
              <Link
                href="/insights"
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                Insights
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="/career"
                className="text-lg font-medium hover:text-primary transition-colors"
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
