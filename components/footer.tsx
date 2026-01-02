import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-serif font-bold text-foreground mb-4">
              VISTA<span className="text-primary">®</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Dedicated to excellence in property management and client service since 2010.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/properties" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Browse Properties
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Property Sales</li>
              <li className="text-sm text-muted-foreground">Rentals</li>
              <li className="text-sm text-muted-foreground">Property Management</li>
              <li className="text-sm text-muted-foreground">Investment Advisory</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">hello@estate.com</li>
              <li className="text-sm text-muted-foreground">+1 (555) 123-4567</li>
              <li className="text-sm text-muted-foreground">123 Main Street</li>
              <li className="text-sm text-muted-foreground">New York, NY 10001</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Vista Property Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
