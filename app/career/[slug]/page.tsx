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
    title: "Consulting Analyst",
    type: "Full-time",
    location: "Jakarta, Surabaya",
    department: "Consulting",
    description: {
      overview: `Baswara Consulting is seeking talented and driven Consulting Analysts to join our dynamic team on a full-time basis. This is an entry-level position ideal for high-achieving graduates.

As a Consulting Analyst, you will be a core member of our consulting team, working on high-impact projects for both international and national clients. This role offers significant exposure to diverse industries and business challenges, from local market strategies to global expansion initiatives. You will be directly involved in research, analysis, and stakeholder engagement to deliver strategic solutions for our senior clients.`,
      requirements: {
        whoWeAreLookingFor: [
          "Open to graduates from all academic backgrounds and universities. Fresh graduates are welcome to apply.",
          "Demonstrated experience in at least one consulting project is required (e.g., through internships, freelance work, or university projects). We highly value experience in strategic engagements such as Market Entry, Corporate Strategy, Mergers & Acquisitions (M&A) support, or Growth Strategy.",
          "Must possess a foundational skillset across the following three areas:",
          "a. Financial Acumen (e.g., financial modeling, valuation, business case analysis)",
          "b. Consulting Frameworks (e.g., market analysis, problem-solving, strategic planning)",
          "c. Legal & Compliance (e.g., understanding of regulatory landscapes, due diligence)",
          "Specialized expertise in any specific domain is highly valued.",
          "Excellent communication and interpersonal skills in both English and Bahasa Indonesia.",
          "Preferably based in the Jabodetabek area to accommodate a hybrid work model."
        ],
        requiredAttributes: [
          "A fast learner who is adaptive and capable of working effectively under tight deadlines.",
          "Comfortable in a collaborative, fast-paced consulting environment.",
          "Detail-oriented with strong analytical, writing, and presentation skills."
        ]
      },
      selectionProcess: [
        "CV & Cover Letter Screening",
        "Focus Group Discussion (FGD)",
        "Final Interview",
        "Announcement"
      ],
      applicationDetails: {
        email: "office@baswaraconsulting.com",
        subject: "[Baswara Consulting – Consulting Analyst – Your Full Name]",
        deadline: "16 September 2025, 5:00 PM WIB",
        note: "Only shortlisted candidates will be contacted to proceed to the next stage"
      }
    },
    slug: "consulting-analyst",
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
                <p className="text-lg leading-relaxed whitespace-pre-line">{job.description.overview}</p>
              </div>

              {/* Who We Are Looking For */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Who We Are Looking For</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {job.description.requirements.whoWeAreLookingFor.map((item, index) => (
                    <li key={index} className="text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </div>

              {/* Required Attributes */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Required Attributes</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {job.description.requirements.requiredAttributes.map((item, index) => (
                    <li key={index} className="text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </div>

              {/* Selection Process */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Selection Process</h2>
                <ol className="list-decimal pl-6 space-y-2">
                  {job.description.selectionProcess.map((item, index) => (
                    <li key={index} className="text-muted-foreground">{item}</li>
                  ))}
                </ol>
              </div>

              {/* Application Details */}
              <div className="bg-secondary/50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Application Details</h2>
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Email:</span> {job.description.applicationDetails.email}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Subject:</span> {job.description.applicationDetails.subject}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Deadline:</span> {job.description.applicationDetails.deadline}
                  </p>
                  <p className="text-sm text-muted-foreground mt-4">
                    {job.description.applicationDetails.note}
                  </p>
                </div>
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