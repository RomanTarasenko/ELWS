import { Navigation } from "@/components/navigation"
import { FaqSection } from "@/components/faq-section"
import { ContactFormSection } from "@/components/contact-form-section"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PricesPage() {
  const additionalServices = [
    {
      title: "Tax Consultation",
      price: "[Price]",
      description: "Expert advice on tax optimization and compliance",
      features: ["1-hour consultation", "Written recommendations", "Follow-up support"],
    },
    {
      title: "Financial Analysis",
      price: "[Price]",
      description: "Comprehensive analysis of your business finances",
      features: ["Detailed report", "Performance metrics", "Growth recommendations"],
    },
    {
      title: "Payroll Services",
      price: "[Price]",
      description: "Complete payroll management for your employees",
      features: ["Monthly processing", "Tax calculations", "Compliance reporting"],
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Pricing for Additional Services
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Transparent pricing for all our additional accounting and consulting services. All prices shown are net.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                <div className="text-3xl font-bold text-primary mb-4">{service.price}</div>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="p-8 bg-muted/30">
              <h2 className="text-2xl font-bold text-foreground mb-4">Important Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>[Add explanation about pricing structure, payment terms, and any conditions]</p>
                <p>[Include information about package deals or discounts for long-term contracts]</p>
                <p>[Mention any additional fees or charges that may apply]</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <FaqSection />
      <ContactFormSection />
      <Footer />
    </main>
  )
}
