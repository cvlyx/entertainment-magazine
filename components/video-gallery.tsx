"use client"

import { Card } from "@/components/ui/card"
import { Play, Clock, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function VideoGallery() {
  const videos = {
    music: [
      {
        id: 1,
        title: 'Eli Njuchi - "Illuminati" (Official Music Video)',
        thumbnail: "/african-music-video-production-colorful.jpg",
        duration: "3:45",
        views: "1.2M",
        date: "2 days ago",
      },
      {
        id: 2,
        title: "Tay Grin ft. Gwamba - New Wave",
        thumbnail: "/african-rappers-music-video-urban.jpg",
        duration: "4:12",
        views: "856K",
        date: "1 week ago",
      },
      {
        id: 3,
        title: "Malawi Music Awards 2025 Highlights",
        thumbnail: "/african-music-awards-stage-performance.jpg",
        duration: "12:30",
        views: "2.1M",
        date: "2 weeks ago",
      },
    ],
    interviews: [
      {
        id: 4,
        title: "In Conversation: The Future of Malawian Cinema",
        thumbnail: "/african-filmmaker-interview-studio.jpg",
        duration: "25:18",
        views: "342K",
        date: "3 days ago",
      },
      {
        id: 5,
        title: "Artist Spotlight: Rising Stars of 2025",
        thumbnail: "/african-musicians-group-interview.jpg",
        duration: "18:45",
        views: "567K",
        date: "5 days ago",
      },
      {
        id: 6,
        title: "Behind the Music: Producer Breakdown",
        thumbnail: "/african-music-producer-in-studio.jpg",
        duration: "15:22",
        views: "423K",
        date: "1 week ago",
      },
    ],
    lifestyle: [
      {
        id: 7,
        title: "Day in the Life: Malawian Fashion Designer",
        thumbnail: "/african-fashion-designer-working.jpg",
        duration: "10:15",
        views: "289K",
        date: "4 days ago",
      },
      {
        id: 8,
        title: "Street Food Tour: Lilongwe Edition",
        thumbnail: "/african-street-food-market-colorful.jpg",
        duration: "8:30",
        views: "512K",
        date: "6 days ago",
      },
      {
        id: 9,
        title: "Fitness with the Stars: Workout Routine",
        thumbnail: "/african-fitness-workout-outdoor.jpg",
        duration: "14:20",
        views: "198K",
        date: "1 week ago",
      },
    ],
  }

  const VideoCard = ({ video }: { video: (typeof videos.music)[0] }) => (
    <Card className="group overflow-hidden border-0 bg-card transition-transform hover:scale-[1.02]">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={video.thumbnail || "/placeholder.svg"}
          alt={video.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 backdrop-blur-sm transition-transform group-hover:scale-110">
            <Play className="h-8 w-8 fill-current" />
          </div>
        </div>

        {/* Duration badge */}
        <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded bg-black/80 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
          <Clock className="h-3 w-3" />
          {video.duration}
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold leading-tight text-balance line-clamp-2">{video.title}</h3>
        <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Eye className="h-3 w-3" />
            {video.views}
          </span>
          <span>•</span>
          <span>{video.date}</span>
        </div>
      </div>
    </Card>
  )

  return (
    <section className="border-y border-border bg-secondary/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Video Gallery</h2>
            <p className="mt-2 text-muted-foreground">
              Watch the latest music videos, interviews, and lifestyle content
            </p>
          </div>
        </div>

        <Tabs defaultValue="music" className="w-full">
          <TabsList className="mb-8 grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="music">Music Videos</TabsTrigger>
            <TabsTrigger value="interviews">Interviews</TabsTrigger>
            <TabsTrigger value="lifestyle">Lifestyle</TabsTrigger>
          </TabsList>

          <TabsContent value="music" className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {videos.music.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
            <div className="flex justify-center">
              <Button variant="outline" size="lg">
                Load More Videos
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="interviews" className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {videos.interviews.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
            <div className="flex justify-center">
              <Button variant="outline" size="lg">
                Load More Videos
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="lifestyle" className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {videos.lifestyle.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
            <div className="flex justify-center">
              <Button variant="outline" size="lg">
                Load More Videos
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
