import { Card } from "@/components/ui/card"
import { Layers, Clock, Eye, Award, Shield, Target } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: Layers,
      title: "Wide service scope",
      description: "Complete accounting and consulting solutions under one roof",
    },
    {
      icon: Clock,
      title: "Time-saving",
      description: "Focus on your business while we handle the paperwork",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Clear communication and full visibility of all processes",
    },
    {
      icon: Award,
      title: "Professional experience",
      description: "Years of expertise in Polish accounting regulations",
    },
    {
      icon: Shield,
      title: "Legal compliance",
      description: "Stay compliant with all Polish tax and legal requirements",
    },
    {
      icon: Target,
      title: "Accuracy",
      description: "Precise financial reporting and error-free documentation",
    },
  ]

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 text-balance">Why Choose Easy Ledger</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We deliver exceptional value through our commitment to quality and client satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 bg-card hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-base lg:text-lg text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
