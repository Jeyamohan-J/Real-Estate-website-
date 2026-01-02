import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PropertyCard } from "@/components/property-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { mockProperties } from "@/lib/properties"
import { Building2, Home, TrendingUp, Users } from "lucide-react"

export default function HomePage() {
  const featuredProperties = mockProperties.slice(0, 3)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 py-24 md:py-32">
            <div className="max-w-3xl">
              <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-balance">
                Discover Your Perfect Property
              </h1>
              <p className="text-lg md:text-xl mb-8 leading-relaxed text-primary-foreground/90">
                Expert real estate management and curated property listings for discerning clients. Experience
                excellence in every transaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Link href="/properties">Browse Properties</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-border"></div>
        </section>

        {/* Featured Properties */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                  Featured Properties
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  Handpicked selection of exceptional properties that exemplify quality and value.
                </p>
              </div>
              <Button asChild variant="outline" className="hidden md:inline-flex bg-transparent">
                <Link href="/properties">View All</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
            <div className="mt-8 text-center md:hidden">
              <Button asChild variant="outline">
                <Link href="/properties">View All Properties</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Comprehensive real estate solutions tailored to your needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/services/property-sales" className="block transition-transform hover:scale-105">
                <Card className="bg-card h-full">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl text-foreground mb-2">Property Sales</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Expert guidance through every step of buying or selling your property.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/rental-management" className="block transition-transform hover:scale-105">
                <Card className="bg-card h-full">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Home className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl text-foreground mb-2">Rental Management</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Professional property management services for landlords and tenants.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/investment-advisory" className="block transition-transform hover:scale-105">
                <Card className="bg-card h-full">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl text-foreground mb-2">Investment Advisory</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Strategic insights to maximize your real estate investment returns.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/consultation" className="block transition-transform hover:scale-105">
                <Card className="bg-card h-full">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl text-foreground mb-2">Consultation</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Personalized advice from experienced real estate professionals.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/real-estate-team-professional.jpg"
                  alt="Professional real estate team in modern office"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                  Experience Excellence in Real Estate
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  With over a decade of experience in property management, we bring unparalleled expertise and
                  dedication to every client relationship. Our team of seasoned professionals understands the nuances of
                  the market and works tirelessly to achieve your real estate goals.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Whether you&apos;re buying your first home, expanding your investment portfolio, or seeking
                  comprehensive property management, we provide personalized service that exceeds expectations.
                </p>
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/contact">Get Started</Link>
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
