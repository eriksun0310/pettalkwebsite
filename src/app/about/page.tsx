import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BrandStory } from "@/components/about/BrandStory";
import { CharacterCard } from "@/components/about/CharacterCard";
import { PageHeader, FeatureGrid } from "@/components/shared";
import { characters } from "@/lib/constants";

const commitments = [
  {
    icon: "🔍",
    title: "真實透明",
    description: "所有評價皆為飼主實際體驗分享",
  },
  {
    icon: "🛡️",
    title: "堅守原則",
    description: "絕不替不安全的店家美化",
  },
  {
    icon: "😎",
    title: "匿名保障",
    description: "無需公開身份，也能勇敢發聲",
  },
  {
    icon: "❤️",
    title: "彼此守護",
    description: "讓每一位毛孩家長少走冤枉路",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <PageHeader
              title="關於 Pet Talk"
              subtitle="因為牠不會說話，我們願意多說一點。"
            />
          </div>
        </section>

        <BrandStory />

        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <PageHeader
              title="認識我們的角色大使"
              subtitle="兩位正義感滿滿的毛孩代言人"
              className="mb-16"
            />

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {characters.map((character) => (
                <CharacterCard key={character.id} character={character} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">我們的承諾</h2>

              <FeatureGrid features={commitments} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
