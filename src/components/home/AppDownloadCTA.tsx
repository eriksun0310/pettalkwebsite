import { Button } from "@/components/ui/button"
import { Apple, Smartphone } from "lucide-react"

export function AppDownloadCTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-3xl p-12 text-center text-primary-foreground">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-6xl mb-6">🐾</div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              立即下載 Pet Talk
            </h2>
            
            <p className="text-lg opacity-90">
              加入數萬名寵物主人的行列，一起為毛孩打造更好的生活環境。
              完全免費，現在就開始使用。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="gap-2"
              >
                <Apple className="w-5 h-5" />
                App Store
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                className="gap-2"
              >
                <Smartphone className="w-5 h-5" />
                Google Play
              </Button>
            </div>
            
            <p className="text-sm opacity-75">
              支援 iOS 14+ 與 Android 8+
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}