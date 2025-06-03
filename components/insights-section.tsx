import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const insights = [
  {
    id: 1,
    title: "Building an Agile Supply Chain for Public Health Commodities in Indonesia",
    date: "March 2024",
    category: "Healthcare & Supply Chain",
    excerpt: "Managing essential public health commodities such as AIDS, TB and Malaria (ATM) commodities involves navigating a complex ecosystem of logistical, institutional, and governance-related barriers.",
    slug: "agile-supply-chain-indonesia",
    image: "/images/insight.png",
    readTime: "15 min read",
  }
]

export default function InsightsSection() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Thought Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Explore our latest research, analysis, and insights on industry trends and best practices.
            </p>
          </div>
          <Button variant="outline" asChild className="mt-4 md:mt-0">
            <Link href="/insights">
              View All Insights <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight) => (
            <div key={insight.id} className="group">
              <Link href={`/insights/${insight.slug}`} className="block">
                <div className="relative h-60 mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-accent/90 rounded-full text-xs font-medium text-background">
                    {insight.category}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="text-sm text-muted-foreground">{insight.date}</div>
                  <h3 className="text-xl font-medium group-hover:text-accent transition-colors">{insight.title}</h3>
                  <p className="text-muted-foreground">{insight.excerpt}</p>
                  <div className="pt-2 text-sm font-medium text-accent flex items-center">
                    Read More <ArrowRight className="ml-2 h-3 w-3" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
