import { Navigation } from "@/components/navigation"
import { FaqSection } from "@/components/faq-section"
import { ContactFormSection } from "@/components/contact-form-section"
import { Footer } from "@/components/footer"
import { ServicePageLayout } from "@/components/service-page-layout"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function ConsultationsPage() {
  const benefits = [
    "Avoid costly mistakes in legal and tax matters",
    "Get expert guidance on residence permits and citizenship",
    "Optimize your tax strategy from the start",
    "Understand Polish business regulations",
    "Make informed decisions with professional support",
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      <ServicePageLayout
        title="Consultations on legalization, taxes and business in Poland"
        description="We will help you solve your issues, from obtaining a residence permit and citizenship to optimizing taxes and registering a company. Online or in person."
        imageSrc="/business-consultation-meeting-with-professionals.jpg"
        imageAlt="Business consultations"
      >
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Why is consultation your best first step?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Every decision in Poland is related to laws, taxes and bureaucracy. A mistake can be costly: refusal of a
              residence permit, fines, overpayment of taxes.
            </p>
          </div>

          <Card className="p-8 bg-muted/30">
            <h3 className="text-xl font-bold text-foreground mb-6">What you get from our consultations:</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </Card>

          <p className="text-lg text-muted-foreground leading-relaxed">
            [Add more details about consultation formats, duration, pricing, and booking process]
          </p>
        </div>
      </ServicePageLayout>

      <FaqSection />
      <ContactFormSection />
      <Footer />
    </main>
  )
}
