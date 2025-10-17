import { Navigation } from "@/components/navigation"
import { FaqSection } from "@/components/faq-section"
import { ContactFormSection } from "@/components/contact-form-section"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactsPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+48 XXX XXX XXX", "+48 XXX XXX XXX"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@easyledger.pl", "support@easyledger.pl"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["[Your Street Address]", "[City, Postal Code]", "Poland"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Friday: 9:00 - 18:00", "Saturday: 10:00 - 14:00", "Sunday: Closed"],
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">Get in Touch</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're here to help with all your accounting and business needs in Poland. Reach out to us through any of
              the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                      <div className="space-y-1">
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <FaqSection />
      <ContactFormSection />
      <Footer />
    </main>
  )
}
