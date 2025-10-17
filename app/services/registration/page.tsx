import { Navigation } from "@/components/navigation"
import { FaqSection } from "@/components/faq-section"
import { ContactFormSection } from "@/components/contact-form-section"
import { Footer } from "@/components/footer"
import { ServicePageLayout } from "@/components/service-page-layout"

export default function RegistrationServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <ServicePageLayout
        title="Registration of legal entities and sole proprietors in Poland"
        description="We will register your legal entity or sole proprietor and select the optimal tax system so that you can start a business in Poland with minimal cost and maximum benefit!"
        imageSrc="/business-registration-documents-and-official-stamp.jpg"
        imageAlt="Company registration"
      >
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            [Add detailed information about the registration process, timeline, and requirements]
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            [Explain different business structures available in Poland and how you help choose the right one]
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            [Include information about tax system selection and optimization strategies]
          </p>
        </div>
      </ServicePageLayout>

      <FaqSection />
      <ContactFormSection />
      <Footer />
    </main>
  )
}
