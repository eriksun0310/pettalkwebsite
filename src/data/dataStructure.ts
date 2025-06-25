// Pet Talk 資料結構定義（供後端參考）

// 角色資料
export interface Character {
  id: string
  name: string
  type: 'dog' | 'cat'
  personality: string
  quote: string
  image: string
}

// 功能特色
export interface Feature {
  id: string
  title: string
  description: string
  icon: string
  href?: string
}

// App 功能詳情
export interface AppFeature extends Feature {
  details: Record<string, any>
}

// 用戶見證
export interface Testimonial {
  id: string
  name: string
  avatar: string
  content: string
  rating: 1 | 2 | 3 | 4 | 5
  date: string // YYYY-MM-DD
  petInfo?: {
    name: string
    type: 'dog' | 'cat'
    breed: string
  }
}

// 常見問題
export interface FAQ {
  id: string
  question: string
  answer: string
  category: 'pricing' | 'privacy' | 'platform' | 'support'
}

// 品牌資訊
export interface BrandInfo {
  name: string
  slogan: string
  mission: string
  vision: string
  founderQuote: string
  logo: string
  colors: {
    primary: string
    secondary: string
    accent: string
  }
}

// 聯絡資訊
export interface ContactInfo {
  email: string
  phone: string | null
  address: {
    city: string
    district: string
    country: string
  }
  businessHours: {
    weekdays: string
    weekends: string
    timezone: string
  }
  socialMedia: {
    instagram: string | null
    facebook: string | null
    twitter: string | null
    youtube: string | null
  }
}

// 統計資料
export interface Statistics {
  totalUsers: string
  totalReviews: string
  totalLocations: string
  activeRegions: string[]
  userGrowthRate: string
  userSatisfaction: string
}

// 警示等級
export interface WarningLevel {
  level: 'green' | 'yellow' | 'red'
  name: string
  description: string
}

// 年齡分組
export interface AgeGroup {
  stage: string
  age: string
  recommendations: string[]
}

// API 回應格式
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: {
    code: string
    message: string
    details?: any
  }
  meta?: {
    timestamp: string
    version: string
  }
}

// 分頁回應格式
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    total: number
    limit: number
    offset: number
    hasNext: boolean
    hasPrev: boolean
  }
}