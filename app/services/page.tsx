import { Activity, Truck } from "lucide-react"

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
  }
]
