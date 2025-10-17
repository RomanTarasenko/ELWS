import { Navigation } from "@/components/navigation"
import { FaqSection } from "@/components/faq-section"
import { ContactFormSection } from "@/components/contact-form-section"
import { Footer } from "@/components/footer"
import { ServicePageLayout } from "@/components/service-page-layout"

export default function AccountingServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <ServicePageLayout
        title="Accounting services in Poland"
        description="Get a full range of accounting and tax services: from strategic planning and tax optimization to accurate balance sheet preparation — everything for your peace of mind and successful business."
        imageSrc="/professional-accountant-working-with-financial-doc.jpg"
        imageAlt="Accounting services"
      >
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            [Add detailed information about your accounting services, including what's included, benefits, and process]
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            [Include specific services like bookkeeping, financial reporting, tax preparation, etc.]
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            [Mention your expertise, certifications, and what makes your accounting services unique]
          </p>
        </div>
      </ServicePageLayout>

      <FaqSection />
      <ContactFormSection />
      <Footer />
    </main>
  )
}
