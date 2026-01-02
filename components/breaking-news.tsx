import { useEffect, useState } from "react"
import { api } from "@/lib/api"

export function BreakingNews() {
  const [news, setNews] = useState<string[]>([])

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await api.content.getAll({ is_breaking: 1, limit: 5 })
        if (Array.isArray(data)) {
          setNews(data.map((item: any) => item.title))
        }
      } catch (error) {
        console.error("Failed to fetch breaking news", error)
      }
    }
    fetchNews()
  }, [])

  if (news.length === 0) return null

  return (
    <div className="border-y border-primary bg-primary/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center gap-4 overflow-hidden">
          <div className="shrink-0 text-sm font-bold uppercase tracking-wider text-primary">Breaking</div>
          <div className="flex animate-marquee gap-8">
            {news.map((item, i) => (
              <span key={i} className="shrink-0 text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
