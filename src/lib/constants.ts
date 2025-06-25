import type { Character, Feature, Testimonial } from '@/types'

export const characters: Character[] = [
  {
    id: 'honest-dog',
    name: '老實說狗狗',
    type: 'dog',
    personality: '正義感爆棚的毛孩守護者，對於不公不義的事情會直接開吠！熱愛分享好地方，更愛揭露爛地方。',
    quote: '對的我會推薦，爛的我會直接吠！',
    image: 'https://placehold.co/400x400/fbbf24/ffffff?text=🐕'
  },
  {
    id: 'honest-cat',
    name: '老實說貓貓',
    type: 'cat',
    personality: '高冷但心軟的評論家，話不多但句句精準。看似不在乎，其實比誰都關心毛孩安全。',
    quote: '我不多話，但我說的你最好聽清楚。',
    image: 'https://placehold.co/400x400/fb923c/ffffff?text=🐈'
  }
]

export const features: Feature[] = [
  {
    id: 'map',
    title: '評價地圖',
    description: '快速搜尋各地寵物友善地點的真實評價，找到最適合毛孩的好去處。',
    icon: '🗺️',
    href: '/app#map'
  },
  {
    id: 'anonymous',
    title: '匿名發文',
    description: '保護隱私的匿名分享功能，讓您安心說出真實體驗。',
    icon: '🔒',
    href: '/app#anonymous'
  },
  {
    id: 'warning',
    title: '警示等級',
    description: '即時了解各地點的安全等級，預防潛在風險。',
    icon: '⚠️',
    href: '/app#warning'
  }
]

export const appFeatures: Feature[] = [
  {
    id: 'map-feature',
    title: '評價地圖',
    description: '整合 Google Maps，快速查看附近的寵物友善地點評價。可依照類別篩選（醫院、美容、公園等），並看到其他飼主的真實評價與照片。',
    icon: '🗺️'
  },
  {
    id: 'anonymous-feature',
    title: '匿名發文',
    description: '採用區塊鏈技術確保匿名性，讓飼主能安心分享真實體驗。支援文字、照片、影片上傳，並有敏感詞過濾機制。',
    icon: '🔒'
  },
  {
    id: 'warning-feature',
    title: '警示等級',
    description: '三級警示系統（綠色安全、黃色注意、紅色危險），根據評價數據自動計算。危險地點會立即通知附近用戶。',
    icon: '⚠️'
  },
  {
    id: 'growth-feature',
    title: '狗狗成長階段推薦',
    description: '根據狗狗年齡、體型、品種，推薦適合的活動地點與注意事項。從幼犬到老犬，提供全方位的照護建議。',
    icon: '🐕‍🦺'
  }
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: '小明媽媽',
    avatar: 'https://placehold.co/60x60/e0e7ff/6366f1?text=U1',
    content: '感謝 Pet Talk！上次帶狗狗去新的美容店之前，先看了評價，果然避開了一家會粗暴對待狗狗的店。',
    rating: 5,
    date: '2024-01-15'
  },
  {
    id: '2',
    name: '柴柴爸',
    avatar: 'https://placehold.co/60x60/fce7f3/ec4899?text=U2',
    content: '匿名功能真的很棒，可以安心分享不好的經驗，希望能幫助到其他飼主。',
    rating: 5,
    date: '2024-01-20'
  },
  {
    id: '3',
    name: '喵喵姐',
    avatar: 'https://placehold.co/60x60/dbeafe/3b82f6?text=U3',
    content: '警示功能救了我家貓咪！收到附近公園有毒餌的警告，立刻改道。',
    rating: 5,
    date: '2024-01-25'
  }
]