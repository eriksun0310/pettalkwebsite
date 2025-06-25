import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { FeatureCard } from "@/components/app-features/FeatureCard"
import { Button } from "@/components/ui/button"
import { appFeatures } from "@/lib/constants"
import { Apple, Smartphone } from "lucide-react"

export default function AppPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                Pet Talk App 功能介紹
              </h1>
              <p className="text-xl text-muted-foreground">
                四大核心功能，全方位守護毛孩安全與健康
              </p>
            </div>
          </div>
        </section>

        {appFeatures.map((feature, index) => (
          <section key={feature.id} className="py-20">
            <div className="container mx-auto px-4">
              <FeatureCard feature={feature} isReversed={index % 2 === 1} />
            </div>
          </section>
        ))}

        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                現在就下載 Pet Talk
              </h2>
              <p className="text-lg text-muted-foreground">
                超過 10,000+ 毛孩家長正在使用，立即加入我們的社群！
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <Apple className="w-5 h-5" />
                  App Store
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Smartphone className="w-5 h-5" />
                  Google Play
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}