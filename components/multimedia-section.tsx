"use client"

import { Card } from "@/components/ui/card"
import { Play, Headphones, ImageIcon, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MultimediaSection() {
  const featured = {
    type: "video",
    title: 'Exclusive: Eli Njuchi - "Illuminati" World Premiere',
    description:
      "Watch the highly anticipated music video premiere featuring stunning visuals and powerful storytelling",
    thumbnail: "/placeholder.svg?height=600&width=1200",
    views: "1.2M",
    duration: "3:45",
  }

  const content = [
    {
      type: "video",
      title: "Top 10 Malawian Hits of 2025",
      thumbnail: "/placeholder.svg?height=300&width=400",
      icon: TrendingUp,
      count: "10 videos",
    },
    {
      type: "podcast",
      title: "The Culture Podcast: Rising Stars",
      thumbnail: "/placeholder.svg?height=300&width=400",
      icon: Headphones,
      count: "45 min",
    },
    {
      type: "gallery",
      title: "Lake Malawi Festival 2025",
      thumbnail: "/placeholder.svg?height=300&width=400",
      icon: ImageIcon,
      count: "50 photos",
    },
  ]

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Multimedia</h2>
            <p className="mt-2 text-muted-foreground">Videos, podcasts, and photo galleries</p>
          </div>
          <Button variant="outline">Explore All</Button>
        </div>

        {/* Featured content */}
        <Card className="group mb-8 overflow-hidden border-0 bg-card">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="relative aspect-video overflow-hidden lg:aspect-auto">
              <img
                src={featured.thumbnail || "/placeholder.svg"}
                alt={featured.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:bg-gradient-to-r" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/90 backdrop-blur-sm transition-transform group-hover:scale-110">
                  <Play className="h-10 w-10 fill-current" />
                </div>
              </div>
              <div className="absolute left-4 top-4 rounded-sm bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider">
                Featured
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">{featured.type}</p>
              <h3 className="mt-2 text-3xl font-bold leading-tight text-balance md:text-4xl">{featured.title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">{featured.description}</p>
              <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                <span>{featured.views} views</span>
                <span>•</span>
                <span>{featured.duration}</span>
              </div>
              <div className="mt-6">
                <Button size="lg" className="gap-2">
                  <Play className="h-5 w-5" />
                  Watch Now
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Content grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {content.map((item, i) => {
            const Icon = item.icon
            return (
              <Card
                key={i}
                className="group relative overflow-hidden border-0 bg-card transition-transform hover:scale-[1.02]"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.thumbnail || "/placeholder.svg"}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 backdrop-blur-sm transition-transform group-hover:scale-110">
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-white/80">{item.type}</p>
                    <h3 className="mt-1 font-bold leading-tight text-white text-balance">{item.title}</h3>
                    <p className="mt-2 text-xs text-white/70">{item.count}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
