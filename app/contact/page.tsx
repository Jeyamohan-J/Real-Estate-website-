"use client"

import type React from "react"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { getPropertyById } from "@/lib/properties"

function ContactForm() {
  const searchParams = useSearchParams()
  const propertyId = searchParams.get("property")
  const [property, setProperty] = useState<ReturnType<typeof getPropertyById>>()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (propertyId) {
      const prop = getPropertyById(propertyId)
      setProperty(prop)
      if (prop) {
        setFormData((prev) => ({
          ...prev,
          message: `I'm interested in learning more about ${prop.title} (ID: ${prop.id}).`,
        }))
      }
    }
  }, [propertyId])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-accent border-b border-border">
          <div className="container mx-auto px-4 py-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {property ? `Inquire about ${property.title}` : "We're here to help you find your perfect property."}
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl">Send us a message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="Full Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-background"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="E-mail Address"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-background"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-background"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your requirements..."
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          className="bg-background resize-none"
                        />
                      </div>

                      {submitted && (
                        <div className="p-4 bg-primary/10 border border-primary rounded-lg text-foreground">
                          Thank you for your inquiry! We&apos;ll get back to you within 24 hours.
                        </div>
                      )}

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="bg-card">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <p className="text-muted-foreground">hello@estate.com</p>
                        <p className="text-muted-foreground">info@estate.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                        <p className="text-muted-foreground">+1 (555) 123-4568</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Office</h3>
                        <p className="text-muted-foreground">123 Main Street</p>
                        <p className="text-muted-foreground">New York, NY 10001</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-accent">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">Office Hours</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 flex items-center justify-center">
            <p>Loading...</p>
          </main>
          <Footer />
        </div>
      }
    >
      <ContactForm />
    </Suspense>
  )
}
