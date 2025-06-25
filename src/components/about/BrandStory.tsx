export function BrandStory() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              我們的故事
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
              <blockquote className="text-xl md:text-2xl italic text-center leading-relaxed">
                "我不想事後後悔……我要讓每一隻狗狗因為我努力過而活得更安全。"
              </blockquote>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Pet Talk 的誕生，源於創辦團隊的一個深刻體悟：太多毛孩因為資訊不透明而受到不當對待，
                太多飼主因為不敢說真話而默默承受痛苦。
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                我們相信，透過科技的力量，可以建立一個更安全、更透明的環境。
                讓每一位毛孩家長都能獲得真實可靠的資訊，讓每一隻毛孩都能在最好的照護下快樂成長。
              </p>
              
              <div className="bg-primary/5 rounded-2xl p-8 mt-8">
                <h3 className="text-2xl font-bold mb-4 text-center">品牌使命</h3>
                <p className="text-xl text-center font-medium">
                  讓不會說話的牠，也能被好好守護。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}