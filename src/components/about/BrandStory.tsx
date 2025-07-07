export function BrandStory() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">我們的故事</h2>
          </div>

          <div className="space-y-8">
            <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
              <blockquote className="text-xl md:text-2xl italic text-center leading-relaxed">
                "我不想事後後悔，我想盡我所能，讓牠活得更安全。"
              </blockquote>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                我們不是科技公司，也不是行銷團隊。
                我們只是，一群想讓毛孩更安全、讓飼主更安心的人。
                曾經，我們也走過那些選擇的焦慮——
                哪家餐廳真的寵物友善？哪間醫院值得信任？
                有時候，是朋友一句話救了我們；
                有時候，是事後才知道的資訊，讓我們後悔不已。 所以我們決定打造
                PTalk。 一個讓真實經驗可以被記錄、被看見的地方。
                在這裡，每一份評價都來自誠實的分享，
                每一個「抓抓」或「便便」，都是為了讓下個飼主少一點擔心。
                這不只是資訊平台， 而是我們給毛孩的一份承諾——
              </p>

              {/* <p className="text-lg text-muted-foreground leading-relaxed">
                我們相信，透過科技的力量，可以建立一個更安全、更透明的環境。
                讓每一位毛孩家長都能獲得真實可靠的資訊，讓每一隻毛孩都能在最好的照護下快樂成長。
              </p> */}

              <div className="bg-primary/5 rounded-2xl p-8 mt-8">
                <h3 className="text-2xl font-bold mb-4 text-center">
                  品牌使命
                </h3>
                <p className="text-xl text-center font-medium">
                  讓不會說話的牠，也能被好好守護。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
