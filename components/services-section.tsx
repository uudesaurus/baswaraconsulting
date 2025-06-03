"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Activity, Truck, BarChart3, Laptop, ArrowRight, Building2, FileText, Users2, Globe2 } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "strategic-advisory",
    title: "Strategic Advisory & Business Design",
    description: "Comprehensive strategic consulting solutions for business transformation and growth.",
    categories: [
      {
        id: "corporate-strategy",
        icon: <Building2 className="h-10 w-10" />,
        title: "1. Corporate Strategy & Transformation",
        description: "We help organizations define their long-term strategic direction, translate it into actionable initiatives, and position themselves for sustainable growth in an evolving business landscape.",
        items: [
          {
            name: "Business Strategy Formulation",
            description: "Developing long-term strategic directions for organizations to drive value creation and resilience."
          },
          {
            name: "Transformation Roadmap Development",
            description: "Designing integrated and measurable operational and digital transformation roadmaps."
          },
          {
            name: "Strategic Positioning & Growth Acceleration",
            description: "Defining competitive positioning and identifying new market opportunities for sustainable expansion."
          }
        ]
      },
      {
        id: "model-innovation",
        icon: <FileText className="h-10 w-10" />,
        title: "2. Model Innovation & Institutional Planning",
        description: "We support companies in redesigning business models to align with market shifts, technological advancements, and regulatory frameworks, while also structuring long-term corporate plans in compliance with government standards.",
        items: [
          {
            name: "Business Model Reinvention",
            description: "Restructuring operating models to navigate disruption and unlock new value streams."
          },
          {
            name: "Corporate Long-Term Planning (RJPP)",
            description: "Developing comprehensive RJPPs that fulfill regulatory standards, integrating financial, strategic, and risk components for SOEs and subsidiaries."
          }
        ]
      },
      {
        id: "feasibility-studies",
        icon: <BarChart3 className="h-10 w-10" />,
        title: "3. Feasibility & Investment Studies",
        description: "We conduct in-depth feasibility studies that assess market potential, financial viability, and operational requirements. Our studies provide clear, data-driven insights that enable confident decision-making, reducing risk while maximizing growth opportunities.",
        items: [
          {
            name: "Market Entry & Opportunity Assessment",
            description: "Assessing the viability of new markets and recommending strategic positioning."
          },
          {
            name: "Financial Modeling & Investment Case",
            description: "Developing cash flow projections, sensitivity analyses, and investment scenarios."
          },
          {
            name: "Operational & Organizational Feasibility",
            description: "Evaluating operational readiness and institutional structure for new initiatives."
          }
        ]
      }
    ]
  },
  {
    id: "supply-chain",
    title: "Supply Chain, Operations & Resilience",
    description: "End-to-end supply chain solutions and operational excellence services.",
    categories: [
      {
        id: "supply-chain-strategy",
        icon: <Truck className="h-10 w-10" />,
        title: "4. Supply Chain Strategy & Execution",
        description: "We design and implement comprehensive supply chain solutions—from diagnostics to end-to-end redesign—focused on improving visibility, responsiveness, and efficiency across procurement, distribution, and inventory systems.",
        items: [
          {
            name: "Supply Chain Diagnostic & Maturity Assessment",
            description: "Assessing current supply chain performance and identifying capability gaps."
          },
          {
            name: "End-to-End Supply Chain Design",
            description: "Redesigning the entire supply chain structure from procurement to reverse logistics."
          },
          {
            name: "Demand Forecasting & Supply Planning",
            description: "Implementing data-driven forecasting methods to improve procurement and distribution accuracy."
          }
        ]
      },
      {
        id: "risk-management",
        icon: <Activity className="h-10 w-10" />,
        title: "5. Risk Management & Business Continuity",
        description: "We identify and assess potential supply chain disruptions, develop proactive mitigation strategies, and build continuity plans that safeguard operational resilience in dynamic and high-risk environments.",
        items: [
          {
            name: "Supply Risk Mapping & Response Strategy",
            description: "Mapping supply risks and developing mitigation strategies."
          },
          {
            name: "BCP & Emergency Logistics Simulation",
            description: "Developing business continuity and crisis logistics plans."
          },
          {
            name: "Vendor Management Strategy",
            description: "Designing responsive vendor performance management systems."
          }
        ]
      },
      {
        id: "process-reengineering",
        icon: <Users2 className="h-10 w-10" />,
        title: "6. SOP & Process Reengineering",
        description: "We optimize business processes by mapping value chains, redesigning workflows with Lean principles, and institutionalizing SOPs with strong role clarity, systems integration, and performance monitoring tools.",
        items: [
          {
            name: "Business Process Mapping & Optimization",
            description: "Identifying core business processes and optimizing them using Lean principles and BPMN."
          },
          {
            name: "SOP Development & Deployment",
            description: "Developing role-based, system-integrated SOPs with time efficiency considerations."
          },
          {
            name: "Performance Monitoring Framework",
            description: "Designing process KPI measurement systems with visual dashboards."
          }
        ]
      }
    ]
  },
  {
    id: "policy-implementation",
    title: "Policy Implementation & Local Partnership",
    description: "Expert guidance for government and donor-funded programs implementation.",
    categories: [
      {
        id: "program-support",
        icon: <Globe2 className="h-10 w-10" />,
        title: "7. Government & Donor-Funded Program Support",
        description: "We collaborate with international organizations to localize program designs, manage field-level implementation, and generate high-impact results through tailored, context-sensitive interventions in Indonesia.",
        items: [
          {
            name: "Program Design for Donor-Driven Initiatives",
            description: "Assisting NGOs/IOs in designing interventions and proposals based on local needs."
          },
          {
            name: "Local Implementation Partnership",
            description: "Acting as the local execution partner for globally funded programs in Indonesia."
          },
          {
            name: "Monitoring, Evaluation & Learning (MEL)",
            description: "Designing logical frameworks, performance indicators, and impact reports."
          }
        ]
      },
      {
        id: "regulatory-advisory",
        icon: <FileText className="h-10 w-10" />,
        title: "8. Regulatory & Institutional Advisory",
        description: "We provide strategic advisory on policy reforms, institutional effectiveness, and multi-stakeholder coordination, enabling clients to implement change within complex political and administrative systems.",
        items: [
          {
            name: "Policy Review & Institutional Analysis",
            description: "Reviewing policies and institutional frameworks in relation to implementation effectiveness."
          },
          {
            name: "Stakeholder Mapping & Engagement Strategy",
            description: "Conducting actor analysis and developing multi-sectoral advocacy strategies."
          }
        ]
      }
    ]
  },
  {
    id: "digital-enablement",
    title: "Digital Enablement & Data Strategy",
    description: "Digital transformation and data-driven decision making solutions.",
    categories: [
      {
        id: "digital-strategy",
        icon: <Laptop className="h-10 w-10" />,
        title: "9. Digital Strategy for Operations",
        description: "We guide organizations in crafting and executing digital transformation strategies that enhance operational performance, integrating suitable technologies and managing the human side of digital change.",
        items: [
          {
            name: "Digital Transformation Blueprint",
            description: "Crafting digital strategies to enhance operational and service efficiency."
          },
          {
            name: "Technology Vendor Selection & Integration",
            description: "Evaluating and integrating digital solutions (ERP, WMS, data platforms)."
          },
          {
            name: "Change Management for Digital Adoption",
            description: "Managing behavioral and organizational change following digital transformation."
          }
        ]
      },
      {
        id: "data-driven",
        icon: <BarChart3 className="h-10 w-10" />,
        title: "10. Data-Driven Decision Making",
        description: "We empower clients to leverage data as a strategic asset by building robust dashboards, improving data governance, and exploring advanced analytics for predictive insights and better decision-making.",
        items: [
          {
            name: "Dashboarding & Analytics",
            description: "Building executive and operational dashboards for real-time, data-driven decision-making."
          },
          {
            name: "Data Governance & Quality Strategy",
            description: "Establishing frameworks to ensure consistent and reliable data management."
          },
          {
            name: "Advanced Analytics Feasibility",
            description: "Identifying the potential application of machine learning for forecasting in logistics, demand, or risk."
          }
        ]
      }
    ]
  }
]

export default function ServicesSection() {
  const [activeService, setActiveService] = useState("strategic-advisory")

  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive consulting solutions tailored to transform organizations and drive sustainable impact.
          </p>
        </div>

        {/* Service Categories Navigation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={cn(
                "relative p-6 rounded-lg border transition-all duration-300",
                activeService === service.id ? "border-accent bg-accent/5" : "border-border hover:border-accent/50",
              )}
            >
              <h3 className="text-lg font-medium mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
              <div
                className={cn(
                  "absolute bottom-0 left-0 w-full h-1 scale-x-0 transition-transform duration-300 origin-left",
                  activeService === service.id && "scale-x-100 bg-accent",
                )}
              />
            </button>
          ))}
        </div>

        {/* Service Details */}
        <div className="bg-background/50 backdrop-blur-sm rounded-lg p-8 border border-border">
          {services.map((service) => (
            <div
              key={service.id}
              className={cn(
                "grid gap-8 transition-opacity duration-300",
                activeService === service.id ? "block" : "hidden",
              )}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.categories.map((category) => (
                  <div key={category.id} className="space-y-4">
                    <div className="text-accent">{category.icon}</div>
                    <h3 className="text-xl font-medium">{category.title}</h3>
                    <p className="text-muted-foreground text-sm">{category.description}</p>
                    <ul className="space-y-4">
                      {category.items.map((item, index) => (
                        <li key={index} className="space-y-2">
                          <Link
                            href={`/contact?category=${encodeURIComponent(category.title)}&service=${encodeURIComponent(item.name)}&message=${encodeURIComponent(item.description)}`}
                            className="flex items-start gap-2 group"
                          >
                            <div className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                            <div>
                              <span className="font-medium text-foreground group-hover:text-accent transition-colors">
                                {item.name}
                              </span>
                              <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button asChild>
                  <Link href={`/contact?category=${encodeURIComponent(service.title)}`}>
                    Learn More About {service.title} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
