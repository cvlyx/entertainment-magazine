import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Clock, Quote } from "lucide-react"
import Image from "next/image"

export default function InterviewsPage() {
  const featuredInterviews = [
    {
      title: "In Conversation with Tawonga Beats",
      guest: "Tawonga Beats",
      role: "Music Producer & Artist",
      image: "/placeholder.svg?height=600&width=800",
      excerpt:
        "The rising star talks about his journey from Lilongwe to international stages, his creative process, and the future of Afrobeats",
      duration: "45:32",
      date: "2 days ago",
      category: "Music",
    },
    {
      title: "Chisomo Banda on African Cinema",
      guest: "Chisomo Banda",
      role: "Film Director",
      image: "/placeholder.svg?height=600&width=800",
      excerpt:
        "Award-winning director discusses her latest film, representation in African cinema, and breaking into international film festivals",
      duration: "38:15",
      date: "5 days ago",
      category: "Film",
    },
    {
      title: "The Fashion Revolution with Thandiwe",
      guest: "Thandiwe Mwale",
      role: "Fashion Designer",
      image: "/placeholder.svg?height=600&width=800",
      excerpt:
        "How this Malawian designer is bringing traditional textiles to global runways while championing sustainable fashion",
      duration: "52:20",
      date: "1 week ago",
      category: "Fashion",
    },
  ]

  const recentInterviews = [
    {
      title: "Rising Star: DJ Malawi",
      guest: "DJ Malawi",
      image: "/placeholder.svg?height=400&width=600",
      category: "Music",
      duration: "28:45",
      date: "1 week ago",
    },
    {
      title: "Mphatso Mbewe on Film Production",
      guest: "Mphatso Mbewe",
      image: "/placeholder.svg?height=400&width=600",
      category: "Film",
      duration: "41:30",
      date: "2 weeks ago",
    },
    {
      title: "Chef Kondwani's Culinary Journey",
      guest: "Chef Kondwani",
      image: "/placeholder.svg?height=400&width=600",
      category: "Food",
      duration: "35:15",
      date: "2 weeks ago",
    },
    {
      title: "Athlete Spotlight: Grace Phiri",
      guest: "Grace Phiri",
      image: "/placeholder.svg?height=400&width=600",
      category: "Sports",
      duration: "30:20",
      date: "3 weeks ago",
    },
  ]

  const quotes = [
    {
      text: "Music is the heartbeat of our culture. Every beat tells a story of where we've been and where we're going.",
      author: "Tawonga Beats",
      role: "Music Producer",
    },
    {
      text: "African stories deserve to be told by African voices. That's what drives me every single day.",
      author: "Chisomo Banda",
      role: "Film Director",
    },
    {
      text: "Fashion is more than clothing - it's identity, heritage, and a statement of who we are.",
      author: "Thandiwe Mwale",
      role: "Fashion Designer",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Interviews Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="container relative mx-auto flex h-full items-end px-4 pb-16">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary text-primary-foreground">Interviews</Badge>
            <h1 className="mb-4 font-serif text-5xl font-bold leading-tight text-balance md:text-7xl">
              Voices That Matter
            </h1>
            <p className="text-lg text-muted-foreground text-pretty md:text-xl">
              In-depth conversations with the artists, creators, and changemakers shaping African culture
            </p>
          </div>
        </div>
      </section>

      {/* Featured Interviews */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 font-serif text-3xl font-bold md:text-4xl">Featured Interviews</h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {featuredInterviews.map((interview, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border bg-card transition-all hover:border-primary"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={interview.image || "/placeholder.svg"}
                  alt={interview.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <Badge className="absolute left-4 top-4 bg-primary text-primary-foreground">{interview.category}</Badge>
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button size="lg" className="rounded-full">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Now
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-serif text-xl font-bold leading-tight text-balance">{interview.title}</h3>
                <p className="mb-3 text-sm font-medium text-primary">
                  {interview.guest} • {interview.role}
                </p>
                <p className="mb-4 text-sm text-muted-foreground text-pretty">{interview.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {interview.duration}
                  </span>
                  <span>{interview.date}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Memorable Quotes */}
      <section className="border-y border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center gap-2">
            <Quote className="h-6 w-6 text-primary" />
            <h2 className="font-serif text-3xl font-bold md:text-4xl">Memorable Quotes</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {quotes.map((quote, index) => (
              <Card key={index} className="border-border bg-card p-8">
                <Quote className="mb-4 h-8 w-8 text-primary" />
                <p className="mb-6 font-serif text-lg italic leading-relaxed text-pretty">"{quote.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-bold">{quote.author}</p>
                  <p className="text-sm text-muted-foreground">{quote.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Interviews */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Recent Interviews</h2>
          <Button variant="ghost">View All</Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {recentInterviews.map((interview, index) => (
            <Card
              key={index}
              className="group flex overflow-hidden border-border bg-card transition-all hover:border-primary"
            >
              <div className="relative w-2/5 overflow-hidden">
                <Image
                  src={interview.image || "/placeholder.svg"}
                  alt={interview.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex w-3/5 flex-col justify-between p-6">
                <div>
                  <Badge className="mb-3 bg-primary text-primary-foreground">{interview.category}</Badge>
                  <h3 className="mb-2 font-bold leading-tight text-balance group-hover:text-primary">
                    {interview.title}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">{interview.guest}</p>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {interview.duration}
                  </span>
                  <span>{interview.date}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
