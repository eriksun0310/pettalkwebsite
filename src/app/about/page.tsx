import { BrandStory } from "@/components/about/BrandStory";
import { CharacterCarousel } from "@/components/about/CharacterCarousel";
import { PageHeader, FeatureGrid, PageLayout, Section } from "@/components/shared";
import { characters, warningCharacters } from "@/lib/constants";

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
    <PageLayout>
      <Section padding="xl">
        <PageHeader
          title="關於 PTalk"
          subtitle="因為牠不會說話，我們願意多說一點。"
        />
      </Section>

        <BrandStory />

      <Section background="muted">
        <PageHeader
          title="認識我們的角色大使"
          subtitle="兩位正義感滿滿的毛孩代言人"
          className="mb-16"
        />
        <CharacterCarousel characters={characters} />
      </Section>

      <Section>
        <PageHeader
          title="誰在地圖上提醒你？"
          subtitle="牠們出現時，代表這裡有些需要注意的事……"
          className="mb-16"
        />
        <CharacterCarousel characters={warningCharacters} />
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">我們的承諾</h2>
          <FeatureGrid features={commitments} />
        </div>
      </Section>
    </PageLayout>
  );
}
