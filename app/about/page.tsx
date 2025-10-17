import { Navigation } from "@/components/navigation"
import { FaqSection } from "@/components/faq-section"
import { ContactFormSection } from "@/components/contact-form-section"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">About Easy Ledger</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                [Your company description will go here. Add information about your history, mission, values, and what
                makes Easy Ledger unique in the Polish accounting market.]
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                [Add more details about your team, expertise, and commitment to client success.]
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                [Include any certifications, partnerships, or achievements that demonstrate your credibility and
                expertise.]
              </p>
            </div>
          </div>
        </div>
      </section>

      <FaqSection />
      <ContactFormSection />
      <Footer />
    </main>
  )
}
