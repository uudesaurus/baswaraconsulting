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
    title: "Consulting Analyst",
    type: "Fulltime",
    location: "Jakarta, Surabaya",
    slug: "consulting-analyst",
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
                <div className="p-6 border border-[var(--gray-30)] bg-white transition-all duration-200 hover:border-[var(--red-90)]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 text-sm rounded-full" style={{ backgroundColor: 'var(--ui-02)', border: '1px solid var(--gray-30)', color: 'var(--text-01)' }}>
                          {job.type}
                        </span>
                        <div className="flex items-center text-sm" style={{ color: 'var(--text-02)' }}>
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                      </div>
                      <h3 className="text-xl font-medium" style={{ color: 'var(--text-01)' }}>
                        {job.title}
                      </h3>
                    </div>
                    <ArrowRight className="h-5 w-5" style={{ color: 'var(--text-02)' }} />
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