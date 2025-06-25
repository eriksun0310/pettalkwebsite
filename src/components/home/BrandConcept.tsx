import { FeatureGrid } from "@/components/shared"

const painPoints = [
  {
    icon: "😰",
    title: "資訊不透明",
    description: "網路上的評價真假難辨，不知道哪些地方真的對毛孩友善。"
  },
  {
    icon: "🤐",
    title: "不敢說真話",
    description: "擔心留下負評會被報復，或者不知道該在哪裡分享經驗。"
  },
  {
    icon: "⏰",
    title: "後悔來不及",
    description: "等到發生問題才知道某個地方有風險，但已經太遲了。"
  }
]

export function BrandConcept() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            我們理解毛孩家長的痛點
          </h2>
          
          <FeatureGrid features={painPoints} className="mt-12" />
          
          <div className="mt-16 p-8 bg-background rounded-2xl border">
            <h3 className="text-2xl font-bold mb-4">我們的願景</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              建立一個安全、透明的資訊分享平台，讓每一位毛孩家長都能獲得真實可靠的地點評價，
              讓每一隻毛孩都能在最安全的環境中快樂生活。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}