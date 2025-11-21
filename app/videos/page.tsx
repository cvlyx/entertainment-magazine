import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { VideoGallery } from "@/components/video-gallery"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Eye, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function VideosPage() {
  const featuredVideos = [
    {
      title: "Behind the Scenes: The Last Kingdom",
      thumbnail: "/placeholder.svg?height=600&width=800",
      duration: "15:42",
      views: "245K",
      category: "Film",
      date: "2 days ago",
    },
    {
      title: "Live Performance: Tawonga Beats at Lake of Stars",
      thumbnail: "/placeholder.svg?height=600&width=800",
      duration: "28:15",
      views: "512K",
      category: "Music",
      date: "4 days ago",
    },
    {
      title: "Fashion Week Highlights 2024",
      thumbnail: "/placeholder.svg?height=600&width=800",
      duration: "12:30",
      views: "189K",
      category: "Fashion",
      date: "1 week ago",
    },
  ]

  const trendingVideos = [
    {
      title: "Cooking with Chef Kondwani: Nsima Masterclass",
      thumbnail: "/placeholder.svg?height=400&width=600",
      duration: "18:45",
      views: "98K",
      category: "Food",
    },
    {
      title: "Documentary: Voices of Malawi",
      thumbnail: "/placeholder.svg?height=400&width=600",
      duration: "45:20",
      views: "156K",
      category: "Documentary",
    },
    {
      title: "Music Video: City Lights - Urban Poets",
      thumbnail: "/placeholder.svg?height=400&width=600",
      duration: "4:32",
      views: "423K",
      category: "Music Video",
    },
    {
      title: "Travel Vlog: Exploring Lake Malawi",
      thumbnail: "/placeholder.svg?height=400&width=600",
      duration: "22:15",
      views: "234K",
      category: "Travel",
    },
  ]

  const categories = [
    { name: "Music Videos", count: 156, icon: "🎵" },
    { name: "Documentaries", count: 42, icon: "🎬" },
    { name: "Interviews", count: 89, icon: "🎤" },
    { name: "Behind the Scenes", count: 67, icon: "🎥" },
    { name: "Live Performances", count: 124, icon: "🎸" },
    { name: "Tutorials", count: 53, icon: "📚" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image src="/placeholder.svg?height=800&width=1600" alt="Videos Hero" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="container relative mx-auto flex h-full items-end px-4 pb-16">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary text-primary-foreground">Videos</Badge>
            <h1 className="mb-4 font-serif text-5xl font-bold leading-tight text-balance md:text-7xl">
              Watch & Discover
            </h1>
            <p className="text-lg text-muted-foreground text-pretty md:text-xl">
              From music videos to documentaries, explore the best of African visual storytelling
            </p>
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 font-serif text-3xl font-bold md:text-4xl">Featured Videos</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredVideos.map((video, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border bg-card transition-all hover:border-primary"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <Badge className="absolute left-3 top-3 bg-primary text-primary-foreground">{video.category}</Badge>
                <div className="absolute bottom-3 right-3 rounded bg-black/80 px-2 py-1 text-xs font-bold text-white">
                  {video.duration}
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button size="lg" className="rounded-full">
                    <Play className="mr-2 h-5 w-5" />
                    Play
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="mb-2 font-bold leading-tight text-balance group-hover:text-primary">{video.title}</h3>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    {video.views}
                  </span>
                  <span>{video.date}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="border-y border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 font-serif text-3xl font-bold md:text-4xl">Browse by Category</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="group cursor-pointer border-border bg-card p-6 transition-all hover:border-primary"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="mb-2 text-3xl">{category.icon}</div>
                    <h3 className="mb-1 font-bold group-hover:text-primary">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.count} videos</p>
                  </div>
                  <Play className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Videos */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8 flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-primary" />
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Trending Now</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trendingVideos.map((video, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border bg-card transition-all hover:border-primary"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <Badge className="absolute left-2 top-2 bg-primary text-xs text-primary-foreground">
                  {video.category}
                </Badge>
                <div className="absolute bottom-2 right-2 rounded bg-black/80 px-2 py-0.5 text-xs font-bold text-white">
                  {video.duration}
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button size="icon" className="h-12 w-12 rounded-full">
                    <Play className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="p-3">
                <h3 className="mb-2 text-sm font-bold leading-tight text-balance group-hover:text-primary">
                  {video.title}
                </h3>
                <p className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Eye className="h-3 w-3" />
                  {video.views} views
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Video Gallery Component */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 font-serif text-3xl font-bold md:text-4xl">All Videos</h2>
          <VideoGallery />
        </div>
      </section>

      <Footer />
    </div>
  )
}
