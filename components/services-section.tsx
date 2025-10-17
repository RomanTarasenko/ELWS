import { Card } from "@/components/ui/card"
import { Calculator, Building2, MessageSquare, Briefcase } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  const services = [
    {
      icon: Calculator,
      title: "Accounting services",
      description: "Full-service bookkeeping and financial reporting for your business",
      href: "/services/accounting",
    },
    {
      icon: Building2,
      title: "Registration of legal entities and sole proprietors",
      description: "Fast and efficient company setup and registration services",
      href: "/services/registration",
    },
    {
      icon: MessageSquare,
      title: "Consultations",
      description: "Expert business and tax consulting services",
      href: "/services/consultations",
    },
    {
      icon: Briefcase,
      title: "Other types of services",
      description: "Additional specialized services tailored to your needs",
      href: "/services/other",
    },
  ]

  return (
    <section id="services" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 text-balance">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive accounting and consulting solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Link key={index} href={service.href}>
              <Card className="p-6 lg:p-8 bg-card hover:shadow-lg hover:border-primary/50 transition-all group cursor-pointer h-full">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 lg:w-7 lg:h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg lg:text-xl text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
