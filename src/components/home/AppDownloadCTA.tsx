import { AppDownloadButtons } from "@/components/shared";

export function AppDownloadCTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-3xl p-12 text-center text-primary-foreground">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-6xl mb-6">🐾</div>

            <h2 className="text-3xl md:text-4xl font-bold">
              立即下載 PTalk
            </h2>

            <p className="text-lg opacity-90">
              這不只是 App，而是一個為毛孩發聲的空間。
              完全免費，現在就加入我們的行列！
            </p>

            <AppDownloadButtons variant="secondary" />

            <p className="text-sm opacity-75">支援 iOS 14+ 與 Android 8+</p>
          </div>
        </div>
      </div>
    </section>
  );
}
