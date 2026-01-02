import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, CheckCircle2 } from "lucide-react"

export default function PropertySalesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 py-20 md:py-28">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex h-16 w-16 rounded-lg bg-primary-foreground/10 items-center justify-center mb-6">
                <Building2 className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">Property Sales</h1>
              <p className="text-lg md:text-xl leading-relaxed text-primary-foreground/90 max-w-2xl mx-auto">
                Expert guidance through every step of buying or selling your property with dedicated support and market
                insights.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/real-estate-showing.png"
                  alt="Property sales consultation"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                  Your Trusted Partner in Property Transactions
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Whether you&apos;re buying your dream home or selling a valuable asset, our experienced team provides
                  comprehensive support throughout the entire process. We leverage deep market knowledge and strategic
                  negotiation skills to ensure optimal outcomes.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From initial consultation to closing, we handle every detail with professionalism and care, making
                  your property transaction smooth and successful.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Included */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                What We Offer
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-card">
                  <CardContent className="p-6">
                    <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                    <h3 className="font-semibold text-xl text-foreground mb-2">Market Analysis</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Comprehensive market research and pricing strategies to maximize value.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardContent className="p-6">
                    <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                    <h3 className="font-semibold text-xl text-foreground mb-2">Professional Marketing</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      High-quality photography, virtual tours, and targeted advertising campaigns.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardContent className="p-6">
                    <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                    <h3 className="font-semibold text-xl text-foreground mb-2">Expert Negotiation</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Skilled negotiation to secure the best terms and pricing for your transaction.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardContent className="p-6">
                    <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                    <h3 className="font-semibold text-xl text-foreground mb-2">Transaction Management</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Complete handling of paperwork, inspections, and closing coordination.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardContent className="p-6">
                    <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                    <h3 className="font-semibold text-xl text-foreground mb-2">Property Staging</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Professional staging consultation to showcase your property&apos;s potential.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardContent className="p-6">
                    <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                    <h3 className="font-semibold text-xl text-foreground mb-2">Legal Support</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Guidance through legal requirements and documentation processes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Ready to Buy or Sell?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Schedule a consultation with our property sales experts to discuss your goals and explore how we can
                help you achieve them.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/properties">View Properties</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
