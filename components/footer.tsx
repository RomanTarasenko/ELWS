import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 text-xl lg:text-2xl font-bold mb-4">
              <span className="text-background">Easy</span>
              <span className="text-primary">Ledger</span>
            </div>
            <p className="text-sm text-background/80 leading-relaxed">
              Professional accounting and consulting services for businesses in Poland since 2017.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-background">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:contact@easyledger.pl"
                className="flex items-center gap-2 text-sm text-background/80 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                contact@easyledger.pl
              </a>
              <a
                href="tel:+48123456789"
                className="flex items-center gap-2 text-sm text-background/80 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +48 123 456 789
              </a>
              <div className="flex items-start gap-2 text-sm text-background/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Warsaw, Poland</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-background">Quick Links</h3>
            <div className="space-y-2">
              {["Home", "Services", "Courses", "Prices", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-background/80 hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-background">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-background/20 text-center">
          <p className="text-sm text-background/60">© {new Date().getFullYear()} Easy Ledger. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
