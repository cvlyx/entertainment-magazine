import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Clock, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function MusicPage() {
  const featuredAlbums = [
    {
      title: "Afrobeats Rising",
      artist: "Tawonga Beats",
      image: "/african-musician-album-cover.jpg",
      plays: "2.4M",
      duration: "45:32",
    },
    {
      title: "Malawi Vibes",
      artist: "Lilongwe All Stars",
      image: "/malawian-music-album-art.jpg",
      plays: "1.8M",
      duration: "38:15",
    },
    {
      title: "Urban Sounds",
      artist: "Blantyre Collective",
      image: "/urban-african-music-cover.jpg",
      plays: "3.1M",
      duration: "52:20",
    },
  ]

  const latestReleases = [
    {
      title: "Midnight Dreams",
      artist: "Chimwemwe",
      category: "R&B",
      image: "/african-rnb-artist.jpg",
      date: "2 days ago",
    },
    {
      title: "Dance All Night",
      artist: "DJ Malawi",
      category: "Afrohouse",
      image: "/african-dj-performing.jpg",
      date: "5 days ago",
    },
    {
      title: "Roots & Culture",
      artist: "The Heritage Band",
      category: "Traditional",
      image: "/african-traditional-musicians.jpg",
      date: "1 week ago",
    },
    {
      title: "City Lights",
      artist: "Urban Poets",
      category: "Hip Hop",
      image: "/african-hip-hop-artist.jpg",
      date: "1 week ago",
    },
  ]

  const trendingArtists = [
    { name: "Tawonga Beats", followers: "245K", image: "/african-music-producer.jpg" },
    { name: "Chimwemwe", followers: "189K", image: "/african-female-singer.jpg" },
    { name: "DJ Malawi", followers: "312K", image: "/african-dj.jpg" },
    { name: "The Heritage Band", followers: "156K", image: "/african-band.jpg" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image src="/african-music-concert-crowd.png" alt="Music Hero" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="container relative mx-auto flex h-full items-end px-4 pb-16">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary text-primary-foreground">Music</Badge>
            <h1 className="mb-4 font-serif text-5xl font-bold leading-tight text-balance md:text-7xl">
              The Sound of Africa
            </h1>
            <p className="text-lg text-muted-foreground text-pretty md:text-xl">
              Discover the latest hits, rising stars, and timeless classics from Malawi and across the continent
            </p>
          </div>
        </div>
      </section>

      {/* Featured Albums */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Featured Albums</h2>
          <Button variant="ghost">View All</Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredAlbums.map((album, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border bg-card transition-all hover:border-primary"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={album.image || "/placeholder.svg"}
                  alt={album.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button size="lg" className="rounded-full">
                    <Play className="mr-2 h-5 w-5" />
                    Play Album
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{album.title}</h3>
                <p className="mb-4 text-muted-foreground">{album.artist}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Play className="h-4 w-4" />
                    {album.plays}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {album.duration}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Latest Releases */}
      <section className="border-y border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 font-serif text-3xl font-bold md:text-4xl">Latest Releases</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {latestReleases.map((release, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border bg-card transition-all hover:border-primary"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={release.image || "/placeholder.svg"}
                    alt={release.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <Badge className="absolute right-3 top-3 bg-primary text-primary-foreground">
                    {release.category}
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="mb-1 font-bold">{release.title}</h3>
                  <p className="mb-2 text-sm text-muted-foreground">{release.artist}</p>
                  <p className="text-xs text-muted-foreground">{release.date}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Artists */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8 flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-primary" />
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Trending Artists</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trendingArtists.map((artist, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border bg-card text-center transition-all hover:border-primary"
            >
              <div className="relative mx-auto mt-6 h-32 w-32 overflow-hidden rounded-full">
                <Image
                  src={artist.image || "/placeholder.svg"}
                  alt={artist.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold">{artist.name}</h3>
                <p className="text-sm text-muted-foreground">{artist.followers} followers</p>
                <Button className="mt-4 w-full bg-transparent" variant="outline">
                  Follow
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
