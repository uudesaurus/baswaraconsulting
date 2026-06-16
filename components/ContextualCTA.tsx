"use client"
import Link from 'next/link'

export default function ContextualCTA({ pageType, slug }: { pageType: string, slug: string }){
  let heading = 'Shape the future of Indonesia.'
  let buttonText = 'Explore Careers'
  let href = '/about'

  if (pageType === 'industry'){
    heading = `Talk to our ${slug.charAt(0).toUpperCase() + slug.slice(1)} Practice Lead.`
    buttonText = `Contact our ${slug.charAt(0).toUpperCase() + slug.slice(1)} Practice Lead`
    href = '/contact'
  }

  if (pageType === 'capability'){
    heading = `Discuss your ${slug.replace('-', ' ')} strategy.`
    buttonText = `Discuss ${slug.replace('-', ' ')}`
    href = '/contact'
  }

  if (pageType === 'unit'){
    heading = `Demo Baswara ${slug.toUpperCase()}`
    buttonText = `Request Demo`
    href = '/contact'
  }

  return (
    <div className="mt-8 border rounded p-6 bg-card">
      <h3 className="text-xl  mb-3">{heading}</h3>
      <Link href={href} className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded">{buttonText}</Link>
    </div>
  )
}
