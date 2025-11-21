import { Card } from "@/components/ui/card"
import { Play, ImageIcon, FileText } from "lucide-react"

export function FeaturedGrid() {
  const featured = [
    {
      title: "Exclusive: Inside the Studio with Gwamba",
      category: "Music",
      image: "/placeholder.svg?height=600&width=500",
      type: "video",
      duration: "12:45",
    },
    {
      title: "The New Wave of Malawian Cinema",
      category: "Film",
      image: "/placeholder.svg?height=600&width=500",
      type: "article",
      readTime: "8 min read",
    },
    {
      title: "Fashion Forward: Chitenje Meets Streetwear",
      category: "Lifestyle",
      image: "/placeholder.svg?height=600&width=500",
      type: "gallery",
      photoCount: "24 photos",
    },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "video":
        return Play
      case "gallery":
        return ImageIcon
      default:
        return FileText
    }
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Featured Stories</h2>
          <p className="mt-2 text-muted-foreground">The best of African entertainment</p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((item, i) => {
          const Icon = getIcon(item.type)
          return (
            <Card
              key={i}
              className="group relative overflow-hidden border-0 bg-card transition-transform hover:scale-[1.02]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/90 backdrop-blur-sm transition-transform group-hover:scale-110">
                      <Play className="h-10 w-10 fill-current" />
                    </div>
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">{item.category}</span>
                    <div className="flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      <Icon className="h-3 w-3" />
                      {item.type === "video" && item.duration}
                      {item.type === "article" && item.readTime}
                      {item.type === "gallery" && item.photoCount}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold leading-tight text-white text-balance">{item.title}</h3>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
