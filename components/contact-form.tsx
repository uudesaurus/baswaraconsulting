"use client"

import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const services = [
  {
    category: "1. Corporate Strategy & Transformation",
    items: [
      "Business Strategy Formulation",
      "Transformation Roadmap Development",
      "Strategic Positioning & Growth Acceleration"
    ]
  },
  {
    category: "2. Model Innovation & Institutional Planning",
    items: [
      "Business Model Reinvention",
      "Corporate Long-Term Planning (RJPP)"
    ]
  },
  {
    category: "3. Feasibility & Investment Studies",
    items: [
      "Market Entry & Opportunity Assessment",
      "Financial Modeling & Investment Case",
      "Operational & Organizational Feasibility"
    ]
  },
  {
    category: "4. Supply Chain Strategy & Execution",
    items: [
      "Supply Chain Diagnostic & Maturity Assessment",
      "End-to-End Supply Chain Design",
      "Demand Forecasting & Supply Planning"
    ]
  },
  {
    category: "5. Risk Management & Business Continuity",
    items: [
      "Supply Risk Mapping & Response Strategy",
      "BCP & Emergency Logistics Simulation",
      "Vendor Management Strategy"
    ]
  },
  {
    category: "6. SOP & Process Reengineering",
    items: [
      "Business Process Mapping & Optimization",
      "SOP Development & Deployment",
      "Performance Monitoring Framework"
    ]
  },
  {
    category: "7. Government & Donor-Funded Program Support",
    items: [
      "Program Design for Donor-Driven Initiatives",
      "Local Implementation Partnership",
      "Monitoring, Evaluation & Learning (MEL)"
    ]
  },
  {
    category: "8. Regulatory & Institutional Advisory",
    items: [
      "Policy Review & Institutional Analysis",
      "Stakeholder Mapping & Engagement Strategy"
    ]
  },
  {
    category: "9. Digital Strategy for Operations",
    items: [
      "Digital Transformation Blueprint",
      "Technology Vendor Selection & Integration",
      "Change Management for Digital Adoption"
    ]
  },
  {
    category: "10. Data-Driven Decision Making",
    items: [
      "Dashboarding & Analytics",
      "Data Governance & Quality Strategy",
      "Advanced Analytics Feasibility"
    ]
  }
]

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company name is required"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  serviceCategory: z.string().min(1, "Please select a service category"),
  serviceItem: z.string().min(1, "Please select a specific service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export function ContactForm() {
  const searchParams = useSearchParams()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      serviceCategory: searchParams.get("category") || "",
      serviceItem: searchParams.get("service") || "",
      message: searchParams.get("message") || "",
    },
  })

  const selectedCategoryItems = services.find(s => s.category === form.watch("serviceCategory"))?.items || []

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Add your form submission logic here
  }

  return (
    <div className="bg-card p-8 rounded-lg border sticky top-24">
      <h2 className="text-2xl font-semibold mb-6">Book an Intro Call</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john.doe@company.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input placeholder="Company Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="+62 812 3456 7890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="serviceCategory"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.category} value={service.category}>
                        {service.category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="serviceItem"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Specific Service</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a specific service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {selectedCategoryItems.map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your project or requirements..."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">Schedule Call</Button>
        </form>
      </Form>
    </div>
  )
} 