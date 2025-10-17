"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

interface ConsultationModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ConsultationModal({ open, onOpenChange }: ConsultationModalProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted")
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Get a consultation</DialogTitle>
          <DialogDescription>
            Fill out the form below and we will contact you shortly to discuss your needs.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input id="name" name="name" placeholder="Your name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" name="email" type="email" placeholder="your@email.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone *</Label>
            <Input id="phone" name="phone" type="tel" placeholder="+48 123 456 789" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="Tell us about your needs..." rows={4} />
          </div>
          <div className="flex items-start gap-2">
            <Checkbox id="consent" required className="mt-1" />
            <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
              I agree to the processing of my personal data in accordance with the{" "}
              <Link href="/privacy-policy" className="text-primary hover:underline whitespace-nowrap">
                Privacy Policy
              </Link>{" "}
              *
            </Label>
          </div>
          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Send request
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
