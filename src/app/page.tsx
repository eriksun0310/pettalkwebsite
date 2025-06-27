import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/home/Hero"
import { BrandConcept } from "@/components/home/BrandConcept"
import { Features } from "@/components/home/Features"
import { Testimonials } from "@/components/home/Testimonials"
import { AppDownloadCTA } from "@/components/home/AppDownloadCTA"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BrandConcept />
        <Features />
        {/*用戶真實回饋, 等有用戶回饋時再開放 */}
        {/* <Testimonials /> */}
        <AppDownloadCTA />
      </main>
      <Footer />
    </div>
  );
}
