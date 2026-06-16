import Link from "next/link"
import { cn } from "@/lib/utils"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#1A1C1E] via-[#0F1113] to-[#050505] text-white py-20 overflow-hidden">
      {/* Subtle Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04]" 
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand and Description */}
          <div className="md:col-span-4 space-y-8">
            <Link href="/" className="inline-block group">
              <span className="text-3xl tracking-tight">
                Baswara<span className="text-[#C41230]">.</span>
              </span>
            </Link>
            
            <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
              Bridging high-level strategy and operational reality across Indonesia's most critical industries.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-3">
            <h4 className="text-white text-lg mb-6">Capabilities</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/capabilities/strategy" className="text-slate-400 hover:text-white transition-colors">
                  Strategy & Transformation
                </Link>
              </li>
              <li>
                <Link href="/capabilities/operations" className="text-slate-400 hover:text-white transition-colors">
                  Operations & Supply Chain
                </Link>
              </li>
              <li>
                <Link href="/capabilities/digital" className="text-slate-400 hover:text-white transition-colors">
                  Digital & Technology
                </Link>
              </li>
              <li>
                <Link href="/capabilities/finance" className="text-slate-400 hover:text-white transition-colors">
                  Corporate Finance
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white text-lg mb-6">Industries</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/industries/mining" className="text-slate-400 hover:text-white transition-colors">
                  Mining & Metals
                </Link>
              </li>
              <li>
                <Link href="/industries/agro" className="text-slate-400 hover:text-white transition-colors">
                  Agribusiness
                </Link>
              </li>
              <li>
                <Link href="/industries/finance" className="text-slate-400 hover:text-white transition-colors">
                  Financial Services
                </Link>
              </li>
              <li>
                <Link href="/industries/ict" className="text-slate-400 hover:text-white transition-colors">
                  ICT & Digital
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-slate-400 hover:text-white transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-slate-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="w-full md:w-auto">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Baswara Partner. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-2 text-slate-500 text-sm">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
