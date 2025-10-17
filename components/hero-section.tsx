"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ConsultationModal } from "./consultation-modal"

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section id="home" className="relative min-h-[600px] lg:min-h-[700px] flex items-center pt-16 lg:pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/two-professional-business-consultants-discussing-f.jpg"
            alt="Professional business consultation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
              Accounting and consulting services in Poland
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
              Registration of companies, accounting, tax settlements, and reporting for businesses operating in Poland.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base lg:text-lg px-8 py-6"
              onClick={() => setIsModalOpen(true)}
            >
              Get Consultation
            </Button>
          </div>
        </div>
      </section>

      <ConsultationModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  )
}
