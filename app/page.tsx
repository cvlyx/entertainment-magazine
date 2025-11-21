import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BreakingNews } from "@/components/breaking-news"
import { FeaturedGrid } from "@/components/featured-grid"
import { ReelsSection } from "@/components/reels-section"
import { VideoGallery } from "@/components/video-gallery"
import { NewsGrid } from "@/components/news-grid"
import { InterviewsSection } from "@/components/interviews-section"
import { MultimediaSection } from "@/components/multimedia-section"
import { TrendingSection } from "@/components/trending-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <BreakingNews />
        <FeaturedGrid />
        <ReelsSection />
        <VideoGallery />
        <NewsGrid />
        <InterviewsSection />
        <MultimediaSection />
        <TrendingSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}
