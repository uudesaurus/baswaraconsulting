"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight, Target, Users, BarChart3, Globe2, Briefcase } from "lucide-react"
import { cn } from "@/lib/utils"

const caseStudies = [
  {
    id: "public-health",
    category: "Public Health & Development",
    description: "Transforming healthcare systems through innovative supply chain solutions",
    icon: Globe2,
    cases: [
      {
        id: "hiv-tb-reform",
        title: "National HIV/TB Supply Chain Reform",
        industry: "Public Health Supply Chain",
        context: "The national distribution system for HIV and TB commodities was plagued by supply disruptions, diagnostic delays, and a lack of coordination between national and provincial levels. These issues contributed to medicine stockouts and fragmented data systems.",
        solution: "Oversaw a comprehensive redesign of the national HIV/TB supply chain, enhancing planning cycles, establishing multi-month dispensing protocols, and improving logistics for diagnostics. Delivered capacity-building sessions and aligned donor and government performance frameworks.",
        impact: "Ensured uninterrupted ARV supply, reduced lead time by 30%, and enhanced coordination across multiple levels of the health system.",
        client: "International Development Organization",
        type: "Multi-lateral Institution"
      },
      {
        id: "arv-decentralization",
        title: "ARV Decentralization Program",
        industry: "Donor-Funded Health Program Implementation",
        context: "Centralized procurement created access disparities across provinces, delaying treatment and overburdening central stock. Subnational actors lacked autonomy and tools to manage localized inventory.",
        solution: "Designed a decentralized ARV logistics model with tailored SOPs, digital monitoring, and subnational training. Implemented governance models to transition accountability to local offices.",
        impact: "Stock availability stabilized in 90% of targeted areas; treatment access improved through localized control and predictive planning.",
        client: "Global Health Initiative",
        type: "Development Agency"
      },
      {
        id: "tb-specimen",
        title: "TB Specimen Transport Strategy",
        industry: "Public Health Laboratory Systems",
        context: "TB testing was hindered by disjointed specimen transportation and slow diagnostics, undermining program performance.",
        solution: "Conducted logistics mapping in multiple provinces, categorized typologies for transport design, and proposed policy updates tied to cost projections.",
        impact: "Integrated into the national TB strategy, leading to faster diagnostics and policy-backed logistics improvements.",
        client: "International Health Organization",
        type: "Global Health Partnership"
      }
    ]
  },
  {
    id: "industrial",
    category: "Industrial & Distribution",
    description: "Optimizing complex supply chains and distribution networks",
    icon: BarChart3,
    cases: [
      {
        id: "import-optimization",
        title: "Import & Warehouse Excellence Program",
        industry: "Industrial Supply Chain Optimization",
        context: "Manufacturing operations faced high import duties, inconsistent service levels, and subpar warehouse performance. Inventory losses and long lead times impacted production reliability.",
        solution: "Streamlined import workflows, implemented unified warehouse KPIs, and enforced supplier performance contracts. Introduced visual management tools for on-site monitoring.",
        impact: "Cut landed costs by 10%, raised stock accuracy above 99.85%, and increased order fill rates by over 20%.",
        client: "Leading Manufacturing Corporation",
        type: "Industrial Manufacturer"
      },
      {
        id: "logistics-reengineering",
        title: "Distribution Network Transformation",
        industry: "Heavy Equipment Distribution",
        context: "A nationwide distributor suffered from siloed procurement, excess dead stock, and poor S&OP integration. Customer service levels lagged due to order delays and limited visibility.",
        solution: "Built an integrated demand-supply framework, reclassified inventory tiers, redesigned warehouse flow, and set up a logistics dashboard.",
        impact: "Reduced obsolete inventory by 40%, improved inventory turnover, and restored customer satisfaction with faster cycle times.",
        client: "National Distribution Company",
        type: "Equipment Distributor"
      }
    ]
  },
  {
    id: "policy",
    category: "Policy & Environmental",
    description: "Developing frameworks for sustainable policy implementation",
    icon: Target,
    cases: [
      {
        id: "carbon-policy",
        title: "National Carbon Budget Framework",
        industry: "Climate & Environmental Policy",
        context: "Policymakers required structured metrics to assess national carbon emission targets and track compliance with global climate goals.",
        solution: "Built a quarterly tracking system for carbon emissions, set national allocation benchmarks, and designed accompanying communication tools.",
        impact: "Incorporated into national review cycles and used as a benchmark in stakeholder engagement and policy debates.",
        client: "Government Ministry",
        type: "Public Sector Institution"
      }
    ]
  }
]

export default function CaseStudiesSection() {
  const [activeCategory, setActiveCategory] = useState("public-health")
  const [activeCase, setActiveCase] = useState("hiv-tb-reform")
  const detailRef = useRef<HTMLDivElement>(null)

  const selectedCategory = caseStudies.find(cat => cat.id === activeCategory)
  const selectedCase = selectedCategory?.cases.find(c => c.id === activeCase)

  // Auto-scroll to details when case changes on mobile
  const handleCaseSelect = (caseId: string) => {
    setActiveCase(caseId)
    if (window.innerWidth < 1024) {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="py-24 bg-white border-y">
      <div className="container max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl  tracking-tight mb-4">Case Studies</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Delivering measurable impact across sectors through innovative solutions and strategic implementation.
            </p>
          </div>
          <div className="hidden lg:block">
            <Button variant="outline" className="rounded-full px-6">
              View Methodology <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-4 space-y-10">
            {/* Category Selection */}
            <div className="space-y-4">
              <h3 className="text-xs  text-slate-400 uppercase tracking-widest px-4">Industries</h3>
              <nav className="space-y-1">
                {caseStudies.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id)
                      setActiveCase(category.cases[0].id)
                    }}
                    className={cn(
                      "w-full flex items-center justify-between p-4 rounded-xl transition-all duration-200 group",
                      activeCategory === category.id 
                        ? "bg-primary text-white shadow-lg shadow-primary/20" 
                        : "hover:bg-slate-50 text-slate-600"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <category.icon className={cn(
                        "h-5 w-5",
                        activeCategory === category.id ? "text-white" : "text-slate-400 group-hover:text-primary"
                      )} />
                      <span className=" text-sm">{category.category}</span>
                    </div>
                    <span className={cn(
                      "text-[10px]  px-2 py-0.5 rounded-full border",
                      activeCategory === category.id 
                        ? "bg-white/20 border-white/30 text-white" 
                        : "bg-slate-100 border-slate-200 text-slate-500"
                    )}>
                      {category.cases.length}
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Case List for Category */}
            <div className="space-y-4">
              <h3 className="text-xs  text-slate-400 uppercase tracking-widest px-4">Projects</h3>
              <div className="space-y-2">
                {selectedCategory?.cases.map((case_) => (
                  <button
                    key={case_.id}
                    onClick={() => handleCaseSelect(case_.id)}
                    className={cn(
                      "w-full text-left p-4 rounded-xl border transition-all duration-200",
                      activeCase === case_.id 
                        ? "border-primary bg-primary/5 ring-1 ring-primary/20" 
                        : "border-transparent hover:border-slate-200 hover:bg-slate-50"
                    )}
                  >
                    <p className={cn(
                      "text-xs  mb-1 uppercase tracking-wider",
                      activeCase === case_.id ? "text-primary" : "text-slate-400"
                    )}>
                      {case_.industry}
                    </p>
                    <h4 className={cn(
                      "text-base  leading-snug",
                      activeCase === case_.id ? "text-slate-900" : "text-slate-600"
                    )}>
                      {case_.title}
                    </h4>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-8" ref={detailRef}>
            {selectedCase ? (
              <div className="bg-slate-50 rounded-2xl p-6 md:p-10 lg:p-12 border border-slate-200/60 shadow-sm min-h-[600px] flex flex-col">
                <div className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-[10px]  uppercase tracking-widest rounded-full">
                      {selectedCategory?.category}
                    </span>
                    <span className="px-3 py-1 bg-slate-200 text-slate-600 text-[10px]  uppercase tracking-widest rounded-full">
                      {selectedCase.type}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl  text-slate-900 leading-[1.1] mb-8">
                    {selectedCase.title}
                  </h3>
                  
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-12">
                    <h4 className="text-xs  text-slate-400 uppercase tracking-[0.2em] mb-4">Context & Challenge</h4>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed ">
                      {selectedCase.context}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Solution Column */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <h4 className="text-lg  text-slate-900">Our Strategic Solution</h4>
                      </div>
                      <div className="relative pl-6 border-l-2 border-primary/20">
                        <p className="text-slate-600 leading-relaxed">
                          {selectedCase.solution}
                        </p>
                      </div>
                    </div>

                    {/* Impact Column */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Target className="h-5 w-5 text-primary" />
                        </div>
                        <h4 className="text-lg  text-slate-900">Measurable Impact</h4>
                      </div>
                      <div className="relative pl-6 border-l-2 border-primary/20">
                        <p className="text-slate-600 leading-relaxed">
                          {selectedCase.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 animate-in fade-in duration-700">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
                      <Users className="h-6 w-6 text-slate-400" />
                    </div>
                    <div>
                      <p className="text-[10px]  text-slate-400 uppercase tracking-[0.2em]">Client Profile</p>
                      <p className="text-sm  text-slate-900">{selectedCase.client}</p>
                    </div>
                  </div>
                  <Button variant="link" className="text-primary  p-0 h-auto group">
                    Learn about this sector <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center h-[600px] text-slate-400 ">
                Select a case study to view full report
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
