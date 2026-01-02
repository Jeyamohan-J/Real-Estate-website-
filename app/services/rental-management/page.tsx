import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, CheckCircle2 } from "lucide-react"

export default function RentalManagementPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 py-20 md:py-28">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex h-16 w-16 rounded-lg bg-primary-foreground/10 items-center justify-center mb-6">
                <Home className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">Rental Management</h1>
              <p className="text-lg md:text-xl leading-relaxed text-primary-foreground/90 max-w-2xl mx-auto">
                Professional property management services for landlords and tenants with comprehensive support and peace
                of mind.
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
                  src="/rental-property-management.jpg"
                  alt="Rental management services"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                  Stress-Free Property Management
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Managing rental properties requires time, expertise, and dedication. Our comprehensive property
                  management services take the burden off your shoulders, handling everything from tenant screening to
                  maintenance coordination.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We maximize your rental income while minimizing vacancies and protecting your investment with
                  proactive management and responsive tenant services.
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
                Comprehensive Management Services
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-card">
                  <CardContent className="p-6">
                    <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                    <h3 className="font-semibold text-xl text-foreground mb-2">Tenant Screening</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Thorough background checks, credit verification, and reference validation.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardContent className="p-6">
                    <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                    <h3 className="font-semibold text-xl text-foreground mb-2">Rent Collection</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Automated rent collection and late payment management systems.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardContent className="p-6">
                    <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                    <h3 className="font-semibold text-xl text-foreground mb-2">Maintenance Coordination</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      24/7 maintenance requests and vetted contractor network for repairs.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardContent className="p-6">
                    <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                    <h3 className="font-semibold text-xl text-foreground mb-2">Property Inspections</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Regular property inspections with detailed reports and documentation.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardContent className="p-6">
                    <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                    <h3 className="font-semibold text-xl text-foreground mb-2">Marketing & Leasing</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Professional listings and showings to minimize vacancy periods.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardContent className="p-6">
                    <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                    <h3 className="font-semibold text-xl text-foreground mb-2">Financial Reporting</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Monthly statements and detailed financial tracking for your portfolio.
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
                Let Us Manage Your Property
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Contact us today to learn more about our rental management services and how we can help you maximize
                your investment returns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/">Back to Home</Link>
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
