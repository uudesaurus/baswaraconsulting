import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Sans } from "next/font/google"
import Script from "next/script"
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
    google: 'google-site-verification=dRRpHjbEvZVeh-fRxrYXdBoUJmVEhlcIGZvWxhsPYVk',
    other: {
      'msvalidate.01': 'YOUR_BING_VERIFICATION_CODE',
      'yandex-verification': 'YOUR_YANDEX_CODE',
    }
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://baswaraconsulting.com",
    "name": "Baswara Consulting",
    "url": "https://baswaraconsulting.com",
    "logo": "https://baswaraconsulting.com/logo.png",
    "image": "https://baswaraconsulting.com/og-image.jpg",
    "description": "Baswara Consulting delivers transformative strategies and actionable insights across industries, driving sustainable growth and operational excellence.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID",
      "addressRegion": "Jakarta"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-6.2088",
      "longitude": "106.8456"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "-6.2088",
        "longitude": "106.8456"
      },
      "geoRadius": "50000"
    },
    "priceRange": "$$$",
    "openingHours": "Mo,Tu,We,Th,Fr 09:00-17:00",
    "telephone": "+62XXXXXXXXXX",
    "email": "contact@baswaraconsulting.com",
    "sameAs": [
      "https://www.linkedin.com/company/baswara-consulting"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Consulting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Strategy",
            "description": "Comprehensive corporate strategy consulting services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Operational Excellence",
            "description": "Business process optimization and operational improvement"
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://baswaraconsulting.com/#website",
    "url": "https://baswaraconsulting.com",
    "name": "Baswara Consulting",
    "description": "Strategic Excellence. Global Impact.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://baswaraconsulting.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <Script
          id="schema-org-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        
        <Script
          id="schema-org-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR_GA_ID');
          `}
        </Script>
      </head>
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
