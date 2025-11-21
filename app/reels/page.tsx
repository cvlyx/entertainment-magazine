import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ReelsSection } from "@/components/reels-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { TrendingUp, Flame, Music, Film, Sparkles } from "lucide-react"
import Image from "next/image"

export default function ReelsPage() {
  const trendingHashtags = [
    { tag: "#MalawiMusic", posts: "12.5K", icon: Music },
    { tag: "#AfricanFashion", posts: "8.9K", icon: Sparkles },
    { tag: "#BehindTheScenes", posts: "6.2K", icon: Film },
    { tag: "#DanceChallenge", posts: "15.3K", icon: TrendingUp },
    { tag: "#FoodCulture", posts: "4.7K", icon: Flame },
    { tag: "#StreetStyle", posts: "9.1K", icon: Sparkles },
  ]

  const featuredCreators = [
    {
      name: "Tawonga Beats",
      handle: "@tawongabeats",
      followers: "245K",
      image: "/placeholder.svg?height=200&width=200",
      verified: true,
    },
    {
      name: "Fashion by Thandiwe",
      handle: "@thandiwe_style",
      followers: "189K",
      image: "/placeholder.svg?height=200&width=200",
      verified: true,
    },
    {
      name: "Chef Kondwani",
      handle: "@chef_kondwani",
      followers: "156K",
      image: "/placeholder.svg?height=200&width=200",
      verified: false,
    },
    {
      name: "Dance Crew MW",
      handle: "@dancecrewmw",
      followers: "312K",
      image: "/placeholder.svg?height=200&width=200",
      verified: true,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image src="/placeholder.svg?height=800&width=1600" alt="Reels Hero" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="container relative mx-auto flex h-full items-end px-4 pb-12">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary text-primary-foreground">Reels</Badge>
            <h1 className="mb-4 font-serif text-5xl font-bold leading-tight text-balance md:text-7xl">
              Short Stories, Big Impact
            </h1>
            <p className="text-lg text-muted-foreground text-pretty md:text-xl">
              Bite-sized content from Africa's most creative minds
            </p>
          </div>
        </div>
      </section>

      {/* Trending Hashtags */}
      <section className="border-b border-border bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6 flex items-center gap-2">
            <Flame className="h-6 w-6 text-primary" />
            <h2 className="font-serif text-2xl font-bold md:text-3xl">Trending Hashtags</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trendingHashtags.map((hashtag, index) => {
              const Icon = hashtag.icon
              return (
                <Card
                  key={index}
                  className="group cursor-pointer border-border bg-card p-4 transition-all hover:border-primary"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold group-hover:text-primary">{hashtag.tag}</h3>
                      <p className="text-sm text-muted-foreground">{hashtag.posts} posts</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Creators */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8 flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-primary" />
          <h2 className="font-serif text-2xl font-bold md:text-3xl">Featured Creators</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCreators.map((creator, index) => (
            <Card key={index} className="border-border bg-card p-6 text-center transition-all hover:border-primary">
              <div className="relative mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full">
                <Image src={creator.image || "/placeholder.svg"} alt={creator.name} fill className="object-cover" />
                {creator.verified && (
                  <div className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                    <svg className="h-4 w-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <h3 className="mb-1 font-bold">{creator.name}</h3>
              <p className="mb-2 text-sm text-muted-foreground">{creator.handle}</p>
              <p className="mb-4 text-sm font-medium text-primary">{creator.followers} followers</p>
              <Button className="w-full bg-transparent" variant="outline" size="sm">
                Follow
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* Reels Feed */}
      <section className="border-t border-border bg-background py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 font-serif text-2xl font-bold md:text-3xl">Latest Reels</h2>
          <ReelsSection />
        </div>
      </section>

      <Footer />
    </div>
  )
}
