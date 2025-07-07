import { FeaturesCarousel } from "./FeaturesCarousel";

// const painPoints = [
//   {
//     icon: "😰",
//     title: "資訊不透明",
//     description: "網路上的評價真假難辨，不知道哪些地方真的對毛孩友善。"
//   },
//   {
//     icon: "🤐",
//     title: "不敢說真話",
//     description: "擔心留下負評會被報復，或者不知道該在哪裡分享經驗。"
//   },
//   {
//     icon: "⏰",
//     title: "後悔來不及",
//     description: "等到發生問題才知道某個地方有風險，但已經太遲了。"
//   }
// ]

// const painPoints = [
//   {
//     icon: "😰",
//     title: "資訊不透明",
//     description: "網路上的評價真假難辨，不知道哪些地方真的對毛孩友善。"
//   },
//   {
//     icon: "🤐",
//     title: "不敢說真話",
//     description: "擔心留下負評會被報復，或者不知道該在哪裡分享經驗。"
//   },
//   {
//     icon: "⏰",
//     title: "後悔來不及",
//     description: "等到發生問題才知道某個地方有風險，但已經太遲了。"
//   }
// ]

const painPoints = [
  {
    id: "info-opacity",
    icon: "😰",
    title: "資訊不透明",
    description: "標榜友善，實際卻限制重重；網路評價真假難辨，難以安心出門。",
  },
  {
    id: "no-truth",
    icon: "🤐",
    title: "沒人說實話",
    description: "充滿業配與美化評論，缺乏以毛孩角度出發的誠實平台。",
  },
  {
    id: "avoid-issues",
    icon: "⚠️",
    title: "想避雷卻無從查起",
    description: "希望有人能提前提醒，卻找不到真實經驗或警示資訊。",
  },
  {
    id: "gambling",
    icon: "🎲",
    title: "每次出門都像賭博",
    description: "不知道店家能不能進、會不會被拒，飼主壓力超大。",
  },
  {
    id: "family",
    icon: "😢",
    title: "沒人理解毛孩是家人",
    description: "感覺自己是少數，渴望一個重視毛孩的交流與守護空間。",
  },
  {
    id: "tools",
    icon: "🧭",
    title: "缺乏安心選擇的工具",
    description:
      "每次帶毛孩出門都得查好幾個網站，還是沒把握哪裡真正適合，像在盲目摸索。",
  },
];

export function BrandConcept() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            我們理解毛孩家長的痛點
          </h2>

          <FeaturesCarousel features={painPoints} className="mt-12" />

          <div className="mt-16 p-8 bg-background rounded-2xl border">
            <h3 className="text-2xl font-bold mb-4">PTalk 的願景</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              PTalk 誕生，就是為了解決這些問題。
              讓每一位毛孩家長都能安心選擇、勇敢分享、彼此守護。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
