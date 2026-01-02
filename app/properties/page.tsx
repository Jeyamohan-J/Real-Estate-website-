"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PropertyCard } from "@/components/property-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { mockProperties } from "@/lib/properties"
import { Search, SlidersHorizontal } from "lucide-react"

export default function PropertiesPage() {
  const [filteredProperties, setFilteredProperties] = useState(mockProperties)
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    type: "all",
    category: "all",
    minBedrooms: "0",
  })

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)

    let filtered = mockProperties

    if (newFilters.type !== "all") {
      filtered = filtered.filter((p) => p.type === newFilters.type)
    }

    if (newFilters.category !== "all") {
      filtered = filtered.filter((p) => p.category === newFilters.category)
    }

    if (newFilters.minBedrooms !== "0") {
      filtered = filtered.filter((p) => p.bedrooms >= Number.parseInt(newFilters.minBedrooms))
    }

    setFilteredProperties(filtered)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-accent border-b border-border">
          <div className="container mx-auto px-4 py-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Property Listings
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Browse our curated collection of exceptional properties.
            </p>
          </div>
        </section>

        {/* Search and Filter Bar */}
        <section className="bg-background border-b border-border">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input type="text" placeholder="Search by location, property type..." className="pl-10 bg-card" />
              </div>
              <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </Button>
            </div>

            {/* Filters Panel */}
            {showFilters && (
              <Card className="mt-4 bg-card">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="type">Property Type</Label>
                      <Select value={filters.type} onValueChange={(value) => handleFilterChange("type", value)}>
                        <SelectTrigger id="type" className="bg-background">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Types</SelectItem>
                          <SelectItem value="sale">For Sale</SelectItem>
                          <SelectItem value="rent">For Rent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select value={filters.category} onValueChange={(value) => handleFilterChange("category", value)}>
                        <SelectTrigger id="category" className="bg-background">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Categories</SelectItem>
                          <SelectItem value="residential">Residential</SelectItem>
                          <SelectItem value="commercial">Commercial</SelectItem>
                          <SelectItem value="luxury">Luxury</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bedrooms">Min Bedrooms</Label>
                      <Select
                        value={filters.minBedrooms}
                        onValueChange={(value) => handleFilterChange("minBedrooms", value)}
                      >
                        <SelectTrigger id="bedrooms" className="bg-background">
                          <SelectValue placeholder="Select bedrooms" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">Any</SelectItem>
                          <SelectItem value="1">1+</SelectItem>
                          <SelectItem value="2">2+</SelectItem>
                          <SelectItem value="3">3+</SelectItem>
                          <SelectItem value="4">4+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Properties Grid */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <p className="text-muted-foreground">
                Showing {filteredProperties.length} {filteredProperties.length === 1 ? "property" : "properties"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
            {filteredProperties.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No properties found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
