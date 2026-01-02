"use client"

import { Play, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { api } from "@/lib/api"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [heroContent, setHeroContent] = useState<any>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    
    const fetchHero = async () => {
      try {
        const data = await api.content.getAll({ is_featured: 1, limit: 1 })
        if (Array.isArray(data) && data.length > 0) {
          setHeroContent(data[0])
        }
      } catch (error) {
        console.error("Failed to fetch hero content", error)
      }
    }
    fetchHero()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!heroContent) return null // Or a skeleton

  return (
    <section className="relative h-[90vh] overflow-hidden">
      <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <img
          src={heroContent.image_url || "/african-musicians-performing-on-stage-with-dramati.jpg"}
          alt={heroContent.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
      </div>

      <div className="container relative mx-auto flex h-full flex-col justify-end px-4 pb-20">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider animate-in fade-in slide-in-from-bottom-4">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-foreground opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-foreground"></span>
            </span>
            Featured Story
          </div>

          <h1 className="font-sans text-5xl font-bold leading-tight tracking-tight text-balance animate-in fade-in slide-in-from-bottom-8 md:text-7xl lg:text-8xl">
            {heroContent.title}
          </h1>

          <p className="text-lg leading-relaxed text-muted-foreground text-pretty animate-in fade-in slide-in-from-bottom-12 md:text-xl lg:text-2xl">
            {heroContent.excerpt}
          </p>

          <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-16">
            {heroContent.video_url && (
              <Button size="lg" className="gap-2 text-base">
                <Play className="h-5 w-5" />
                Watch Now
              </Button>
            )}
            <Button size="lg" variant="outline" className="text-base bg-transparent">
              Read Full Story
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
