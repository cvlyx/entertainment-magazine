"use client"

import { Card } from "@/components/ui/card"
import { Play, Heart, MessageCircle, Share2, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function ReelsSection() {
  const [mutedStates, setMutedStates] = useState<Record<number, boolean>>({})

  const reels = [
    {
      id: 1,
      title: "Behind the Scenes: Eli Njuchi Studio Session",
      artist: "Eli Njuchi",
      thumbnail: "/african-artist-recording-in-studio-vertical.jpg",
      views: "125K",
      likes: "8.2K",
    },
    {
      id: 2,
      title: "Dance Challenge: Malawi Edition",
      artist: "The Dare Devils",
      thumbnail: "/african-dancers-performing-vertical.jpg",
      views: "89K",
      likes: "5.1K",
    },
    {
      id: 3,
      title: "Street Style: Lilongwe Fashion Week",
      artist: "Fashion Pulse",
      thumbnail: "/african-fashion-model-street-style-vertical.jpg",
      views: "156K",
      likes: "12.3K",
    },
    {
      id: 4,
      title: "New Music Preview: Upcoming Album",
      artist: "Tay Grin",
      thumbnail: "/african-musician-with-microphone-vertical.jpg",
      views: "203K",
      likes: "18.7K",
    },
  ]

  const toggleMute = (id: number) => {
    setMutedStates((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Reels</h2>
            <p className="mt-2 text-muted-foreground">Short-form content from your favorite artists</p>
          </div>
          <Button variant="outline">View All</Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reels.map((reel) => (
            <Card
              key={reel.id}
              className="group relative aspect-[9/16] overflow-hidden border-0 bg-card transition-transform hover:scale-[1.02]"
            >
              <div className="relative h-full w-full">
                <img
                  src={reel.thumbnail || "/placeholder.svg"}
                  alt={reel.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 backdrop-blur-sm">
                    <Play className="h-8 w-8 fill-current" />
                  </div>
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm font-semibold text-white">{reel.artist}</p>
                  <h3 className="mt-1 text-sm font-medium leading-tight text-white text-balance">{reel.title}</h3>
                  <p className="mt-2 text-xs text-white/70">{reel.views} views</p>
                </div>

                {/* Action buttons */}
                <div className="absolute bottom-20 right-4 flex flex-col gap-4">
                  <button className="flex flex-col items-center gap-1 text-white transition-transform hover:scale-110">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm">
                      <Heart className="h-5 w-5" />
                    </div>
                    <span className="text-xs">{reel.likes}</span>
                  </button>
                  <button className="flex flex-col items-center gap-1 text-white transition-transform hover:scale-110">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <span className="text-xs">234</span>
                  </button>
                  <button className="flex flex-col items-center gap-1 text-white transition-transform hover:scale-110">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm">
                      <Share2 className="h-5 w-5" />
                    </div>
                  </button>
                </div>

                {/* Mute button */}
                <button
                  onClick={() => toggleMute(reel.id)}
                  className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-transform hover:scale-110"
                >
                  {mutedStates[reel.id] ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
