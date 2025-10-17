"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact-form" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 text-center text-balance">Contact Us</h2>
        <p className="text-lg text-muted-foreground mb-12 text-center leading-relaxed">
          Have a question? Fill out the form below and we'll get back to you as soon as possible
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg shadow-sm border border-border">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+48 123 456 789"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Your Question *</Label>
            <Textarea
              id="message"
              placeholder="Please describe your question or inquiry..."
              required
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-background resize-none"
            />
          </div>

          <div className="flex items-start gap-3">
            <Checkbox
              id="consent"
              required
              checked={formData.consent}
              onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
              className="mt-1"
            />
            <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
              I agree to the processing of my personal data in accordance with the{" "}
              <a
                href="/privacy-policy"
                target="_blank"
                className="text-primary hover:underline font-medium"
                rel="noreferrer"
              >
                Privacy Policy
              </a>{" "}
              *
            </Label>
          </div>

          <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}
