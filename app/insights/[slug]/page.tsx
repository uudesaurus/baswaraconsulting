"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

const insights = [
  {
    id: 1,
    title: "Building an Agile Supply Chain for Public Health Commodities in Indonesia",
    date: "March 2024",
    category: "Healthcare & Supply Chain",
    author: "Baswara Consulting Team",
    content: {
      introduction: [
        "Managing essential public health commodities such as AIDS, TB and Malaria (ATM) commodities involves navigating a complex ecosystem of logistical, institutional, and governance-related barriers. Persistent inefficiencies—ranging from stock imbalances to delayed deliveries—continue to disrupt access to life-saving medicines, diagnostics, and supplies across the country.",
        "At the heart of these disruptions are inconsistencies in stock availability, where service delivery points frequently encounter either critical shortages or excess inventory. These problems are compounded by data fragmentation, rigid procurement cycles, and inflexible distribution systems that lack the responsiveness required to support dynamic program needs.",
        "To address these issues, Indonesia must transition from a static, compliance-oriented system to a more agile, integrated, and data-driven supply chain capable of adapting to real-time changes, policy shifts, and local demand."
      ],
      challenges: {
        title: "Key Challenges in the Current System",
        items: [
          {
            title: "1. Fragmented Forecasting and Planning Mechanisms",
            content: "Forecasting for ATM commodities is often disconnected from real-time consumption patterns at the facility level. Many provincial and district health offices rely on outdated or incomplete data due to delays in reporting and inconsistencies between stock and patient data. This fragmentation leads to inaccurate quantifications—either overestimating or underestimating needs—which in turn causes stockouts or excess inventory."
          },
          {
            title: "2. Rigid Procurement and Budgeting Systems",
            content: [
              "Government procurement processes are constrained by annual budgeting cycles, lengthy approval chains, and limited adaptability once the procurement plan is locked in. This rigidity makes it difficult to respond to unexpected shifts in demand, emergency outbreaks, or changes in treatment guidelines—especially when donor funding is blended with domestic budgets. As a result, even when commodities are available globally, local delivery is delayed.",
              "In Indonesia, the procurement of health commodities through government budgeting mechanisms is bound by a highly structured and time-sensitive cycle. While this ensures compliance, accountability, and transparency, it also introduces significant challenges in terms of timeliness and adaptability.",
              "The process typically begins with annual budget planning—often finalized many months before actual implementation. Health offices and programs must forecast commodity needs far in advance, with limited room to adjust once allocations are set. This misalignment between forecasted demand and actual consumption trends often leads to mismatches in supply levels.",
              "Once funding is disbursed, procurement follows a multi-tiered approval process, involving national, provincial, and often district-level verifications. Each step—from tender preparation and vendor selection to contract signing and payment scheduling—requires time and coordination, with limited flexibility to fast-track or reallocate funds in real time.",
              "Even after contracts are awarded, delays can arise during distribution and delivery, particularly when linked to centralized procurement systems. Suppliers must adhere to delivery windows that may not align with actual regional stock levels, leading to either stockpiling or stock-outs at the facility level.",
              "Additionally, the use of single-year budget cycles discourages long-term procurement planning or buffer stock maintenance, as unspent funds cannot always be carried over. Emergency procurement is possible but often bureaucratically complex, creating a system where timeliness is sacrificed for procedural compliance.",
              "Furthermore, the procurement process under government budgeting mechanisms tends to be rigid and time-consuming. The lack of flexibility in adjusting purchase orders, timelines, or supplier arrangements—especially under national programs—prevents rapid response to emerging needs or disruptions.",
              "These limitations underscore the need for procurement reform, digital forecasting integration, and hybrid procurement models that combine public oversight with private sector efficiency"
            ]
          },
          {
            title: "3. Siloed Information Systems",
            content: [
              "Key logistics and programmatic data for HIV, TB, and Malaria are often stored in separate digital platforms (e.g., SIHA, SITB, SISMAL), which do not always integrate seamlessly with national supply chain or warehouse management systems. The lack of interoperability makes it difficult for central planners to monitor commodity flows, consumption, and wastage in real time.",
              "Compounding the problem is the issue of data reliability and accuracy. Many health facilities still operate with manual reporting or partially digitized systems that do not sync in real-time. As a result, decision-makers lack visibility into actual stock levels, consumption trends, and lead times—making responsive planning and reallocation extremely difficult."
            ]
          },
          {
            title: "4. Inefficient Distribution and Warehousing",
            content: [
              "Delivery budgets are often limited, while timelines for distribution are tight and inflexible. With minimal room for adjustment, even minor logistics delays can cascade into service interruptions, particularly in remote or underserved areas.",
              "Delays in last-mile delivery are common due to limited third-party logistics engagement, poor route planning, and under-resourced provincial warehouses. In remote or high-burden areas, deliveries may be infrequent and irregular, with little visibility into delivery timelines or stock balances at the destination points. Moreover, many facilities lack sufficient space or infrastructure for safe storage, particularly for cold chain commodities like certain malaria RDTs or HIV test kits."
            ]
          },
          {
            title: "5. Limited Human Resource Capacity and Accountability",
            content: "Many district- and facility-level staff involved in logistics are overburdened or insufficiently trained in supply chain management principles. Errors in inventory recording, poor use of tools (e.g., stock cards, LMIS), and inconsistent supervisory support contribute to unreliable data and mismanagement of stock. Additionally, accountability frameworks for stock losses or expirations are weak, particularly in decentralized settings."
          },
          {
            title: "6. Delayed Implementation of Program Transitions",
            content: "Policy shifts—such as transitioning to new regimens, updating diagnostic algorithms, or changing test kit types—are not always matched by procurement and distribution readiness. Lag between policy change and commodity availability leads to parallel systems and field-level confusion, increasing the risk of wastage and expired stock."
          }
        ],
        conclusion: "Together, these key challenges result in a supply chain that struggles to be responsive, integrated, and data-driven, especially across diverse geographies and program silos."
      },
      agileCase: {
        title: "The Case for Agile Public Health Supply Chains",
        introduction: "To overcome these systemic issues, Indonesia must adopt Agile Supply Chain Management (ASCM)—an approach that emphasizes flexibility, integration, and resilience.",
        description: "An agile supply chain in the public health context refers to a system that can quickly adapt and respond to changing needs, disruptions, and emergencies. It's about building a resilient supply chain that can effectively deliver essential health products and services, even in unpredictable circumstances.",
        principles: [
          "A. Flexibility and Responsiveness: The ability to quickly adjust plans and resources to meet changing demands, such as during outbreaks or natural disasters.",
          "B. Collaboration and Information Sharing: Effective communication and coordination between different stakeholders, including manufacturers, distributors, healthcare providers, and government agencies.",
          "C. Predictive Analytics and Monitoring: Utilizing data and technology to forecast demand, identify potential disruptions, and optimize resource allocation.",
          "D. Risk Management: Proactively identifying and mitigating potential risks, such as supply chain disruptions, shortages, and quality issues.",
          "E. Inventory Management: Optimizing inventory levels to ensure sufficient supplies are available without excessive storage or waste.",
          "F. Technology and Automation: Leveraging technology to streamline processes, improve visibility, and enhance efficiency.",
          "G. Resilience: The ability to bounce back from disruptions and maintain essential operations."
        ]
      },
      benefits: {
        title: "Benefits of an Agile Public Health Supply Chain",
        items: [
          "First and foremost, it enables improved health outcomes by ensuring that essential medicines, vaccines, and diagnostics reach patients on time—particularly during outbreaks or emergency situations, when delays can be critical.",
          "In turn, this responsiveness leads to cost reductions, as more accurate forecasting and streamlined distribution help optimize resource allocation and minimize the financial losses caused by overstocking, wastage, or emergency procurement.",
          "Moreover, a more precise and demand-driven supply chain contributes to enhanced sustainability, reducing the environmental impact through better logistics planning and leaner inventory management.",
          "Finally, these benefits collectively drive greater operational efficiency, shortening lead times, eliminating bottlenecks, and creating a system that is both faster and more resilient in meeting public health needs."
        ]
      }
    },
    slug: "agile-supply-chain-indonesia",
    image: "/images/insights/supply-chain.jpg",
    readTime: "15 min read"
  }
]

export default function InsightPage({ params }: { params: { slug: string } }) {
  const insight = insights.find((i) => i.slug === params.slug)

  if (!insight) {
    notFound()
  }

  return (
    <div className="py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/insights">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Insights
            </Link>
          </Button>

          {/* Article Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-secondary text-sm rounded-full">
                {insight.category}
              </span>
              <span className="text-sm text-muted-foreground">{insight.date}</span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{insight.readTime}</span>
            </div>
            <h1 className="text-4xl font-bold mb-6">{insight.title}</h1>
            <p className="text-muted-foreground">By {insight.author}</p>
          </div>

          {/* Article Content */}
          <div className="prose prose-gray dark:prose-invert max-w-none">
            {/* Introduction */}
            {insight.content.introduction.map((para, idx) => (
              <p key={idx} className="text-lg leading-relaxed mb-6">{para}</p>
            ))}

            {/* Challenges */}
            <h2 className="text-3xl font-semibold mt-12 mb-6">{insight.content.challenges.title}</h2>
            <div className="space-y-8">
              {insight.content.challenges.items.map((challenge, idx) => (
                <div key={idx}>
                  <h3 className="text-xl font-medium mb-4">{challenge.title}</h3>
                  {Array.isArray(challenge.content) ? (
                    challenge.content.map((para, pIdx) => (
                      <p key={pIdx} className="mb-4">{para}</p>
                    ))
                  ) : (
                    <p>{challenge.content}</p>
                  )}
                </div>
              ))}
              <p className="font-medium">{insight.content.challenges.conclusion}</p>
            </div>

            {/* Agile Case */}
            <h2 className="text-3xl font-semibold mt-12 mb-6">{insight.content.agileCase.title}</h2>
            <p className="text-lg mb-4">{insight.content.agileCase.introduction}</p>
            <p className="mb-6">{insight.content.agileCase.description}</p>
            <ul className="space-y-3">
              {insight.content.agileCase.principles.map((principle, idx) => (
                <li key={idx} className="flex gap-2">
                  <span>{principle}</span>
                </li>
              ))}
            </ul>

            {/* Benefits */}
            <h2 className="text-3xl font-semibold mt-12 mb-6">{insight.content.benefits.title}</h2>
            <div className="space-y-4">
              {insight.content.benefits.items.map((benefit, idx) => (
                <p key={idx}>{benefit}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 