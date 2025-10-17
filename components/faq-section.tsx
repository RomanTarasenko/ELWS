"use client"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "How to open a company in Poland?",
      answer:
        "To open a company in Poland, you need to choose the legal form (e.g., LLC, sole proprietorship), prepare required documents, register with the National Court Register (KRS), obtain a tax identification number (NIP), and register for social insurance (ZUS). We handle the entire process for you, ensuring all legal requirements are met efficiently.",
    },
    {
      question: "What is included in company registration?",
      answer:
        "Company registration includes: preparation of all necessary documents, registration with the National Court Register (KRS), obtaining NIP (tax identification number), REGON (statistical number), opening a company bank account assistance, registration with ZUS (social insurance), and providing you with all official company documents and certificates.",
    },
    {
      question: "Are there any restrictions for registering a company as a foreigner?",
      answer:
        "Foreigners from EU/EEA countries can freely establish companies in Poland without restrictions. Non-EU citizens may need additional permits depending on their visa status and the type of business activity. We provide comprehensive guidance on legal requirements specific to your situation and help navigate any necessary permits or documentation.",
    },
    {
      question: "What documents are needed to open a company?",
      answer:
        "Required documents typically include: valid passport or ID, proof of address, company articles of association, declaration of no criminal record (in some cases), and proof of share capital payment. For foreign nationals, additional documents such as visa or residence permit may be required. We provide a complete checklist tailored to your specific situation.",
    },
  ]

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-form")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 text-center text-balance">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-muted-foreground mb-12 text-center leading-relaxed">
          Find answers to the most common questions about company registration in Poland
        </p>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="flex justify-center mt-12">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Ask your question
          </Button>
        </div>
      </div>
    </section>
  )
}
