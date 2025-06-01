import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">
              About <span className="gradient-text">Ayah Consulting</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Bridging practice and strategy across sectors to deliver measurable transformation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-[600px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=1200&width=800"
                  alt="Arief Sudrajat, Founder of Ayah Consulting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="mb-6">Founder's Story</h2>
              <p className="text-muted-foreground mb-6">
                Arief Sudrajat's journey spans over two decades across both private and public sectors, giving him a
                unique perspective on how to bridge operational excellence with strategic vision.
              </p>

              <p className="text-muted-foreground mb-6">
                From executional roles in the private sector at Panasonic, Sumitomo, and Atlas Copco to senior
                consulting projects in the public sector with the World Bank, USAID, UNDP, and CHAI, Arief combines
                ground-level implementation expertise with national policy design experience.
              </p>

              <p className="text-muted-foreground mb-6">
                This multisectoral background has shaped Ayah Consulting's philosophy of delivering advisory services
                that are rooted in execution, strategies built on evidence, and solutions co-created with clients.
              </p>

              <div className="p-6 bg-secondary rounded-lg border border-border mt-8">
                <h4 className="text-lg font-medium mb-2">Arief Sudrajat</h4>
                <p className="text-accent mb-4">Founder & Principal Consultant</p>
                <p className="text-muted-foreground">
                  "I believe in bridging practice and strategy across sectors. The most effective solutions come from
                  understanding both the high-level policy landscape and the ground-level implementation challenges."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-4">Our Philosophy</h2>
            <p className="text-xl text-muted-foreground">
              The core principles that guide our work and define our approach to consulting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-medium mb-4">Vision</h3>
              <p className="text-muted-foreground">
                "To shape adaptive, measurable transformation across industries and systems."
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-medium mb-4">Mission</h3>
              <p className="text-muted-foreground">
                "Deliver advisory rooted in execution, strategy built on evidence, and solutions co-created with
                clients."
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-medium mb-4">Values</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-accent" />
                  <span>Data-Driven</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-accent" />
                  <span>Collaborative</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-accent" />
                  <span>Impact-Oriented</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-accent" />
                  <span>Practical</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-accent" />
                  <span>Sustainable</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-4">Our Expertise</h2>
            <p className="text-xl text-muted-foreground">
              Specialized knowledge and capabilities developed through years of hands-on experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-medium mb-4">Public Sector</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <div className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-accent" />
                  <span>National health system strengthening and reform</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-accent" />
                  <span>Diagnostic network optimization for HIV, TB, and other diseases</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-accent" />
                  <span>Policy development and implementation</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-accent" />
                  <span>Multi-stakeholder coordination and governance</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-medium mb-4">Private Sector</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <div className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-accent" />
                  <span>Supply chain optimization and logistics management</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-accent" />
                  <span>Operational efficiency and process improvement</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-accent" />
                  <span>Performance monitoring and KPI development</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-accent" />
                  <span>Digital transformation and systems integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container text-center">
          <h2 className="mb-8">Ready to Work With Us?</h2>
          <Button size="lg" asChild>
            <Link href="/contact">
              Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
