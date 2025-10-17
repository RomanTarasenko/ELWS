"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { InfoCards } from "@/components/info-cards"
import { ServicesSection } from "@/components/services-section"
import { BenefitsSection } from "@/components/benefits-section"
import { FaqSection } from "@/components/faq-section"
import { ContactFormSection } from "@/components/contact-form-section"
import { Footer } from "@/components/footer"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <InfoCards />
      <ServicesSection />
      <BenefitsSection />
      <FaqSection />
      <ContactFormSection />
      <Footer />
    </main>
  )
}
