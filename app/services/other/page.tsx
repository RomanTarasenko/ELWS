import { Navigation } from "@/components/navigation"
import { FaqSection } from "@/components/faq-section"
import { ContactFormSection } from "@/components/contact-form-section"
import { Footer } from "@/components/footer"
import { ServicePageLayout } from "@/components/service-page-layout"

export default function OtherServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <ServicePageLayout
        title="Other types of services"
        description="We provide a wide range of accounting services: consultations, training programs, checklists, and more."
        imageSrc="/diverse-business-services-and-support.jpg"
        imageAlt="Other services"
      >
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            [Add detailed information about additional services you offer]
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            [Include training programs, workshops, custom checklists, and any specialized services]
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            [Explain how these services complement your core offerings and benefit clients]
          </p>
          <p className="text-sm text-muted-foreground italic mt-8">*Prices are shown in net</p>
        </div>
      </ServicePageLayout>

      <FaqSection />
      <ContactFormSection />
      <Footer />
    </main>
  )
}
