import fs from 'fs'
import path from 'path'
import Link from 'next/link'

export default function CapabilitiesPage(){
  const sitemapPath = path.join(process.cwd(), 'content', 'sitemap.json')
  const sitemap = JSON.parse(fs.readFileSync(sitemapPath, 'utf8'))
  const caps = sitemap?.site?.capabilities || []

  return (
    <main className="container py-16">
      <h1 className="text-3xl font-heading mb-6">Capabilities</h1>
      <p className="text-muted-foreground mb-8">Our seven core capabilities, presented in the Baswara Matrix style. Click any capability to learn how it works and how it applies to industries.</p>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {caps.map((c: any) => (
          <li key={c.slug} className="border rounded p-6">
            <h2 className="text-xl font-semibold mb-2">{c.name}</h2>
            <p className="text-sm text-muted-foreground mb-4">{c.slug}</p>
            <Link href={c.slug} className="text-primary-foreground bg-primary px-3 py-1 rounded inline-block">Explore</Link>
          </li>
        ))}
      </ul>

      <section className="mt-12">
        <h3 className="text-xl font-heading mb-3">How it works</h3>
        <p className="text-muted-foreground">Each Capability page is a canonical node in the Contentful model. It exposes a hero, a service deep-dive and lists industries where it applies. Insights tagged with this capability are surfaced automatically via the Insights collection (see Insights page).</p>
      </section>
    </main>
  )
}
