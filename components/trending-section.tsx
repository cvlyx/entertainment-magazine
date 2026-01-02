import { TrendingUp, ArrowUpRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { api } from "@/lib/api"

export function TrendingSection() {
  const [trending, setTrending] = useState<any[]>([])

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const data = await api.content.getAll({ is_trending: 1, limit: 5 })
        if (Array.isArray(data)) {
          setTrending(data)
        }
      } catch (error) {
        console.error("Failed to fetch trending content", error)
      }
    }
    fetchTrending()
  }, [])

  if (trending.length === 0) return null

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
            {trending.map((item, index) => (
              <Card
                key={item.id}
                className="group overflow-hidden border-0 bg-card transition-all hover:scale-[1.02] hover:shadow-lg"
              >
                <div className="flex items-center gap-4 p-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-3xl font-bold text-primary">
                    {index + 1}
                  </div>
                  <img
                    src={item.image_url || "/placeholder.svg"}
                    alt={item.title}
                    className="h-20 w-20 shrink-0 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">
                        {item.category_name || 'News'}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-medium text-green-500">
                        <ArrowUpRight className="h-3 w-3" />
                        Trending
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
