import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { BrandStory } from "@/components/about/BrandStory"
import { CharacterCard } from "@/components/about/CharacterCard"
import { PageHeader, FeatureGrid } from "@/components/shared"
import { characters } from "@/lib/constants"

const commitments = [
  {
    icon: "🔒",
    title: "隱私保護",
    description: "絕對保護用戶隱私，確保匿名分享的安全性。"
  },
  {
    icon: "✅",
    title: "資訊真實",
    description: "嚴格審核機制，確保平台上的資訊真實可靠。"
  },
  {
    icon: "❤️",
    title: "持續改善",
    description: "持續優化產品功能，為毛孩打造更好的環境。"
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <PageHeader
              title="關於 Pet Talk"
              subtitle="用科技與愛心，打造毛孩安全的網路世界"
            />
          </div>
        </section>

        <BrandStory />

        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <PageHeader
              title="認識我們的角色大使"
              subtitle="兩位正義感滿滿的毛孩代言人"
              className="mb-16"
            />
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {characters.map((character) => (
                <CharacterCard key={character.id} character={character} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                我們的承諾
              </h2>
              
              <FeatureGrid features={commitments} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}