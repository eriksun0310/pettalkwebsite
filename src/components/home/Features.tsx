import { features } from "@/lib/constants";
import { FeaturesCarousel } from "./FeaturesCarousel";

export function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">六大核心功能</h2>
          <p className="text-xl text-muted-foreground">
            讓資訊更透明，選擇更安心。
          </p>
        </div>

        <FeaturesCarousel features={features} />
      </div>
    </section>
  );
}
