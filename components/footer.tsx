import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Linkedin, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary py-16">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="font-heading text-2xl font-bold gradient-text">AYAH</span>
            <span className="text-sm font-medium text-muted-foreground">CONSULTING</span>
          </div>
          <p className="text-muted-foreground text-sm">Multisectoral Insight. Global Execution.</p>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:contact@ayahconsulting.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/contact" aria-label="Location">
                <MapPin className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/credentials" className="text-muted-foreground hover:text-foreground transition-colors">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="/insights" className="text-muted-foreground hover:text-foreground transition-colors">
                Thought Leadership
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-lg mb-4">Contact</h4>
          <address className="not-italic text-muted-foreground">
            <p>Jakarta, Indonesia</p>
            <p className="mt-2">
              <a href="mailto:contact@ayahconsulting.com" className="hover:text-foreground transition-colors">
                contact@ayahconsulting.com
              </a>
            </p>
          </address>
        </div>

        <div>
          <h4 className="font-medium text-lg mb-4">Newsletter</h4>
          <p className="text-muted-foreground text-sm mb-4">Subscribe to receive our latest insights and updates.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <Input type="email" placeholder="Your email" className="bg-background/20" />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>

      <div className="container mt-16 pt-8 border-t border-border/30">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ayah Consulting. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
