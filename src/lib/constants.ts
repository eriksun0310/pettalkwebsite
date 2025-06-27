import type { Character, Feature, Testimonial } from "@/types";

export const characters: Character[] = [
  {
    id: "honest-dog",
    name: "老實說狗狗",
    type: "dog",
    personality:
      "正義感爆棚的毛孩守護者，對於不公不義的事情會直接開吠！熱愛分享好地方，更愛揭露爛地方。",
    quote: "對的我會推薦，爛的我會直接吠！",
    image: "https://placehold.co/400x400/fbbf24/ffffff?text=🐕",
  },
  {
    id: "honest-cat",
    name: "老實說貓貓",
    type: "cat",
    personality:
      "高冷但心軟的評論家，話不多但句句精準。看似不在乎，其實比誰都關心毛孩安全。",
    quote: "我不多話，但我說的你最好聽清楚。",
    image: "https://placehold.co/400x400/fb923c/ffffff?text=🐈",
  },
];

// export const features: Feature[] = [
//   {
//     id: "map",
//     title: "地圖探索",
//     description: "一眼就能看懂哪裡值得去，哪裡要注意。",
//     icon: "🗺️",
//     href: "/app#map",
//   },
//   {
//     id: "reviews",
//     title: "實用評論",
//     description: "看真實體驗，做安心決定。",
//     icon: "🔒",
//     href: "/app#reviews",
//   },
//   {
//     id: "rating",
//     title: "Pet Talk 評分系統",
//     description: "即時了解各地點的安全等級，預防潛在風險。",
//     icon: "⚠️",
//     href: "/app#rating",
//   },
// ];

export const features: Feature[] = [
  {
    id: "rating",
    title: "Pet Talk 評分系統",
    description: "用抓抓推薦、用便便提醒，誠實分享每一次體驗。",
    icon: "⚖️",
    href: "/app#rating",
  },
  {
    id: "map",
    title: "地圖探索",
    description: "地圖上即時查看評分，一眼辨識友善與否。",
    icon: "🗺️",
    href: "/app#map",
  },
  {
    id: "reviews",
    title: "實用評論",
    description: "看真實飼主經驗，安心避開地雷店。",
    icon: "📝",
    href: "/app#reviews",
  },
  {
    id: "companion",
    title: "守護角色陪伴",
    description: "讓老實說狗狗／貓貓陪你一起守護毛孩的選擇。",
    icon: "💬",
    href: "/app#companion",
  },
  {
    id: "friendliness",
    title: "友善程度標示",
    description: "清楚標示地點對寵物的友善等級與限制。",
    icon: "🐶",
    href: "/app#friendliness",
  },
  {
    id: "community",
    title: "用戶共建地圖",
    description: "沒有的店家也能由你新增，一起完善友善地圖。",
    icon: "✍️",
    href: "/app#community",
  },
];

export const appFeatures: Feature[] = [
  {
    id: "rating-feature",
    title: "Pet Talk 評分系統",
    description:
      "透過抓抓與便便評分，針對不同類型場所留下推薦或警示，系統中立透明，幫助他人避開風險，也讓值得推薦的店家被更多人看見。",
    icon: "⚖️",
  },
  {
    id: "map-feature",
    title: "地圖探索",
    description:
      "整合 Google Maps，快速查看附近地點的評分與提醒，支援以場所類型、友善程度等條件篩選，找出適合毛孩同行的地點。",
    icon: "🗺️",
  },
  {
    id: "review-feature",
    title: "實用評論",
    description:
      "可匿名發文並上傳照片，補充實際情況與使用心得，讓其他飼主獲得真實、有參考價值的第一手資訊。",
    icon: "📝",
  },
  {
    id: "companion-feature",
    title: "守護角色陪伴",
    description:
      "使用者可選擇老實說狗狗／貓貓作為 App 夥伴，角色風格可愛，並參與功能引導與互動提示，提升使用體驗。",
    icon: "💬",
  },
  {
    id: "friendliness-feature",
    title: "友善程度標示",
    description:
      "依據是否可落地、有無限制或附加服務等標準，標示地點的友善程度，幫助飼主事前做好評估與安排。",
    icon: "🐶",
  },
  {
    id: "community-feature",
    title: "用戶共建地圖",
    description:
      "當找不到想要的地點時，使用者可自行新增並補充資訊，讓地圖內容更完整，一起打造更實用的友善地圖。",
    icon: "✍️",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "小明媽媽",
    avatar: "https://placehold.co/60x60/e0e7ff/6366f1?text=U1",
    content:
      "感謝 Pet Talk！上次帶狗狗去新的美容店之前，先看了評價，果然避開了一家會粗暴對待狗狗的店。",
    rating: 5,
    date: "2024-01-15",
  },
  {
    id: "2",
    name: "柴柴爸",
    avatar: "https://placehold.co/60x60/fce7f3/ec4899?text=U2",
    content: "匿名功能真的很棒，可以安心分享不好的經驗，希望能幫助到其他飼主。",
    rating: 5,
    date: "2024-01-20",
  },
  {
    id: "3",
    name: "喵喵姐",
    avatar: "https://placehold.co/60x60/dbeafe/3b82f6?text=U3",
    content: "警示功能救了我家貓咪！收到附近公園有毒餌的警告，立刻改道。",
    rating: 5,
    date: "2024-01-25",
  },
];
