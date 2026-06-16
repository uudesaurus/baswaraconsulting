"use client"

import Link from 'next/link'
import { FileText, Download, Calendar, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export interface Whitepaper {
    title: string
    description: string
    fileUrl: string
    fileSize: string
    publishedDate: string
    thumbnail?: string
    category?: string
}

interface WhitepaperSectionProps {
    whitepapers: Whitepaper[]
    title?: string
    description?: string
    industryName?: string
}

export default function WhitepaperSection({
    whitepapers,
    title = "Research & Whitepapers",
    description = "Download our in-depth research and industry analysis",
    industryName = ""
}: WhitepaperSectionProps) {
    if (!whitepapers || whitepapers.length === 0) return null

    return (
        <section className="py-24 bg-slate-50 border-b">
            <div className="container">
                <div className="max-w-5xl">
                    {/* Section Header */}
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                <FileText className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <div className="text-xs  text-primary uppercase tracking-[0.2em] mb-2">Research & Analysis</div>
                                <h2 className="text-3xl md:text-5xl ">{title}</h2>
                            </div>
                        </div>
                        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                            {description}
                        </p>
                    </div>

                    {/* Whitepapers Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {whitepapers.map((whitepaper, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-xl border-2 border-slate-200 hover:border-accent hover:shadow-xl transition-all overflow-hidden"
                            >
                                {/* Thumbnail or Icon */}
                                <div className="relative h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                    {whitepaper.thumbnail ? (
                                        <img
                                            src={whitepaper.thumbnail}
                                            alt={whitepaper.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <FileText className="h-20 w-20 text-white/80" />
                                    )}
                                    {whitepaper.category && (
                                        <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs  text-primary">
                                            {whitepaper.category}
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl  mb-3 group-hover:text-accent transition-colors">
                                        {whitepaper.title}
                                    </h3>

                                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                        {whitepaper.description}
                                    </p>

                                    {/* Meta Information */}
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 pb-4 border-b">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-3.5 w-3.5" />
                                            <span>{whitepaper.publishedDate}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <FileText className="h-3.5 w-3.5" />
                                            <span>{whitepaper.fileSize}</span>
                                        </div>
                                    </div>

                                    {/* Download Button */}
                                    <a
                                        href={whitepaper.fileUrl}
                                        download
                                        rel="noopener noreferrer"
                                        className="block"
                                    >
                                        <Button
                                            className="w-full group/btn"
                                            variant="default"
                                        >
                                            <Download className="mr-2 h-4 w-4 group-hover/btn:animate-bounce" />
                                            Download PDF
                                            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action for More Research */}
                    <div className="mt-12 p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border-2 border-dashed border-primary/20">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div>
                                <h4 className="text-lg  mb-1">Looking for Custom Research?</h4>
                                <p className="text-sm text-muted-foreground">
                                    We offer bespoke industry analysis and strategic reports tailored to your specific needs.
                                </p>
                            </div>
                            <Button asChild variant="outline">
                                <Link href="/contact">
                                    Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
