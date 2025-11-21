import Link from "next/link"
import { Instagram, Twitter, Facebook, Youtube, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="border-b border-border bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary p-3">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold md:text-3xl">Stay in the Loop</h3>
            <p className="mt-2 text-muted-foreground">
              Get the latest entertainment news delivered straight to your inbox
            </p>
            <div className="mt-6 flex gap-2">
              <Input type="email" placeholder="Enter your email" className="h-12 flex-1" />
              <Button size="lg" className="px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-4 text-2xl font-bold">
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">PULSE</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                Your source for African and Malawian entertainment news, music, film, and lifestyle.
              </p>
              <div className="mt-6 flex gap-2">
                <Button variant="outline" size="icon" className="h-9 w-9 bg-transparent">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-9 w-9 bg-transparent">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-9 w-9 bg-transparent">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-9 w-9 bg-transparent">
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div>
              <h3 className="mb-4 font-bold uppercase tracking-wider">Sections</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#news" className="text-muted-foreground transition-colors hover:text-primary">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="#music" className="text-muted-foreground transition-colors hover:text-primary">
                    Music
                  </Link>
                </li>
                <li>
                  <Link href="#film" className="text-muted-foreground transition-colors hover:text-primary">
                    Film
                  </Link>
                </li>
                <li>
                  <Link href="#lifestyle" className="text-muted-foreground transition-colors hover:text-primary">
                    Lifestyle
                  </Link>
                </li>
                <li>
                  <Link href="#videos" className="text-muted-foreground transition-colors hover:text-primary">
                    Videos
                  </Link>
                </li>
                <li>
                  <Link href="#reels" className="text-muted-foreground transition-colors hover:text-primary">
                    Reels
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold uppercase tracking-wider">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                    Advertise
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold uppercase tracking-wider">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                    Submit News
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                    Press Kit
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                    Community Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row">
            <p>© 2025 PULSE Magazine. All rights reserved.</p>
            <p>Made with ❤️ in Malawi</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
