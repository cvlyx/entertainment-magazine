import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Bookmark, Share2, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function LifestylePage() {
  const featuredStories = [
    {
      title: "The New Wave of African Fashion",
      excerpt:
        "How Malawian designers are reshaping the global fashion landscape with bold patterns and sustainable practices",
      image: "/placeholder.svg?height=600&width=800",
      category: "Fashion",
      author: "Thandiwe Mwale",
      date: "2 days ago",
      readTime: "8 min read",
    },
    {
      title: "Wellness Rituals from Our Ancestors",
      excerpt: "Rediscovering traditional healing practices and their relevance in modern self-care routines",
      image: "/placeholder.svg?height=600&width=800",
      category: "Wellness",
      author: "Chisomo Phiri",
      date: "4 days ago",
      readTime: "6 min read",
    },
    {
      title: "Inside Lilongwe's Hottest Restaurants",
      excerpt: "A culinary journey through the capital's most innovative dining experiences",
      image: "/placeholder.svg?height=600&width=800",
      category: "Food",
      author: "Mphatso Banda",
      date: "1 week ago",
      readTime: "10 min read",
    },
  ]

  const trendingTopics = [
    {
      title: "Sustainable Living in Urban Africa",
      image: "/placeholder.svg?height=400&width=600",
      category: "Sustainability",
      articles: 12,
    },
    {
      title: "Home Decor Trends 2024",
      image: "/placeholder.svg?height=400&width=600",
      category: "Home",
      articles: 8,
    },
    {
      title: "Fitness & Movement",
      image: "/placeholder.svg?height=400&width=600",
      category: "Health",
      articles: 15,
    },
    {
      title: "Travel Destinations",
      image: "/placeholder.svg?height=400&width=600",
      category: "Travel",
      articles: 20,
    },
  ]

  const latestArticles = [
    {
      title: "The Art of Slow Living",
      image: "/placeholder.svg?height=300&width=400",
      category: "Mindfulness",
      date: "3 days ago",
    },
    {
      title: "Street Style: Blantyre Edition",
      image: "/placeholder.svg?height=300&width=400",
      category: "Fashion",
      date: "5 days ago",
    },
    {
      title: "Plant-Based African Cuisine",
      image: "/placeholder.svg?height=300&width=400",
      category: "Food",
      date: "1 week ago",
    },
    {
      title: "Beauty Secrets Revealed",
      image: "/placeholder.svg?height=300&width=400",
      category: "Beauty",
      date: "1 week ago",
    },
    {
      title: "Weekend Getaway Guide",
      image: "/placeholder.svg?height=300&width=400",
      category: "Travel",
      date: "2 weeks ago",
    },
    {
      title: "Mindful Parenting Tips",
      image: "/placeholder.svg?height=300&width=400",
      category: "Family",
      date: "2 weeks ago",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Lifestyle Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="container relative mx-auto flex h-full items-end px-4 pb-16">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary text-primary-foreground">Lifestyle</Badge>
            <h1 className="mb-4 font-serif text-5xl font-bold leading-tight text-balance md:text-7xl">
              Live Your Best Life
            </h1>
            <p className="text-lg text-muted-foreground text-pretty md:text-xl">
              Fashion, wellness, food, and culture - everything that makes life beautiful
            </p>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 font-serif text-3xl font-bold md:text-4xl">Featured Stories</h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {featuredStories.map((story, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border bg-card transition-all hover:border-primary"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={story.image || "/placeholder.svg"}
                  alt={story.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <Badge className="absolute left-4 top-4 bg-primary text-primary-foreground">{story.category}</Badge>
              </div>
              <div className="p-6">
                <h3 className="mb-3 font-serif text-xl font-bold leading-tight text-balance group-hover:text-primary">
                  {story.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground text-pretty">{story.excerpt}</p>
                <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{story.author}</span>
                  <span>•</span>
                  <span>{story.date}</span>
                  <span>•</span>
                  <span>{story.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Trending Topics */}
      <section className="border-y border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="font-serif text-3xl font-bold md:text-4xl">Trending Topics</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {trendingTopics.map((topic, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border bg-card transition-all hover:border-primary"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={topic.image || "/placeholder.svg"}
                    alt={topic.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="mb-2 bg-primary text-primary-foreground">{topic.category}</Badge>
                    <h3 className="font-bold text-white text-balance">{topic.title}</h3>
                    <p className="text-xs text-white/80">{topic.articles} articles</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Latest Articles</h2>
          <Button variant="ghost">View All</Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestArticles.map((article, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border bg-card transition-all hover:border-primary"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <Badge className="absolute right-3 top-3 bg-primary text-primary-foreground">{article.category}</Badge>
              </div>
              <div className="p-4">
                <h3 className="mb-2 font-bold group-hover:text-primary">{article.title}</h3>
                <p className="text-xs text-muted-foreground">{article.date}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
