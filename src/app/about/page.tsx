import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { BrandStory } from "@/components/about/BrandStory"
import { CharacterCard } from "@/components/about/CharacterCard"
import { characters } from "@/lib/constants"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                關於 Pet Talk
              </h1>
              <p className="text-xl text-muted-foreground">
                用科技與愛心，打造毛孩安全的網路世界
              </p>
            </div>
          </div>
        </section>

        <BrandStory />

        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                認識我們的角色大使
              </h2>
              <p className="text-xl text-muted-foreground">
                兩位正義感滿滿的毛孩代言人
              </p>
            </div>
            
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
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="text-4xl">🔒</div>
                  <h3 className="text-xl font-semibold">隱私保護</h3>
                  <p className="text-muted-foreground">
                    絕對保護用戶隱私，確保匿名分享的安全性。
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="text-4xl">✅</div>
                  <h3 className="text-xl font-semibold">資訊真實</h3>
                  <p className="text-muted-foreground">
                    嚴格審核機制，確保平台上的資訊真實可靠。
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="text-4xl">❤️</div>
                  <h3 className="text-xl font-semibold">持續改善</h3>
                  <p className="text-muted-foreground">
                    持續優化產品功能，為毛孩打造更好的環境。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}