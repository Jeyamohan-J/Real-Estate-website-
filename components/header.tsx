import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-serif font-bold text-foreground">
              VISTA<span className="text-primary">®</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/properties" className="text-sm text-foreground hover:text-primary transition-colors">
              Properties
            </Link>
            <Link href="/#services" className="text-sm text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/#about" className="text-sm text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
