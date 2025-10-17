import { Card } from "@/components/ui/card"
import { Calendar, Users, UserCheck } from "lucide-react"

export function InfoCards() {
  const cards = [
    {
      icon: Calendar,
      title: "Since 2017 in accounting",
      description: "Years of proven expertise",
    },
    {
      icon: Users,
      title: "200+ clients",
      description: "Trusted by businesses",
    },
    {
      icon: UserCheck,
      title: "Personal accountant for every client",
      description: "Dedicated support",
    },
  ]

  return (
    <section className="py-12 lg:py-16 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <Card key={index} className="p-6 lg:p-8 bg-card hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <card.icon className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg lg:text-xl text-foreground mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
