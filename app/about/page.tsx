import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Globe2, ShieldCheck, Target } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About Baswara Consulting",
  description: "Bridging Practice and Strategy Across Sectors to Deliver Measurable Transformation",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-accent text-white pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container relative">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm text-white text-sm  rounded-full mb-6">
              Who We Are
            </div>
            <h1 className="text-4xl md:text-6xl  mb-6">
              Bridging Strategy <br/>and <span className="text-slate-300">Execution.</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed max-w-2xl">
              Baswara Consulting combines hands-on operational excellence with high-level strategic advisory to deliver measurable transformation for Indonesia's most critical systems.
            </p>
          </div>
        </div>
      </section>

      {/* Founder's Section */}
      <section className="py-24 border-b">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="relative h-[650px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/arief.png"
                  alt="Arief Sudrajat, Founder of Baswara Consulting"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-sm  uppercase tracking-widest mb-1 opacity-80">Founder & Principal</p>
                  <h3 className="text-3xl ">Arief Sudrajat</h3>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 pt-4">
              <div className="text-xs  text-primary uppercase tracking-[0.2em] mb-4">Founder's Story</div>
              <h2 className="text-3xl md:text-5xl  mb-8">The Baswara Genesis</h2>
              
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed  mb-10">
                <p>
                  Arief Sudrajat's journey spans almost three decades across both private and public sectors, giving him a
                  unique perspective on how to bridge operational excellence with strategic vision.
                </p>
                <p>
                  From executional roles in the private sector at Panasonic, Sumitomo, and Atlas Copco to senior
                  consulting projects in the public sector with the World Bank, Chemonics, UNDP, and CHAI, Arief combines
                  ground-level implementation expertise with national policy design experience.
                </p>
                <p>
                  This multisectoral background has shaped Baswara Consulting's philosophy: delivering advisory services
                  that are rooted in execution, strategies built on evidence, and solutions co-created with clients to ensure sustainability.
                </p>
              </div>

              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <blockquote className="text-xl italic text-slate-900 font-serif leading-relaxed">
                  "The most effective solutions come from understanding both the high-level policy landscape and the ground-level implementation challenges. We don't just advise; we architect the bridge between them."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-slate-50 border-b">
        <div className="container">
          <div className="max-w-4xl mb-16">
            <div className="text-xs  text-primary uppercase tracking-[0.2em] mb-4">Core Principles</div>
            <h2 className="text-3xl md:text-5xl  mb-6">Our Philosophy</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We operate at the intersection of systems thinking, adaptive design, and contextual intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl  mb-4">Vision</h3>
              <p className="text-slate-600 leading-relaxed ">
                To shape adaptive, measurable transformation across industries and global systems.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl  mb-4">Mission</h3>
              <p className="text-slate-600 leading-relaxed ">
                Deliver advisory rooted in execution, strategy built on evidence, and solutions co-created with our partners.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Globe2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl  mb-4">Our Values</h3>
              <div className="flex flex-wrap gap-2">
                {["Data-Driven", "Collaborative", "Impact-Oriented", "Practical", "Sustainable"].map((val) => (
                  <span key={val} className="px-3 py-1 bg-slate-100 text-slate-700 text-[10px]  uppercase tracking-wider rounded-full border">
                    {val}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Matrix */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mb-16">
            <div className="text-xs  text-primary uppercase tracking-[0.2em] mb-4">Global Heritage</div>
            <h2 className="text-3xl md:text-5xl  mb-6">Multisectoral Expertise</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our depth of experience allows us to navigate both the rigorous demands of global institutions and the operational complexities of private industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-10 rounded-2xl border-2 border-slate-200 bg-white hover:border-primary/30 transition-all group">
              <h3 className="text-2xl  mb-8 pb-4 border-b flex items-center justify-between">
                Public Sector
                <CheckCircle2 className="h-6 w-6 text-primary opacity-20 group-hover:opacity-100 transition-opacity" />
              </h3>
              <ul className="space-y-6">
                {[
                  "National health system strengthening and reform",
                  "Diagnostic network optimization for HIV, TB, and Malaria",
                  "Policy development and institutional implementation",
                  "Multi-sectoral advocacy and government relations"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-slate-600 ">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-10 rounded-2xl border-2 border-slate-200 bg-white hover:border-primary/30 transition-all group">
              <h3 className="text-2xl  mb-8 pb-4 border-b flex items-center justify-between">
                Private Sector
                <CheckCircle2 className="h-6 w-6 text-primary opacity-20 group-hover:opacity-100 transition-opacity" />
              </h3>
              <ul className="space-y-6">
                {[
                  "Supply chain optimization and logistics management",
                  "Manufacturing excellence and Industry 4.0 transformation",
                  "Corporate performance monitoring and KPI cascading",
                  "Digital enablement and systems integration"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-slate-600 ">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Global Institutions Logobar or similar could go here */}
    </main>
  )
}
