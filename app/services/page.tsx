import { Activity, Truck, Building2, LineChart } from "lucide-react"
import ServicesSection from "@/components/services-section"

const services = [
  {
    id: "health",
    icon: <Activity className="h-12 w-12" />,
    title: "Health & Diagnostics Strategy",
    description: "Comprehensive strategies for national diagnostic systems and referral networks.",
    items: [
      {
        title: "National Diagnostics Roadmaps",
        description: "Developing comprehensive plans for scaling diagnostic capacity across regions, considering infrastructure, human resources, and technology requirements."
      },
      {
        title: "Referral Network Optimization",
        description: "Designing efficient specimen referral systems for ARV, VL/EID, TB and other disease programs to ensure timely testing and results delivery."
      },
      {
        title: "WHO/Global Fund Strategy Alignment",
        description: "Ensuring national diagnostic strategies align with global standards and funding requirements to maximize resource utilization and impact."
      }
    ]
  },
  {
    id: "supply",
    icon: <Truck className="h-12 w-12" />,
    title: "Supply Chain Excellence",
    description: "End-to-end supply chain optimization and logistics management solutions.",
    items: [
      {
        title: "Supply Chain Optimization",
        description: "Streamlining operations and improving efficiency across the entire supply chain network."
      },
      {
        title: "Logistics Management",
        description: "Implementing robust logistics systems for improved delivery and distribution."
      },
      {
        title: "Inventory Control",
        description: "Developing sophisticated inventory management systems to reduce costs and improve service levels."
      }
    ]
  },
  {
    id: "operations",
    icon: <Building2 className="h-12 w-12" />,
    title: "Operational Excellence",
    description: "Transform operations through strategic planning and implementation.",
    items: [
      {
        title: "Process Optimization",
        description: "Streamlining business processes to improve efficiency and reduce costs."
      },
      {
        title: "Quality Management",
        description: "Implementing comprehensive quality management systems and continuous improvement programs."
      },
      {
        title: "Change Management",
        description: "Guiding organizations through transformational change with minimal disruption."
      }
    ]
  },
  {
    id: "analytics",
    icon: <LineChart className="h-12 w-12" />,
    title: "Analytics & Digital",
    description: "Data-driven insights and digital transformation solutions.",
    items: [
      {
        title: "Data Analytics",
        description: "Advanced analytics solutions to drive better decision-making and business outcomes."
      },
      {
        title: "Digital Transformation",
        description: "Strategic guidance for organizations transitioning to digital-first operations."
      },
      {
        title: "Performance Metrics",
        description: "Developing and implementing KPI frameworks for measuring and improving performance."
      }
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-heading font-bold text-center mb-12">
        Our Services
      </h1>
      <ServicesSection />
    </div>
  )
}
