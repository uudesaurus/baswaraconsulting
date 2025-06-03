"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const insights = [
  {
    id: 1,
    title: "Building an Agile Supply Chain for Public Health Commodities in Indonesia",
    date: "March 2024",
    category: "Healthcare & Supply Chain",
    excerpt: "Managing essential public health commodities such as AIDS, TB and Malaria (ATM) commodities involves navigating a complex ecosystem of logistical, institutional, and governance-related barriers.",
    slug: "agile-supply-chain-indonesia",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "15 min read",
  }
]

const categories = [
  "All Topics",
  "Healthcare & Supply Chain",
  "Digital & Technology",
  "Strategy & Transformation",
  "Risk & Resilience",
  "Policy & Governance",
]

const dates = [
  "All Time",
  "2024",
  "2023",
  "2022",
]

export default function InsightsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Topics")
  const [selectedDate, setSelectedDate] = useState("All Time")

  const filteredInsights = insights.filter((insight) => {
    const matchesSearch = insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      insight.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All Topics" || insight.category === selectedCategory
    const matchesDate = selectedDate === "All Time" || insight.date.includes(selectedDate)
    return matchesSearch && matchesCategory && matchesDate
  })

  return (
    <section className="py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <h1 className="text-4xl font-bold mb-4">Thought Leadership</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Explore our latest research, analysis, and insights on industry trends and best practices.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            <Input
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="md:max-w-sm"
            />
            <div className="flex flex-wrap gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Filter by topic" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedDate} onValueChange={setSelectedDate}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Filter by date" />
                </SelectTrigger>
                <SelectContent>
                  {dates.map((date) => (
                    <SelectItem key={date} value={date}>
                      {date}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInsights.map((insight) => (
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

        {filteredInsights.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No insights found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  )
} 