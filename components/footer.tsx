"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Linkedin, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white py-16" style={{ borderTop: '1px solid var(--gray-30)' }}>
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="font-heading text-2xl font-bold" style={{ color: 'var(--red-90)' }}>BASWARA</span>
            <span className="text-sm font-medium" style={{ color: 'var(--text-02)' }}>CONSULTING</span>
          </div>
          <p className="text-sm" style={{ color: 'var(--text-02)' }}>Multisectoral Insight. Global Execution.</p>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" asChild style={{ color: 'var(--text-01)' }}>
              <Link href="https://www.linkedin.com/company/baswaraconsulting/posts/?feedView=all" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild style={{ color: 'var(--text-01)' }}>
              <Link href="mailto:office@baswaraconsulting.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild style={{ color: 'var(--text-01)' }}>
              <Link href="/contact" aria-label="Location">
                <MapPin className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4" style={{ color: 'var(--text-01)' }}>Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/about"
                className="text-[var(--text-02)] hover:text-[var(--red-90)] transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-[var(--text-02)] hover:text-[var(--red-90)] transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/credentials"
                className="text-[var(--text-02)] hover:text-[var(--red-90)] transition-colors"
              >
                Case Studies
              </Link>
            </li>
            <li>
              <Link
                href="/insights"
                className="text-[var(--text-02)] hover:text-[var(--red-90)] transition-colors"
              >
                Thought Leadership
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4" style={{ color: 'var(--text-01)' }}>Contact</h4>
          <address className="not-italic" style={{ color: 'var(--text-02)' }}>
            <p className="mt-2">
              <a
                href="mailto:office@baswaraconsulting.com"
                className="text-[var(--text-02)] hover:text-[var(--red-90)] transition-colors"
              >
                office@baswaraconsulting.com
              </a>
            </p>
          </address>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4" style={{ color: 'var(--text-01)' }}>Newsletter</h4>
          <p className="text-sm mb-4" style={{ color: 'var(--text-02)' }}>Subscribe to receive our latest insights and updates.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <Input type="email" placeholder="Your email" style={{ backgroundColor: 'var(--ui-02)', border: '1px solid var(--gray-30)' }} />
            <Button type="submit" style={{ backgroundColor: 'var(--red-90)', color: 'white', border: 'none', fontWeight: 500 }}>Subscribe</Button>
          </form>
        </div>
      </div>

      <div className="container mt-16 pt-8" style={{ borderTop: '1px solid var(--gray-30)' }}>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm" style={{ color: 'var(--text-02)' }}>
            © {new Date().getFullYear()} Baswara Consulting. All rights reserved.
          </p>
            <div className="flex gap-4 text-sm" style={{ color: 'var(--text-02)' }}>
              <Link
                href="/privacy"
                className="text-[var(--text-02)] hover:text-[var(--red-90)] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[var(--text-02)] hover:text-[var(--red-90)] transition-colors"
              >
                Terms of Service
              </Link>
            </div>
        </div>
      </div>
    </footer>
  )
}
