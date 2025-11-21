"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import Link from "next/link"
import { X, Instagram, Twitter, Facebook, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Music", href: "/music" },
    { label: "Film", href: "/film" },
    { label: "Lifestyle", href: "/lifestyle" },
    { label: "Interviews", href: "/interviews" },
    { label: "Videos", href: "/videos" },
    { label: "Reels", href: "/reels" },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="h-full max-w-full p-0 sm:max-w-md">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-border p-4">
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">PULSE</span>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          <nav className="flex-1 overflow-y-auto p-6">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block rounded-lg px-4 py-3 text-lg font-medium uppercase tracking-wider transition-colors hover:bg-secondary hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-border pt-8">
              <h3 className="mb-4 px-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">Follow Us</h3>
              <div className="flex gap-2 px-4">
                <Button variant="outline" size="icon">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </DialogContent>
    </Dialog>
  )
}
