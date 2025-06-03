"use client"

import { Suspense } from "react"
import { ContactForm } from "@/components/contact-form"
import { MapPin, Mail, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-bold mb-4">Book an Intro Call</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're looking to transform your business or discuss potential collaborations, 
              we're here to help. Schedule a call or reach out through our various channels.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-12">
              {/* Office Locations */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">Our Offices</h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <MapPin className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-medium mb-2">Jakarta Office</h3>
                      {/* <p className="text-muted-foreground">
                        Ciputra World 2 Jakarta<br />
                        12th Floor<br />
                        Jakarta 12930
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Methods */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <a href="mailto:contact@baswaraconsulting.com" className="text-muted-foreground hover:text-primary transition-colors">
                      contact@baswaraconsulting.com
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <a href="tel:+6281341146287" className="text-muted-foreground hover:text-primary transition-colors">
                      +62 813 4114 6287
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">Working Hours</h2>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Monday - Friday:</span> 09:00 - 17:00 WIB
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Saturday - Sunday:</span> Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Suspense fallback={<div>Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 