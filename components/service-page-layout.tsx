"use client"

import type React from "react"
import Image from "next/image"
import { useEffect } from "react"

interface ServicePageLayoutProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  children: React.ReactNode
}

export function ServicePageLayout({ title, description, imageSrc, imageAlt, children }: ServicePageLayoutProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Hero Section with Image */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">{title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">{description}</p>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">{children}</div>
        </div>
      </section>
    </>
  )
}
