"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, VolumeX, Maximize, ThumbsUp, Share2, Eye } from "lucide-react"
import { useState } from "react"

export function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Video Player */}
          <Card className="overflow-hidden border-0 bg-card">
            <div className="relative aspect-video bg-black">
              <img src="/african-music-video-production-cinematic.jpg" alt="Video thumbnail" className="h-full w-full object-cover" />

              {/* Play/Pause overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/90 backdrop-blur-sm transition-transform hover:scale-110"
                >
                  {isPlaying ? (
                    <Pause className="h-10 w-10 fill-current" />
                  ) : (
                    <Play className="h-10 w-10 fill-current" />
                  )}
                </button>
              </div>

              {/* Video controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="mb-2 h-1 w-full rounded-full bg-white/30">
                  <div className="h-full w-1/3 rounded-full bg-primary" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="text-white transition-transform hover:scale-110"
                    >
                      {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="text-white transition-transform hover:scale-110"
                    >
                      {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                    </button>
                    <span className="text-sm text-white">1:23 / 3:45</span>
                  </div>
                  <button className="text-white transition-transform hover:scale-110">
                    <Maximize className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Video info */}
            <div className="p-6">
              <h1 className="text-2xl font-bold leading-tight md:text-3xl">
                Eli Njuchi - "Illuminati" (Official Music Video)
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  1.2M views
                </span>
                <span>•</span>
                <span>2 days ago</span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button variant="outline" className="gap-2 bg-transparent">
                  <ThumbsUp className="h-4 w-4" />
                  Like (8.2K)
                </Button>
                <Button variant="outline" className="gap-2 bg-transparent">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>

              <div className="mt-6 border-t border-border pt-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-muted">
                    <img src="/african-musician-portrait.png" alt="Artist" className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold">Eli Njuchi</h3>
                    <p className="mt-1 text-sm text-muted-foreground">245K subscribers</p>
                    <p className="mt-3 text-sm leading-relaxed">
                      Official music video for "Illuminati" from the upcoming album "New Dawn". Directed by Malawi's
                      finest cinematographers, this video showcases the vibrant culture and energy of our music scene.
                    </p>
                  </div>
                  <Button>Subscribe</Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Related videos */}
          <div className="mt-8">
            <h2 className="mb-6 text-2xl font-bold">Up Next</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card
                  key={i}
                  className="group overflow-hidden border-0 bg-card transition-transform hover:scale-[1.02]"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={`/african-music-video-.jpg?height=200&width=350&query=african music video ${i}`}
                      alt="Related video"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/90 backdrop-blur-sm">
                        <Play className="h-6 w-6 fill-current" />
                      </div>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-bold leading-tight line-clamp-2">Related Music Video Title {i}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">856K views • 1 week ago</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
