import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, CheckCircle2 } from "lucide-react"

export default function ConsultationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 py-20 md:py-28">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex h-16 w-16 rounded-lg bg-primary-foreground/10 items-center justify-center mb-6">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">Consultation</h1>
              <p className="text-lg md:text-xl leading-relaxed text-primary-foreground/90 max-w-2xl mx-auto">
                Personalized advice from experienced real estate professionals to guide your property decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image src="/real-estate-consultation.png" alt="Consultation services" fill className="object-cover" />
              </div>
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                  Expert Guidance for Your Real Estate Journey
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Whether you&apos;re a first-time buyer, seasoned investor, or considering selling your property, our
                  consultation services provide the expert guidance you need to make informed decisions.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our experienced professionals take the time to understand your unique situation, goals, and concerns,
                  delivering personalized recommendations tailored to your needs.
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
                What to Expect
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-card">
                  <CardContent className="p-6">
                    <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                    <h3 className="font-semibold text-xl text-foreground mb-2">Personal Assessment</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Detailed evaluation of your real estate needs, goals, and timeline.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardContent className="p-6">
                    <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                    <h3 className="font-semibold text-xl text-foreground mb-2">Market Insights</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Current market conditions, trends, and opportunities in your area of interest.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardContent className="p-6">
                    <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                    <h3 className="font-semibold text-xl text-foreground mb-2">Financial Planning</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Budget analysis, financing options, and investment return projections.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardContent className="p-6">
                    <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                    <h3 className="font-semibold text-xl text-foreground mb-2">Strategy Development</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Customized action plan with clear steps to achieve your real estate goals.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardContent className="p-6">
                    <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                    <h3 className="font-semibold text-xl text-foreground mb-2">Property Recommendations</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Curated property suggestions based on your criteria and preferences.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardContent className="p-6">
                    <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                    <h3 className="font-semibold text-xl text-foreground mb-2">Ongoing Support</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Continued guidance and support throughout your real estate journey.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                Our Consultation Process
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-foreground mb-2">Initial Contact</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Reach out to schedule your consultation at a time that works for you.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-foreground mb-2">Discovery Meeting</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We discuss your goals, timeline, and any questions or concerns you may have.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-foreground mb-2">Analysis & Recommendations</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our team analyzes your situation and prepares personalized recommendations.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-foreground mb-2">Action Plan</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Together, we create a clear action plan with next steps and ongoing support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Schedule Your Consultation
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Take the first step towards achieving your real estate goals. Book a consultation with our expert team
                today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/contact">Book Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/">Learn More</Link>
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
