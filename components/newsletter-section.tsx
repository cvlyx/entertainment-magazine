import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  return (
    <section className="border-y border-primary bg-primary/10 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Stay in the Loop</h2>
          <p className="mb-8 text-lg text-muted-foreground text-pretty">
            Get the latest news, exclusive interviews, and behind-the-scenes content delivered to your inbox weekly
          </p>
          <form className="flex flex-col gap-4 sm:flex-row">
            <Input type="email" placeholder="Enter your email" className="flex-1 bg-background" />
            <Button type="submit" size="lg" className="sm:w-auto">
              Subscribe
            </Button>
          </form>
          <p className="mt-4 text-xs text-muted-foreground">Join 50,000+ readers. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  )
}
