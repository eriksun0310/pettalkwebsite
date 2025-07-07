# PTalk API 資料格式文件

這份文件提供給後端開發人員，包含所有前端需要的資料格式定義。

## 資料結構說明

### 1. 角色資料 (Characters)
```typescript
interface Character {
  id: string              // 唯一識別碼
  name: string           // 角色名稱
  type: 'dog' | 'cat'    // 角色類型
  personality: string    // 個性描述
  quote: string          // 代表台詞
  image: string          // 角色圖片 URL
}
```

### 2. 功能特色 (Features)
```typescript
interface Feature {
  id: string          // 功能 ID
  title: string       // 功能標題
  description: string // 功能描述
  icon: string        // 圖標（emoji 或 icon class）
  href?: string       // 連結（選填）
}
```

### 3. App 功能詳情 (App Features)
```typescript
interface AppFeature extends Feature {
  details: {
    categories?: string[]        // 分類選項
    filterOptions?: string[]     // 篩選選項
    mapFeatures?: string[]       // 地圖功能
    anonymityLevel?: string[]    // 匿名等級
    mediaSupport?: string[]      // 媒體支援
    contentModeration?: string[] // 內容審核
    warningLevels?: WarningLevel[] // 警示等級
    notificationTypes?: string[]   // 通知類型
    ageGroups?: AgeGroup[]        // 年齡分組
    sizeCategories?: string[]     // 體型分類
    breedSpecific?: boolean       // 品種特定
  }
}

interface WarningLevel {
  level: 'green' | 'yellow' | 'red'
  name: string
  description: string
}

interface AgeGroup {
  stage: string
  age: string
  recommendations: string[]
}
```

### 4. 用戶見證 (Testimonials)
```typescript
interface Testimonial {
  id: string          // 見證 ID
  name: string        // 用戶暱稱
  avatar: string      // 頭像 URL
  content: string     // 見證內容
  rating: number      // 評分 (1-5)
  date: string        // 日期 (YYYY-MM-DD)
  petInfo?: {         // 寵物資訊（選填）
    name: string
    type: 'dog' | 'cat'
    breed: string
  }
}
```

### 5. 常見問題 (FAQ)
```typescript
interface FAQ {
  id: string          // 問題 ID
  question: string    // 問題
  answer: string      // 答案
  category: 'pricing' | 'privacy' | 'platform' | 'support'
}
```

### 6. 品牌資訊 (Brand Info)
```typescript
interface BrandInfo {
  name: string
  slogan: string
  mission: string
  vision: string
  founderQuote: string
  logo: string
  colors: {
    primary: string    // HEX 色碼
    secondary: string
    accent: string
  }
}
```

### 7. 聯絡資訊 (Contact Info)
```typescript
interface ContactInfo {
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
```

### 8. 平台統計 (Statistics)
```typescript
interface Statistics {
  totalUsers: string         // 總用戶數
  totalReviews: string       // 總評價數
  totalLocations: string     // 總地點數
  activeRegions: string[]    // 活躍地區
  userGrowthRate: string     // 用戶成長率
  userSatisfaction: string   // 用戶滿意度
}
```

## API 端點建議

### 基礎資料端點
```
GET /api/v1/brand-info          # 獲取品牌資訊
GET /api/v1/characters          # 獲取角色列表
GET /api/v1/features            # 獲取功能特色
GET /api/v1/app-features        # 獲取詳細 App 功能
```

### 內容端點
```
GET /api/v1/testimonials        # 獲取用戶見證
GET /api/v1/faq                 # 獲取常見問題
GET /api/v1/statistics          # 獲取平台統計
```

### 查詢參數範例
```
GET /api/v1/testimonials?limit=10&offset=0
GET /api/v1/faq?category=privacy
```

## 回應格式建議

### 成功回應
```json
{
  "success": true,
  "data": {
    // 實際資料
  },
  "meta": {
    "timestamp": "2024-01-25T10:30:00Z",
    "version": "1.0"
  }
}
```

### 錯誤回應
```json
{
  "success": false,
  "error": {
    "code": "NOT_FOUND",
    "message": "資源不存在",
    "details": {}
  }
}
```

## 分頁格式
```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "total": 100,
    "limit": 10,
    "offset": 0,
    "hasNext": true,
    "hasPrev": false
  }
}
```

## 多語言支援
建議使用 Accept-Language header：
```
Accept-Language: zh-TW  # 繁體中文
Accept-Language: en-US  # 英文
```

## 快取建議
- 品牌資訊、角色資料：24 小時
- 功能特色：24 小時  
- 用戶見證：1 小時
- 統計資料：5 分鐘

## 安全建議
1. 所有 API 使用 HTTPS
2. 實施 Rate Limiting
3. 使用 API Key 或 JWT Token 認證
4. CORS 設定白名單
5. 輸入驗證與消毒

## 版本控制
建議使用 URL 版本控制：
- v1: /api/v1/...
- v2: /api/v2/...

保持向後相容，新版本發布時維護舊版本至少 6 個月。