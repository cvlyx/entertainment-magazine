import { Card } from "@/components/ui/card"

export function NewsGrid() {
  const articles = [
    {
      title: "Patience Namadingo Breaks Streaming Records",
      excerpt: "The gospel artist's latest single reaches 5 million streams in just two weeks",
      category: "Music",
      image: "/african-gospel-musician-performing.jpg",
      date: "2 hours ago",
    },
    {
      title: "Malawi Film Festival Announces 2025 Lineup",
      excerpt: "Over 50 films from across the continent will be showcased",
      category: "Film",
      image: "/film-festival-red-carpet-africa.jpg",
      date: "5 hours ago",
    },
    {
      title: "The Return of Malawian Hip Hop",
      excerpt: "Young artists are reviving the golden era with fresh perspectives",
      category: "Music",
      image: "/african-hip-hop-artists.jpg",
      date: "8 hours ago",
    },
    {
      title: "Behind the Scenes: Shooting in Lilongwe",
      excerpt: "Director shares insights on filming the capital's transformation",
      category: "Film",
      image: "/film-crew-shooting-in-african-city.jpg",
      date: "12 hours ago",
    },
    {
      title: "Street Style: Blantyre Fashion Week Highlights",
      excerpt: "The best looks from the runway and the streets",
      category: "Lifestyle",
      image: "/african-fashion-week-models-runway.jpg",
      date: "1 day ago",
    },
    {
      title: "Podcast: Conversations with Lucius Banda",
      excerpt: "The legendary musician discusses his 30-year career",
      category: "Music",
      image: "/african-musician-podcast-interview.jpg",
      date: "1 day ago",
    },
  ]

  return (
    <section id="news" className="border-t border-border bg-secondary/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Latest News</h2>
          <p className="mt-2 text-muted-foreground">Stay updated with the pulse of African entertainment</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <Card
              key={i}
              className="group overflow-hidden border-0 bg-card transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">{article.category}</span>
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold leading-tight text-balance group-hover:text-primary">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground text-pretty">{article.excerpt}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
