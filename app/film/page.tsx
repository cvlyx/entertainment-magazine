import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star, Calendar, Award } from "lucide-react"
import Image from "next/image"

export default function FilmPage() {
  const featuredFilms = [
    {
      title: "The Last Kingdom",
      director: "Chisomo Banda",
      image: "/african-epic-film-poster.jpg",
      rating: 4.8,
      year: "2024",
      genre: "Drama",
    },
    {
      title: "City of Dreams",
      director: "Mphatso Mbewe",
      image: "/african-urban-film-poster.jpg",
      rating: 4.5,
      year: "2024",
      genre: "Thriller",
    },
    {
      title: "Roots",
      director: "Thandiwe Phiri",
      image: "/african-heritage-film-poster.jpg",
      rating: 4.9,
      year: "2023",
      genre: "Documentary",
    },
  ]

  const upcomingReleases = [
    {
      title: "Midnight Sun",
      releaseDate: "March 15, 2024",
      image: "/african-film-scene-night.jpg",
      genre: "Romance",
    },
    {
      title: "The Warriors",
      releaseDate: "April 22, 2024",
      image: "/african-action-film.jpg",
      genre: "Action",
    },
    {
      title: "Voices of the Past",
      releaseDate: "May 8, 2024",
      image: "/placeholder.svg?height=400&width=600",
      genre: "Historical",
    },
  ]

  const filmmakers = [
    {
      name: "Chisomo Banda",
      role: "Director",
      image: "/placeholder.svg?height=300&width=300",
      awards: "3 Awards",
    },
    {
      name: "Mphatso Mbewe",
      role: "Producer",
      image: "/placeholder.svg?height=300&width=300",
      awards: "5 Awards",
    },
    {
      name: "Thandiwe Phiri",
      role: "Cinematographer",
      image: "/placeholder.svg?height=300&width=300",
      awards: "2 Awards",
    },
    {
      name: "Kondwani Jere",
      role: "Screenwriter",
      image: "/placeholder.svg?height=300&width=300",
      awards: "4 Awards",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image src="/placeholder.svg?height=800&width=1600" alt="Film Hero" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="container relative mx-auto flex h-full items-end px-4 pb-16">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary text-primary-foreground">Film</Badge>
            <h1 className="mb-4 font-serif text-5xl font-bold leading-tight text-balance md:text-7xl">
              Stories That Move Us
            </h1>
            <p className="text-lg text-muted-foreground text-pretty md:text-xl">
              Celebrating African cinema, from award-winning features to emerging independent voices
            </p>
          </div>
        </div>
      </section>

      {/* Featured Films */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Featured Films</h2>
          <Button variant="ghost">View All</Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredFilms.map((film, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border bg-card transition-all hover:border-primary"
            >
              <div className="relative aspect-[2/3] overflow-hidden">
                <Image
                  src={film.image || "/placeholder.svg"}
                  alt={film.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <Badge className="absolute left-3 top-3 bg-primary text-primary-foreground">{film.genre}</Badge>
                <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-black/80 px-3 py-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-bold text-white">{film.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{film.title}</h3>
                <p className="mb-1 text-sm text-muted-foreground">Directed by {film.director}</p>
                <p className="text-sm text-muted-foreground">{film.year}</p>
                <Button className="mt-4 w-full">Watch Trailer</Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Upcoming Releases */}
      <section className="border-y border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center gap-2">
            <Calendar className="h-6 w-6 text-primary" />
            <h2 className="font-serif text-3xl font-bold md:text-4xl">Upcoming Releases</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {upcomingReleases.map((film, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border bg-card transition-all hover:border-primary"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={film.image || "/placeholder.svg"}
                    alt={film.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <Badge className="absolute right-3 top-3 bg-primary text-primary-foreground">{film.genre}</Badge>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{film.title}</h3>
                  <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {film.releaseDate}
                  </p>
                  <Button className="mt-4 w-full bg-transparent" variant="outline">
                    Set Reminder
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filmmakers Spotlight */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8 flex items-center gap-2">
          <Award className="h-6 w-6 text-primary" />
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Filmmakers Spotlight</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filmmakers.map((filmmaker, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border bg-card transition-all hover:border-primary"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={filmmaker.image || "/placeholder.svg"}
                  alt={filmmaker.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-lg font-bold">{filmmaker.name}</h3>
                <p className="mb-2 text-sm text-muted-foreground">{filmmaker.role}</p>
                <p className="flex items-center gap-1 text-sm text-primary">
                  <Award className="h-4 w-4" />
                  {filmmaker.awards}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
