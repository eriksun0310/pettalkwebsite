import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FeatureCard } from "@/components/app-features/FeatureCard";
import { PageHeader, AppDownloadButtons } from "@/components/shared";
import { appFeatures } from "@/lib/constants";

export default function AppPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <PageHeader
              title="PTalk App 功能介紹"
              subtitle="六大核心功能，讓資訊更透明，選擇更安心。"
            />
          </div>
        </section>

        {appFeatures.map((feature, index) => (
          <section key={feature.id} className="py-20">
            <div className="container mx-auto px-4">
              <FeatureCard feature={feature} isReversed={index % 2 === 1} />
            </div>
          </section>
        ))}

        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                現在就下載 PTalk
              </h2>
              <p className="text-lg text-muted-foreground">
                加入我們，一起為毛孩打造更友善的未來。完全免費，馬上開始
              </p>
              <AppDownloadButtons />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
