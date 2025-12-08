import fs from 'fs'
import path from 'path'
import Link from 'next/link'

export default function IndustriesPage(){
  const sitemapPath = path.join(process.cwd(), 'content', 'sitemap.json')
  const sitemap = JSON.parse(fs.readFileSync(sitemapPath, 'utf8'))
  const inds = sitemap?.site?.industries || []

  return (
    <main className="container py-16">
      <h1 className="text-3xl font-heading mb-6">Industries</h1>
      <p className="text-muted-foreground mb-8">Industry pages show the local Indonesian context and the specific applications of our Capabilities.</p>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {inds.map((i: any) => (
          <li key={i.slug} className="border rounded p-6">
            <h2 className="text-xl font-semibold mb-2">{i.name}</h2>
            <p className="text-sm text-muted-foreground mb-4">{i.slug}</p>
            <Link href={i.slug} className="text-primary-foreground bg-primary px-3 py-1 rounded inline-block">Explore</Link>
          </li>
        ))}
      </ul>

      <section className="mt-12">
        <h3 className="text-xl font-heading mb-3">How it works</h3>
        <p className="text-muted-foreground">Industry pages do not enumerate generic services; they render specific applications of Capabilities. Example: "Palm Oil Yield Improvement" is drawn from Operations but framed for Agro.</p>
      </section>
    </main>
  )
}
