export interface Property {
  id: string
  title: string
  description: string
  price: number
  location: string
  bedrooms: number
  bathrooms: number
  sqft: number
  type: "sale" | "rent"
  category: "residential" | "commercial" | "luxury"
  image: string
  images: string[]
  features: string[]
  yearBuilt?: number
  parking?: number
}

export const mockProperties: Property[] = [
  {
    id: "1",
    title: "Modern Downtown Loft",
    description:
      "A stunning contemporary loft in the heart of downtown, featuring floor-to-ceiling windows, exposed brick, and high-end finishes throughout. This architectural masterpiece offers unparalleled city views and sophisticated urban living.",
    price: 1850000,
    location: "Downtown Manhattan, NY",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1850,
    type: "sale",
    category: "luxury",
    image: "/modern-downtown-loft.png",
    images: [
      "/modern-downtown-loft.png",
      "/modern-loft-living-room.png",
      "/modern-loft-kitchen.png",
      "/modern-loft-bedroom.png",
    ],
    features: ["Floor-to-ceiling windows", "Exposed brick", "Smart home system", "Rooftop access", "Concierge service"],
    yearBuilt: 2020,
    parking: 2,
  },
  {
    id: "2",
    title: "Victorian Heritage Home",
    description:
      "Beautifully restored Victorian home with original architectural details, modern amenities, and a charming garden. This property perfectly blends historic character with contemporary comfort.",
    price: 5200,
    location: "Brooklyn Heights, NY",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    type: "rent",
    category: "residential",
    image: "/victorian-heritage-home-exterior.jpg",
    images: [
      "/victorian-heritage-home-exterior.jpg",
      "/victorian-home-interior.jpg",
      "/victorian-home-kitchen.jpg",
      "/victorian-home-garden.jpg",
    ],
    features: ["Original moldings", "Hardwood floors", "Private garden", "Updated kitchen", "Wine cellar"],
    yearBuilt: 1895,
    parking: 1,
  },
  {
    id: "3",
    title: "Waterfront Penthouse",
    description:
      "Spectacular penthouse with panoramic water views, private terrace, and luxurious finishes. Experience elevated living with resort-style amenities and breathtaking sunsets.",
    price: 4200000,
    location: "Battery Park City, NY",
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 2800,
    type: "sale",
    category: "luxury",
    image: "/waterfront-penthouse-terrace-view.jpg",
    images: [
      "/waterfront-penthouse-terrace-view.jpg",
      "/penthouse-living-room.jpg",
      "/luxurious-penthouse-kitchen.png",
      "/luxurious-penthouse-bedroom.png",
    ],
    features: ["Private terrace", "Panoramic views", "Wine storage", "Spa bathroom", "Smart home"],
    yearBuilt: 2019,
    parking: 2,
  },
  {
    id: "4",
    title: "Contemporary Family Home",
    description:
      "Spacious contemporary home perfect for families, featuring an open floor plan, gourmet kitchen, and beautifully landscaped backyard. Located in a highly-rated school district.",
    price: 7800,
    location: "Westchester County, NY",
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4200,
    type: "rent",
    category: "residential",
    image: "/contemporary-family-home-exterior.jpg",
    images: [
      "/contemporary-family-home-exterior.jpg",
      "/contemporary-home-interior.jpg",
      "/contemporary-home-kitchen.jpg",
      "/contemporary-home-backyard.jpg",
    ],
    features: ["Open floor plan", "Gourmet kitchen", "Landscaped yard", "Home office", "Finished basement"],
    yearBuilt: 2018,
    parking: 3,
  },
  {
    id: "5",
    title: "Historic Brownstone",
    description:
      "Meticulously maintained brownstone with original details, modern updates, and private outdoor space. A rare opportunity to own a piece of New York history.",
    price: 3200000,
    location: "Park Slope, Brooklyn",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3500,
    type: "sale",
    category: "residential",
    image: "/historic-brownstone-exterior.jpg",
    images: [
      "/historic-brownstone-exterior.jpg",
      "/brownstone-interior.jpg",
      "/brownstone-kitchen.jpg",
      "/brownstone-garden.jpg",
    ],
    features: ["Original details", "Private garden", "Updated systems", "Fireplace", "High ceilings"],
    yearBuilt: 1910,
    parking: 0,
  },
  {
    id: "6",
    title: "Commercial Office Space",
    description:
      "Prime commercial office space in a prestigious building. Featuring modern infrastructure, flexible layouts, and excellent transportation access. Ideal for growing businesses.",
    price: 15000,
    location: "Midtown Manhattan, NY",
    bedrooms: 0,
    bathrooms: 2,
    sqft: 5000,
    type: "rent",
    category: "commercial",
    image: "/modern-commercial-office-space.jpg",
    images: [
      "/modern-commercial-office-space.jpg",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    features: ["High-speed internet", "Conference rooms", "Kitchenette", "24/7 access", "Building security"],
    yearBuilt: 2015,
    parking: 10,
  },
]

export function getPropertyById(id: string): Property | undefined {
  return mockProperties.find((p) => p.id === id)
}

export function filterProperties(filters: {
  type?: "sale" | "rent"
  category?: "residential" | "commercial" | "luxury"
  minPrice?: number
  maxPrice?: number
  minBedrooms?: number
}): Property[] {
  return mockProperties.filter((property) => {
    if (filters.type && property.type !== filters.type) return false
    if (filters.category && property.category !== filters.category) return false
    if (filters.minPrice && property.price < filters.minPrice) return false
    if (filters.maxPrice && property.price > filters.maxPrice) return false
    if (filters.minBedrooms && property.bedrooms < filters.minBedrooms) return false
    return true
  })
}
