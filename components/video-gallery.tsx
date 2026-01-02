"use client"

import { Card } from "@/components/ui/card"
import { Play, Clock, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useState } from "react"
import { api } from "@/lib/api"
import { formatDistanceToNow } from "date-fns"

export function VideoGallery() {
  const [videos, setVideos] = useState<Record<string, any[]>>({
    music: [],
    interviews: [],
    lifestyle: []
  })

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await api.content.getAll({ type: 'video', limit: 50 })
        if (Array.isArray(data)) {
          const categorized: Record<string, any[]> = {
            music: [],
            interviews: [],
            lifestyle: []
          }
          data.forEach((video: any) => {
            const cat = video.category_name ? video.category_name.toLowerCase() : 'other'
            if (categorized[cat]) {
              categorized[cat].push(video)
            }
          })
          setVideos(categorized)
        }
      } catch (error) {
        console.error("Failed to fetch videos", error)
      }
    }
    fetchVideos()
  }, [])

  const VideoCard = ({ video }: { video: any }) => {
    const meta = video.meta_data || {}
    return (
      <Card className="group overflow-hidden border-0 bg-card transition-transform hover:scale-[1.02]">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={video.image_url || "/placeholder.svg"}
            alt={video.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg backdrop-blur-sm">
              <Play className="h-6 w-6 fill-current" />
            </div>
          </div>

          {/* Duration badge */}
          <div className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-xs font-medium text-white">
            {meta.duration || '00:00'}
          </div>
        </div>
        <div className="p-4">
          <h3 className="line-clamp-2 text-base font-bold leading-tight group-hover:text-primary">{video.title}</h3>
          <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              {meta.views || '0'} views
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {video.created_at ? formatDistanceToNow(new Date(video.created_at), { addSuffix: true }) : ''}
            </div>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <section className="bg-muted/50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Video Gallery</h2>
            <p className="mt-2 text-muted-foreground">Watch exclusive interviews, performances, and more</p>
          </div>
          <Button variant="outline">View All Videos</Button>
        </div>

        <Tabs defaultValue="music" className="w-full">
          <TabsList className="mb-8 w-full justify-start overflow-x-auto bg-transparent p-0">
            <TabsTrigger
              value="music"
              className="rounded-full border border-transparent px-6 data-[state=active]:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
            >
              Music
            </TabsTrigger>
            <TabsTrigger
              value="interviews"
              className="rounded-full border border-transparent px-6 data-[state=active]:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
            >
              Interviews
            </TabsTrigger>
            <TabsTrigger
              value="lifestyle"
              className="rounded-full border border-transparent px-6 data-[state=active]:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
            >
              Lifestyle
            </TabsTrigger>
          </TabsList>
          
          {Object.entries(videos).map(([category, items]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.length > 0 ? (
                  items.map((video) => (
                    <VideoCard key={video.id} video={video} />
                  ))
                ) : (
                  <div className="col-span-full py-12 text-center text-muted-foreground">
                    No videos in this category yet.
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
