export function BrandConcept() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            我們理解毛孩家長的痛點
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="space-y-4">
              <div className="text-4xl">😰</div>
              <h3 className="text-xl font-semibold">資訊不透明</h3>
              <p className="text-muted-foreground">
                網路上的評價真假難辨，不知道哪些地方真的對毛孩友善。
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-4xl">🤐</div>
              <h3 className="text-xl font-semibold">不敢說真話</h3>
              <p className="text-muted-foreground">
                擔心留下負評會被報復，或者不知道該在哪裡分享經驗。
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-4xl">⏰</div>
              <h3 className="text-xl font-semibold">後悔來不及</h3>
              <p className="text-muted-foreground">
                等到發生問題才知道某個地方有風險，但已經太遲了。
              </p>
            </div>
          </div>
          
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