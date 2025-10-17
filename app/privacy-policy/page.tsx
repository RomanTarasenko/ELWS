import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none">
            <div className="bg-muted/30 border border-border rounded-lg p-8 mb-6">
              <p className="text-muted-foreground italic">[Privacy Policy content will be added here]</p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground">[Add introduction content here]</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Data Collection</h2>
              <p className="text-muted-foreground">[Add data collection information here]</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Data Usage</h2>
              <p className="text-muted-foreground">[Add data usage information here]</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Protection</h2>
              <p className="text-muted-foreground">[Add data protection information here]</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground">[Add user rights information here]</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Contact Information</h2>
              <p className="text-muted-foreground">[Add contact information here]</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
