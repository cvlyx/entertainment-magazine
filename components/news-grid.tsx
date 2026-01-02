"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { api } from "@/lib/api"
import { formatDistanceToNow } from "date-fns"

export function NewsGrid() {
  const [articles, setArticles] = useState<any[]>([])

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await api.content.getAll({ type: 'article', limit: 6 })
        if (Array.isArray(data)) {
          setArticles(data)
        }
      } catch (error) {
        console.error("Failed to fetch news", error)
      }
    }
    fetchArticles()
  }, [])

  if (articles.length === 0) return null

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
                  src={article.image_url || "/placeholder.svg"}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">{article.category_name || 'News'}</span>
                  <span className="text-xs text-muted-foreground">
                    {article.created_at ? formatDistanceToNow(new Date(article.created_at), { addSuffix: true }) : ''}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold leading-tight text-balance group-hover:text-primary">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground text-pretty line-clamp-3">{article.excerpt}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
