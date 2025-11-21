"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Search, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const trendingSearches = [
    "Eli Njuchi new album",
    "Malawi Music Awards 2025",
    "Tay Grin world tour",
    "African fashion trends",
    "Lake Malawi Festival",
  ]

  const recentArticles = [
    {
      title: "The Rise of Malawian Afrobeats",
      category: "Music",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Exclusive: Inside the Studio with Gwamba",
      category: "Music",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Fashion Forward: Chitenje Meets Streetwear",
      category: "Lifestyle",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0">
        <div className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search articles, videos, artists..." className="h-12 pl-10 text-base" autoFocus />
          </div>

          <div className="mt-8">
            <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">
              <TrendingUp className="h-4 w-4" />
              Trending Searches
            </div>
            <div className="flex flex-wrap gap-2">
              {trendingSearches.map((search, i) => (
                <button
                  key={i}
                  className="rounded-full border border-border bg-secondary px-4 py-2 text-sm transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">Recent Articles</div>
            <div className="space-y-3">
              {recentArticles.map((article, i) => (
                <Card
                  key={i}
                  className="flex cursor-pointer items-center gap-4 border-0 bg-secondary/50 p-3 transition-colors hover:bg-secondary"
                >
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="h-16 w-16 rounded object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary">{article.category}</p>
                    <h4 className="mt-1 text-sm font-bold leading-tight">{article.title}</h4>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
