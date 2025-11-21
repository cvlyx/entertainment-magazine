"use client"

import Link from "next/link"
import { Menu, Search, User, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { SearchModal } from "@/components/search-modal"
import { MobileMenu } from "@/components/mobile-menu"
import { useSession, signOut } from "next-auth/react"

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { data: session, status } = useSession()

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="text-2xl font-bold tracking-tighter">
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">PULSE</span>
              </div>
            </Link>
            <nav className="hidden items-center gap-6 lg:flex">
              <Link
                href="/"
                className="text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="/music"
                className="text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary"
              >
                Music
              </Link>
              <Link
                href="/film"
                className="text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary"
              >
                Film
              </Link>
              <Link
                href="/lifestyle"
                className="text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary"
              >
                Lifestyle
              </Link>
              <Link
                href="/interviews"
                className="text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary"
              >
                Interviews
              </Link>
              <Link
                href="/videos"
                className="text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary"
              >
                Videos
              </Link>
              <Link
                href="/reels"
                className="text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary"
              >
                Reels
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
            </Button>
            
            {status === 'loading' ? (
              <div className="h-8 w-8 animate-pulse rounded-full bg-gray-200" />
            ) : session ? (
              <>
                <Link href="/dashboard">
                  <Button variant="ghost" size="sm" className="hidden md:flex gap-2">
                    <User className="h-4 w-4" />
                    Dashboard
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="hidden md:flex"
                  onClick={() => signOut({ callbackUrl: '/' })}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link href="/signin">
                  <Button variant="ghost" size="sm" className="hidden md:flex gap-2">
                    <LogIn className="h-4 w-4" />
                    Sign In
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="sm" className="hidden md:flex">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
            
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}
