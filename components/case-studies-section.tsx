"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const caseStudies = [
  {
    id: "public-health",
    category: "Public Health & Development",
    description: "Transforming healthcare systems through innovative supply chain solutions",
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
  const [isTransitioning, setIsTransitioning] = useState(false)

  const selectedCategory = caseStudies.find(cat => cat.id === activeCategory)

  const handleCategoryChange = (categoryId: string) => {
    setIsTransitioning(true)
    setActiveCategory(categoryId)
    setActiveCase(caseStudies.find(cat => cat.id === categoryId)?.cases[0].id || "")
    setTimeout(() => setIsTransitioning(false), 500)
  }

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Case Studies</h2>
          <p className="text-xl text-muted-foreground">
            Delivering measurable impact across sectors through innovative solutions and strategic implementation
          </p>
        </div>

        <div className="relative space-y-12">
          {/* Industry Categories */}
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((category) => (
              <div key={category.id} className="relative group/card">
                <button
                  onClick={() => handleCategoryChange(category.id)}
                  className={cn(
                    "w-full relative p-8 rounded-xl border bg-background text-left transition-all duration-300",
                    activeCategory === category.id 
                      ? "border-primary shadow-lg ring-2 ring-primary/10" 
                      : "border-border/50 hover:border-primary/50 hover:shadow-md"
                  )}
                >
                  {/* Category Indicator Line */}
                  <div className={cn(
                    "absolute left-1/2 -bottom-[28px] w-px bg-gradient-to-b from-primary/50 to-transparent h-[28px] transition-all duration-500",
                    activeCategory === category.id ? "opacity-100" : "opacity-0"
                  )} />
                  
                  {/* Category Content */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        activeCategory === category.id 
                          ? "bg-primary scale-100" 
                          : "bg-muted-foreground/30 scale-75 group-hover/card:bg-primary/50"
                      )} />
                      <h3 className={cn(
                        "text-2xl font-semibold transition-colors",
                        activeCategory === category.id 
                          ? "text-primary" 
                          : "group-hover/card:text-primary"
                      )}>
                        {category.category}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-6 pl-5">
                      {category.description}
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground pl-5">
                      <span className="font-medium">{category.cases.length} case studies</span>
                      <ChevronRight className={cn(
                        "ml-1 h-4 w-4 transition-transform duration-300",
                        activeCategory === category.id ? "rotate-90" : "group-hover/card:translate-x-1"
                      )} />
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* Cases for Selected Industry */}
          <div className={cn(
            "relative transition-all duration-500 transform",
            !isTransitioning && activeCategory ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            {selectedCategory && (
              <>
                {/* Section Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <h4 className="text-xl font-semibold text-primary">
                      {selectedCategory.category}
                    </h4>
                  </div>
                  <p className="text-muted-foreground pl-5">
                    Select a case study to explore the details
                  </p>
                </div>

                {/* Case Cards */}
                <div className="grid lg:grid-cols-3 gap-6">
                  {selectedCategory.cases.map((case_, index) => (
                    <div
                      key={case_.id}
                      className="group/case"
                      style={{
                        animation: `fadeSlideIn 500ms ${index * 100}ms forwards`,
                        opacity: 0,
                        transform: 'translateY(20px)'
                      }}
                    >
                      <button
                        onClick={() => setActiveCase(case_.id)}
                        className={cn(
                          "w-full relative p-6 rounded-xl border bg-background/80 backdrop-blur-sm text-left transition-all duration-300",
                          activeCase === case_.id 
                            ? "border-primary shadow-md ring-1 ring-primary/10" 
                            : "border-border/50 hover:border-primary/50 hover:shadow-md"
                        )}
                      >
                        <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
                        
                        <div className="relative">
                          <div className="flex items-center gap-2 mb-4">
                            <div className={cn(
                              "w-1.5 h-1.5 rounded-full transition-all duration-300",
                              activeCase === case_.id 
                                ? "bg-primary" 
                                : "bg-primary/40 group-hover/case:bg-primary/60"
                            )} />
                            <span className="text-sm font-medium text-primary/80">
                              {case_.industry}
                            </span>
                          </div>
                          
                          <h4 className={cn(
                            "text-xl font-medium mb-3 transition-colors pl-3.5",
                            activeCase === case_.id 
                              ? "text-primary" 
                              : "group-hover/case:text-primary"
                          )}>
                            {case_.title}
                          </h4>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-4 pl-3.5">
                            {case_.context}
                          </p>
                          <div className="flex items-center justify-between border-t pt-4 pl-3.5">
                            <span className="text-sm text-muted-foreground">
                              {case_.type}
                            </span>
                            <ChevronRight className={cn(
                              "h-4 w-4 text-muted-foreground transition-transform duration-300",
                              activeCase === case_.id ? "rotate-90" : "group-hover/case:translate-x-1"
                            )} />
                          </div>
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Case Details */}
          <div className={cn(
            "bg-background rounded-xl p-8 border shadow-sm transition-all duration-500",
            activeCase ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            {selectedCategory?.cases.map((case_) => (
              <div
                key={case_.id}
                className={cn(
                  "transition-all duration-500",
                  activeCase === case_.id ? "opacity-100" : "opacity-0 hidden"
                )}
              >
                <div className="mb-12 border-b pb-8">
                  {/* Breadcrumb */}
                  <div className="flex flex-wrap items-center gap-3 text-sm mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="font-medium text-primary">{selectedCategory.category}</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      <span className="text-muted-foreground">{case_.industry}</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                      <span className="text-muted-foreground">{case_.type}</span>
                    </div>
                  </div>

                  <h3 className="text-3xl font-semibold mb-6">{case_.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {case_.context}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold flex items-center">
                      <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 text-sm">1</span>
                      Our Solution
                    </h4>
                    <div className="p-6 rounded-lg bg-muted/50">
                      <p className="text-muted-foreground leading-relaxed">
                        {case_.solution}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold flex items-center">
                      <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 text-sm">2</span>
                      Impact Delivered
                    </h4>
                    <div className="p-6 rounded-lg bg-muted/50">
                      <p className="text-muted-foreground leading-relaxed">
                        {case_.impact}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold flex items-center">
                      <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 text-sm">3</span>
                      Client Profile
                    </h4>
                    <div className="p-6 rounded-lg bg-muted/50">
                      <p className="font-medium mb-2">{case_.client}</p>
                      <p className="text-sm text-muted-foreground">{case_.type}</p>
                      <div className="mt-4 pt-4 border-t">
                        <p className="text-sm font-medium text-primary/80">Industry</p>
                        <p className="text-sm text-muted-foreground">{case_.industry}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
