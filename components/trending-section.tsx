import { TrendingUp, ArrowUpRight } from "lucide-react"
import { Card } from "@/components/ui/card"

export function TrendingSection() {
  const trending = [
    {
      rank: 1,
      title: "Eli Njuchi drops surprise EP",
      category: "Music",
      image: "/placeholder.svg?height=100&width=100",
      change: "+12%",
    },
    {
      rank: 2,
      title: "New Malawian film wins at Cannes",
      category: "Film",
      image: "/placeholder.svg?height=100&width=100",
      change: "+8%",
    },
    {
      rank: 3,
      title: "Tay Grin announces world tour",
      category: "Music",
      image: "/placeholder.svg?height=100&width=100",
      change: "+15%",
    },
    {
      rank: 4,
      title: "Fashion Week Blantyre highlights",
      category: "Lifestyle",
      image: "/placeholder.svg?height=100&width=100",
      change: "+6%",
    },
    {
      rank: 5,
      title: "Gwamba's studio documentary",
      category: "Music",
      image: "/placeholder.svg?height=100&width=100",
      change: "+10%",
    },
  ]

  return (
    <section className="border-y border-border bg-secondary/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Trending Now</h2>
              <p className="mt-1 text-sm text-muted-foreground">Most popular stories this week</p>
            </div>
          </div>

          <div className="space-y-4">
            {trending.map((item) => (
              <Card
                key={item.rank}
                className="group overflow-hidden border-0 bg-card transition-all hover:scale-[1.02] hover:shadow-lg"
              >
                <div className="flex items-center gap-4 p-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-3xl font-bold text-primary">
                    {item.rank}
                  </div>
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="h-20 w-20 shrink-0 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">{item.category}</span>
                      <span className="flex items-center gap-1 text-xs font-medium text-green-500">
                        <ArrowUpRight className="h-3 w-3" />
                        {item.change}
                      </span>
                    </div>
                    <h3 className="font-bold leading-tight group-hover:text-primary">{item.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
