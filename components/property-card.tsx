import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bed, Bath, Square } from "lucide-react"
import type { Property } from "@/lib/properties"

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/properties/${property.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-card">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={property.image || "/placeholder.svg"}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-secondary text-secondary-foreground">
              {property.type === "sale" ? "For Sale" : "For Rent"}
            </Badge>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-serif font-bold text-xl text-foreground text-balance">{property.title}</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">{property.location}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            {property.bedrooms > 0 && (
              <div className="flex items-center gap-1">
                <Bed className="h-4 w-4" />
                <span>{property.bedrooms} bd</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4" />
              <span>{property.bathrooms} ba</span>
            </div>
            <div className="flex items-center gap-1">
              <Square className="h-4 w-4" />
              <span>{property.sqft.toLocaleString()} sqft</span>
            </div>
          </div>
          <div className="text-2xl font-bold text-primary">
            ${property.price.toLocaleString()}
            {property.type === "rent" && <span className="text-base text-muted-foreground">/mo</span>}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
