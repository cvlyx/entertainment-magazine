import { Card } from "@/components/ui/card"

export function InterviewsSection() {
  const interviews = [
    {
      name: "Onesimus",
      title: "The Voice of a Generation",
      quote: "Music is how we tell our stories, how we preserve our culture for the next generation",
      image: "/african-male-musician-portrait.jpg",
    },
    {
      name: "Sangie",
      title: "Breaking Boundaries",
      quote: "As a female artist in Malawi, I want to inspire young girls to chase their dreams fearlessly",
      image: "/african-female-musician-portrait.jpg",
    },
    {
      name: "Piksy",
      title: "The Future of Afro-Pop",
      quote: "We're creating a sound that's uniquely Malawian but speaks to the whole continent",
      image: "/african-young-musician-portrait.jpg",
    },
  ]

  return (
    <section id="interviews" className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Exclusive Interviews</h2>
        <p className="mt-2 text-muted-foreground">In-depth conversations with the artists shaping culture</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {interviews.map((interview, i) => (
          <Card key={i} className="group relative overflow-hidden border-0 bg-card">
            <div className="relative aspect-square overflow-hidden">
              <img
                src={interview.image || "/placeholder.svg"}
                alt={interview.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">Interview</div>
                <h3 className="mb-2 text-2xl font-bold">{interview.name}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{interview.title}</p>
                <blockquote className="border-l-2 border-primary pl-4 text-sm italic text-pretty">
                  "{interview.quote}"
                </blockquote>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
