import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, CheckCircle2 } from "lucide-react"

export default function InvestmentAdvisoryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 py-20 md:py-28">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex h-16 w-16 rounded-lg bg-primary-foreground/10 items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">Investment Advisory</h1>
              <p className="text-lg md:text-xl leading-relaxed text-primary-foreground/90 max-w-2xl mx-auto">
                Strategic insights to maximize your real estate investment returns with data-driven analysis and market
                expertise.
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
                  src="/investment-analysis-charts.jpg"
                  alt="Investment advisory services"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                  Build Wealth Through Real Estate
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Real estate investment offers powerful wealth-building opportunities when guided by expert analysis
                  and strategic planning. Our investment advisory services help you identify high-potential properties
                  and optimize your portfolio for long-term growth.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We provide comprehensive market analysis, risk assessment, and personalized investment strategies
                  tailored to your financial goals and timeline.
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
                Strategic Investment Services
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-card">
                  <CardContent className="p-6">
                    <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                    <h3 className="font-semibold text-xl text-foreground mb-2">Market Analysis</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      In-depth analysis of market trends, growth areas, and emerging opportunities.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardContent className="p-6">
                    <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                    <h3 className="font-semibold text-xl text-foreground mb-2">Portfolio Strategy</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Customized investment strategies aligned with your financial goals and risk tolerance.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardContent className="p-6">
                    <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                    <h3 className="font-semibold text-xl text-foreground mb-2">ROI Projections</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Detailed financial modeling and return on investment analysis for properties.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardContent className="p-6">
                    <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                    <h3 className="font-semibold text-xl text-foreground mb-2">Risk Assessment</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Comprehensive evaluation of investment risks and mitigation strategies.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardContent className="p-6">
                    <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                    <h3 className="font-semibold text-xl text-foreground mb-2">Tax Planning</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Strategic tax planning to maximize after-tax returns and benefits.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardContent className="p-6">
                    <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                    <h3 className="font-semibold text-xl text-foreground mb-2">Portfolio Monitoring</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Ongoing performance tracking and optimization recommendations.
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
                Start Your Investment Journey
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Schedule a consultation with our investment advisors to explore opportunities and develop a personalized
                investment strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/contact">Book Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/properties">Explore Properties</Link>
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
