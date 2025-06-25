import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ContactForm } from "@/components/contact/ContactForm"
import { ContactInfo } from "@/components/contact/ContactInfo"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6 mb-16">
              <h1 className="text-4xl md:text-5xl font-bold">
                聯絡我們
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                有任何問題或建議嗎？我們很樂意聽到您的聲音！
                請填寫下方表單，我們會盡快回覆您。
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                常見問題
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">
                    Q: Pet Talk 是免費的嗎？
                  </h3>
                  <p className="text-muted-foreground">
                    A: 是的！Pet Talk 完全免費提供所有核心功能，
                    我們希望每一位毛孩家長都能輕鬆使用。
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">
                    Q: 如何確保匿名性？
                  </h3>
                  <p className="text-muted-foreground">
                    A: 我們使用先進的加密技術保護用戶身份，
                    絕不會洩露任何個人資訊。
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">
                    Q: 支援哪些平台？
                  </h3>
                  <p className="text-muted-foreground">
                    A: 目前支援 iOS 14+ 和 Android 8+，
                    未來也會推出網頁版本。
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">
                    Q: 如何回報不實資訊？
                  </h3>
                  <p className="text-muted-foreground">
                    A: 您可以直接在 App 內回報，我們會在 24 小時內處理。
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