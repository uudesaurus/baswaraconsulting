import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Insight } from "@/lib/data"

interface InsightsEngineProps {
  insights: Insight[]
  title?: string
  description?: string
  context?: string
}

export default function InsightsEngine({
  insights,
  title = "Our Latest Insights",
  description = "Deep-dive research and analysis from our consultants",
  context
}: InsightsEngineProps) {
  if (insights.length === 0) {
    return null
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <div className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm  rounded-full mb-4">
              Thought Leadership
            </div>
            <h2 className="text-3xl md:text-4xl  mb-3">{title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {description}
            </p>
            {context && (
              <p className="mt-2 text-sm text-primary ">
                Insights relevant to {context}
              </p>
            )}
          </div>
          <Button variant="outline" asChild className="mt-6 md:mt-0">
            <Link href="/insights">
              View All Insights <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight) => (
            <Link
              key={insight.slug}
              href={`/insights/${insight.slug}`}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl  text-primary/10">
                    {insight.category.charAt(0)}
                  </div>
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs  text-primary">
                  {insight.category}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground">
                  <span>{insight.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {insight.readTime}
                  </span>
                </div>
                <h3 className="text-lg  mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {insight.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                  {insight.excerpt}
                </p>
                <div className="flex items-center text-sm  text-primary group-hover:gap-2 transition-all">
                  Read More 
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
