"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { api } from "@/lib/api"

export function InterviewsSection() {
  const [interviews, setInterviews] = useState<any[]>([])

  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const data = await api.content.getAll({ type: 'interview', limit: 3 })
        if (Array.isArray(data)) {
          setInterviews(data)
        }
      } catch (error) {
        console.error("Failed to fetch interviews", error)
      }
    }
    fetchInterviews()
  }, [])

  if (interviews.length === 0) return null

  return (
    <section id="interviews" className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Exclusive Interviews</h2>
        <p className="mt-2 text-muted-foreground">In-depth conversations with the artists shaping culture</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {interviews.map((interview, i) => (
          <Card key={interview.id} className="group relative overflow-hidden border-0 bg-card">
            <div className="relative aspect-square overflow-hidden">
              <img
                src={interview.image_url || "/placeholder.svg"}
                alt={interview.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">Interview</div>
                <h3 className="mb-2 text-2xl font-bold">{interview.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground line-clamp-2">{interview.summary}</p>
                {interview.meta_data?.quote && (
                  <blockquote className="border-l-2 border-primary pl-4 text-sm italic text-pretty">
                    "{interview.meta_data.quote}"
                  </blockquote>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
