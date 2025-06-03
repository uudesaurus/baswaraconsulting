"use client"

import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"

const jobListings = [
  {
    id: 1,
    title: "Associate Consultant",
    type: "Full-time",
    location: "Jakarta, Surabaya",
    department: "Consulting",
    description: {
      overview: `We are seeking a talented Associate Consultant to join our growing team at Baswara Consulting. The ideal candidate will work closely with senior consultants to deliver high-impact solutions to our clients in healthcare, supply chain, and digital transformation sectors.`,
      responsibilities: [
        "Support client engagements and deliver high-quality work products",
        "Conduct research and analysis to support project deliverables",
        "Prepare presentations and reports for client meetings",
        "Collaborate with team members on internal initiatives",
        "Assist in developing proposals and client solutions",
        "Participate in client workshops and strategic planning sessions"
      ],
      requirements: {
        education: [
          "Bachelor's degree in Business, Engineering, Healthcare, or related field",
          "1-3 years of relevant consulting or industry experience",
          "Strong academic record and demonstrated leadership experience"
        ],
        technical: [
          "Excellent analytical and problem-solving abilities",
          "Strong proficiency in data analysis and visualization",
          "Advanced Microsoft Office suite skills (Excel, PowerPoint, Word)",
          "Experience with business analysis tools and methodologies",
          "Knowledge of project management principles"
        ],
        soft: [
          "Outstanding written and verbal communication",
          "Strong presentation and facilitation abilities",
          "Excellent interpersonal and team collaboration skills",
          "Ability to work effectively under pressure",
          "Strong attention to detail and quality orientation",
          "Fluency in English and Bahasa Indonesia"
        ]
      },
      benefits: {
        compensation: [
          "Competitive salary package",
          "Performance-based bonuses",
          "Comprehensive health insurance",
          "Annual leave and paid time off",
          "Professional certification support"
        ],
        growth: [
          "Structured training and development program",
          "Mentorship from senior consultants",
          "Career advancement opportunities",
          "Access to industry conferences and workshops",
          "Cross-functional project exposure"
        ],
        environment: [
          "Dynamic and collaborative team culture",
          "Modern office facilities",
          "Flexible work arrangements",
          "Regular team building activities",
          "Inclusive and diverse workplace"
        ]
      },
      locations: [
        {
          primary: "Jakarta",
          secondary: "Surabaya (with travel opportunities)"
        }
      ],
      closing: "Join us in our mission to transform Indonesian businesses through innovative consulting solutions. We value diversity, continuous learning, and professional excellence."
    },
    slug: "associate-consultant",
  },
  // Add other job listings here...
]

const formSchema = z.object({
  // 1. General Information
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  birthday: z.date({
    required_error: "Please select your birthday",
  }),
  sex: z.enum(["male", "female"]),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  idNumber: z.string().min(1, "ID Number is required"),
  addressId: z.string().min(1, "Address based on ID is required"),
  addressDomicile: z.string().min(1, "Current address is required"),
  
  // 2. Latest Education
  education: z.enum(["SMA", "D3", "S1", "S2", "S3"]),
  
  // 3. Company and You
  referenceSource: z.enum([
    "LinkedIn",
    "Job Portal",
    "Company Website",
    "Employee Referral",
    "Campus Recruitment",
    "Other"
  ]),
  additionalInfo: z.string().optional(),
  
  // 4-7. Documents
  cv: z.string().min(1, "CV is required"),
  graduateCert: z.string().optional(),
  transcript: z.string().min(1, "Transcript is required"),
  photo: z.string().min(1, "Photo is required"),
  
  // 8. Social Media
  instagram: z.string().min(1, "Instagram handle is required"),
  twitter: z.string().min(1, "Twitter handle is required"),
})

export default function JobPage({ params }: { params: { slug: string } }) {
  const job = jobListings.find((j) => j.slug === params.slug)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      idNumber: "",
      addressId: "",
      addressDomicile: "",
      additionalInfo: "",
      instagram: "",
      twitter: "",
    },
  })

  if (!job) {
    notFound()
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Here you would typically send the application data to your backend
  }

  return (
    <div className="py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/career">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Careers
            </Link>
          </Button>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-secondary text-sm rounded-full">
                {job.type}
              </span>
              <span className="text-sm text-muted-foreground">{job.location}</span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{job.department}</span>
            </div>
            
            <h1 className="text-4xl font-bold mb-8">{job.title}</h1>

            <div className="space-y-12">
              {/* Overview */}
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">{job.description.overview}</p>
              </div>

              {/* Key Responsibilities */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Key Responsibilities</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {job.description.responsibilities.map((item, index) => (
                    <li key={index} className="text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">Requirements</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-medium mb-3">Education & Experience</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      {job.description.requirements.education.map((item, index) => (
                        <li key={index} className="text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-3">Technical Skills</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      {job.description.requirements.technical.map((item, index) => (
                        <li key={index} className="text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-3">Soft Skills</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      {job.description.requirements.soft.map((item, index) => (
                        <li key={index} className="text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* What We Offer */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">What We Offer</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-medium mb-3">Compensation & Benefits</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      {job.description.benefits.compensation.map((item, index) => (
                        <li key={index} className="text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-3">Growth & Development</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      {job.description.benefits.growth.map((item, index) => (
                        <li key={index} className="text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-3">Work Environment</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      {job.description.benefits.environment.map((item, index) => (
                        <li key={index} className="text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Location</h2>
                <div className="space-y-2">
                  {job.description.locations.map((loc, index) => (
                    <div key={index}>
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Primary:</span> {loc.primary}
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Secondary:</span> {loc.secondary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Closing */}
              <div className="bg-secondary/50 p-6 rounded-lg">
                <p className="text-lg font-medium">{job.description.closing}</p>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-6">Application Form</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* 1. General Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">1. General Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="birthday"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Birthday</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-[240px] pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="sex"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sex</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john.doe@example.com" {...field} />
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
                          <FormLabel>Phone Number</FormLabel>
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
                    name="idNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ID Number</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="addressId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address Based on ID</FormLabel>
                        <FormControl>
                          <Textarea {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="addressDomicile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address Based on Domicile</FormLabel>
                        <FormControl>
                          <Textarea {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Separator />

                {/* 2. Latest Education */}
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">2. Latest Education</h3>
                  <FormField
                    control={form.control}
                    name="education"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Education Level</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Choose Education" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="SMA">SMA/SMK</SelectItem>
                            <SelectItem value="D3">D3</SelectItem>
                            <SelectItem value="S1">S1</SelectItem>
                            <SelectItem value="S2">S2</SelectItem>
                            <SelectItem value="S3">S3</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Separator />

                {/* 3. Company and You */}
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">3. Baswara Consulting and You</h3>
                  <FormField
                    control={form.control}
                    name="referenceSource"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How do you know us?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Reference" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                            <SelectItem value="Job Portal">Job Portal</SelectItem>
                            <SelectItem value="Company Website">Company Website</SelectItem>
                            <SelectItem value="Employee Referral">Employee Referral</SelectItem>
                            <SelectItem value="Campus Recruitment">Campus Recruitment</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="additionalInfo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Information</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us more about yourself..."
                            className="h-32"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Separator />

                {/* 4-7. Documents */}
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">4. Documents</h3>
                  
                  <FormField
                    control={form.control}
                    name="cv"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Curriculum Vitae</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            accept=".pdf"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          PDF file only, max 2 MB
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="graduateCert"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Graduate Certification</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            accept=".pdf"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Optional, PDF file only, max 2 MB
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="transcript"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Transcript</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            accept=".pdf"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          PDF file only, max 2 MB. Online/informal transcript is allowed
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="photo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Photo</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            accept="image/*"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          4 x 6 cm, Max 1 MB
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Separator />

                {/* 8. Social Media */}
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">8. Social Media Links</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="instagram"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Instagram</FormLabel>
                          <FormControl>
                            <Input placeholder="@username" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="twitter"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Twitter</FormLabel>
                          <FormControl>
                            <Input placeholder="@username" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full">Submit Application</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
} 