import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getPropertyById } from "@/lib/properties"
import { Bed, Bath, Square, Calendar, Car, MapPin, ArrowLeft } from "lucide-react"

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }, { id: "6" }]
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const property = getPropertyById(id)

  if (!property) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Back Button */}
        <section className="bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4">
            <Button variant="ghost" asChild className="gap-2">
              <Link href="/properties">
                <ArrowLeft className="h-4 w-4" />
                Back to Properties
              </Link>
            </Button>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="bg-background">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={property.images[0] || "/placeholder.svg"}
                  alt={property.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {property.images.slice(1, 4).map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${property.title} - Image ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
                {property.images.length > 4 && (
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary/20 flex items-center justify-center">
                    <span className="text-lg font-semibold text-foreground">+{property.images.length - 4} more</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Property Details */}
        <section className="bg-background py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-2 text-balance">
                        {property.title}
                      </h1>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{property.location}</span>
                      </div>
                    </div>
                    <Badge className="bg-secondary text-secondary-foreground">
                      {property.type === "sale" ? "For Sale" : "For Rent"}
                    </Badge>
                  </div>
                  <div className="text-4xl font-bold text-primary mb-6">
                    ${property.price.toLocaleString()}
                    {property.type === "rent" && <span className="text-xl text-muted-foreground">/mo</span>}
                  </div>
                </div>

                <Card className="bg-card">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {property.bedrooms > 0 && (
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Bed className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-foreground">{property.bedrooms}</div>
                            <div className="text-sm text-muted-foreground">Bedrooms</div>
                          </div>
                        </div>
                      )}
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Bath className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-foreground">{property.bathrooms}</div>
                          <div className="text-sm text-muted-foreground">Bathrooms</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Square className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-foreground">{property.sqft.toLocaleString()}</div>
                          <div className="text-sm text-muted-foreground">Sq Ft</div>
                        </div>
                      </div>
                      {property.parking && property.parking > 0 && (
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Car className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-foreground">{property.parking}</div>
                            <div className="text-sm text-muted-foreground">Parking</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Description</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{property.description}</p>
                </div>

                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Features & Amenities</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {property.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {property.yearBuilt && (
                  <Card className="bg-accent">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">
                          Year Built: <span className="font-semibold text-foreground">{property.yearBuilt}</span>
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              <div className="lg:col-span-1">
                <Card className="bg-card sticky top-4">
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                        Interested in this property?
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Contact us to schedule a viewing or request more information.
                      </p>
                    </div>
                    <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                      <Link href={`/contact?property=${property.id}`}>Request Information</Link>
                    </Button>
                    <div className="border-t border-border pt-6">
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p className="flex justify-between">
                          <span>Property ID:</span>
                          <span className="font-semibold text-foreground">#{property.id.padStart(6, "0")}</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Category:</span>
                          <span className="font-semibold text-foreground capitalize">{property.category}</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Listing Type:</span>
                          <span className="font-semibold text-foreground capitalize">{property.type}</span>
                        </p>
                      </div>
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
