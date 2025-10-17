"use client"

import { Button } from "@/components/ui/button"
import { Menu, Phone, ChevronDown } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ConsultationModal } from "./consultation-modal"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState("pl")
  const [consultationModalOpen, setConsultationModalOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)

  const services = [
    { label: "Accounting services", href: "/services/accounting" },
    { label: "Registration of legal entities and sole proprietors", href: "/services/registration" },
    { label: "Consultations", href: "/services/consultations" },
    { label: "Other types of services", href: "/services/other" },
  ]

  const languages = [
    { code: "en", label: "English" },
    { code: "ru", label: "Русский" },
    { code: "pl", label: "Polski" },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center gap-2">
              <div className="text-xl lg:text-2xl font-bold text-primary">Easy Ledger</div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Services Dropdown */}
              <div onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <DropdownMenu open={servicesOpen} onOpenChange={setServicesOpen}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                    Services
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-80">
                    {services.map((service) => (
                      <DropdownMenuItem key={service.href} asChild>
                        <Link href={service.href} className="cursor-pointer">
                          {service.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                About us
              </Link>
              <Link href="/prices" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Prices
              </Link>
              <Link
                href="/contacts"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Contacts
              </Link>

              {/* Language Switcher */}
              <div onMouseEnter={() => setLanguageOpen(true)} onMouseLeave={() => setLanguageOpen(false)}>
                <DropdownMenu open={languageOpen} onOpenChange={setLanguageOpen}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                    {languages.find((lang) => lang.code === language)?.label}
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {languages.map((lang) => (
                      <DropdownMenuItem key={lang.code} onClick={() => setLanguage(lang.code)}>
                        {lang.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <Button
                onClick={() => setConsultationModalOpen(true)}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Phone className="h-4 w-4 mr-2" />
                Get a consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                {/* Services in Mobile */}
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-foreground">Services</span>
                  <div className="flex flex-col gap-2 pl-4">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/about"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About us
                </Link>
                <Link
                  href="/prices"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Prices
                </Link>
                <Link
                  href="/contacts"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contacts
                </Link>

                {/* Language Switcher Mobile */}
                <div className="flex gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`text-sm px-3 py-1 rounded ${
                        language === lang.code ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {lang.code.toUpperCase()}
                    </button>
                  ))}
                </div>

                <Button
                  onClick={() => {
                    setConsultationModalOpen(true)
                    setMobileMenuOpen(false)
                  }}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Get a consultation
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <ConsultationModal open={consultationModalOpen} onOpenChange={setConsultationModalOpen} />
    </>
  )
}
