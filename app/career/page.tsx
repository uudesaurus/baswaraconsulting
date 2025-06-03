"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"

const jobListings = [
  {
    id: 1,
    title: "Associate Consultant",
    type: "Contract",
    location: "Jakarta, Surabaya",
    slug: "associate-consultant",
  },
  {
    id: 2,
    title: "Senior Associate Consultant",
    type: "Fulltime",
    location: "Jakarta",
    slug: "senior-associate-consultant",
  },
  {
    id: 3,
    title: "Manager - Technology Consultant",
    type: "Fulltime",
    location: "Jakarta",
    slug: "manager-technology-consultant",
  },
  {
    id: 4,
    title: "Associate Consultant - Technology",
    type: "Fulltime",
    location: "Jakarta",
    slug: "associate-consultant-technology",
  },
  {
    id: 5,
    title: "Associate Internship - Technology",
    type: "Internship",
    location: "Jakarta Selatan",
    slug: "associate-internship-technology",
  },
  {
    id: 6,
    title: "Manager - Business Consultant",
    type: "Fulltime",
    location: "DKI Jakarta",
    slug: "manager-business-consultant",
  },
  {
    id: 7,
    title: "Associate Internship",
    type: "Internship",
    location: "Jakarta & Surabaya",
    slug: "associate-internship",
  },
  {
    id: 8,
    title: "Human Capital Strategy Internship",
    type: "Internship",
    location: "Jakarta",
    slug: "human-capital-strategy-internship",
  },
  {
    id: 9,
    title: "Sales and Training Specialist",
    type: "Fulltime",
    location: "Jakarta",
    slug: "sales-training-specialist",
  },
  {
    id: 10,
    title: "Finance, Accounting & Tax",
    type: "Contract",
    location: "Jakarta",
    slug: "finance-accounting-tax",
  },
]

const employmentTypes = ["All Types", "Fulltime", "Contract", "Internship"]

export default function CareerPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState("All Types")

  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = selectedType === "All Types" || job.type === selectedType
    return matchesSearch && matchesType
  })

  return (
    <div className="py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Create a World That Inspires Human Connection</h1>
          <p className="text-xl text-muted-foreground">
            At Baswara, we seek people that promote enthusiasm who willingly make differences and bridging 
            possibilities. Do it now with Baswara.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12 space-y-6">
            <Input
              placeholder="Type in your preferred job"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-lg p-6"
            />
            
            <div className="flex items-center gap-4">
              <p className="text-sm text-muted-foreground">or</p>
              <p className="font-medium">Filter by Employment Type</p>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {employmentTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <Link
                key={job.id}
                href={`/career/${job.slug}`}
                className="block group"
              >
                <div className="bg-card hover:bg-accent p-6 rounded-lg border transition-all duration-200">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-secondary text-sm rounded-full">
                          {job.type}
                        </span>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                      </div>
                      <h3 className="text-xl font-medium group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No jobs found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 