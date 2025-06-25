import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                讓不會說話的牠，
                <br />
                也能被好好守護。
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                用十幾年的陪伴，我們守護牠的每一次選擇。
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                立即下載 App
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                了解更多
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center space-y-2">
                    <div className="text-6xl">🐕</div>
                    <p className="text-sm font-medium text-muted-foreground">老實說狗狗</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-6xl">🐱</div>
                    <p className="text-sm font-medium text-muted-foreground">老實說貓貓</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}