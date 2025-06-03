import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Sans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CTASection from "@/components/cta-section"


const fontSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
})

// Use the same font for headings but with a heavier weight
const fontHeading = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://baswaraconsulting.com'),
  title: {
    default: "Baswara Consulting | Strategic Excellence. Global Impact.",
    template: "%s | Baswara Consulting"
  },
  description: "Baswara Consulting delivers transformative strategies and actionable insights across industries, driving sustainable growth and operational excellence.",
  keywords: [
    "consulting",
    "strategic consulting",
    "business strategy",
    "operational excellence",
    "global consulting",
    "industry transformation",
    "corporate strategy",
    "business consulting",
    "management consulting",
    "strategic planning"
  ],
  authors: [{ name: "Baswara Consulting" }],
  creator: "Baswara Consulting",
  publisher: "Baswara Consulting",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://baswaraconsulting.com',
    siteName: 'Baswara Consulting',
    title: 'Baswara Consulting | Strategic Excellence. Global Impact.',
    description: 'Transform your business with data-driven strategies and proven methodologies. Global expertise in corporate strategy and operational excellence.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Baswara Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baswara Consulting | Strategic Excellence. Global Impact.',
    description: 'Transform your business with data-driven strategies and proven methodologies. Global expertise in corporate strategy and operational excellence.',
    images: ['/twitter-image.jpg'],
    creator: '@baswaraconsult',
  },
  verification: {
    google: 'your-google-verification-code',
    // Add other verification codes as needed
  },
  alternates: {
    canonical: 'https://baswaraconsulting.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable, fontHeading.variable)}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <CTASection />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
