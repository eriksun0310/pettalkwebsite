# Pet Talk 許願池 API 規格文件

## 概述

此文件為 Pet Talk 許願池功能的後端 API 規格說明，包含所有必要的資料模型、API 端點與範例回應。

## 資料模型

### Wish (願望)

```typescript
interface Wish {
  id: string                    // 願望唯一識別碼
  title: string                 // 願望標題 (必填，最多100字)
  description?: string          // 願望詳細描述 (選填，最多500字)
  authorName: string           // 提出者暱稱 (必填，最多20字)
  votes: number                // 當前票數
  createdAt: string            // 建立時間 (ISO 8601格式)
  updatedAt: string            // 最後更新時間 (ISO 8601格式)
  category: WishCategory       // 願望分類
  status: WishStatus           // 願望狀態
}
```

### WishCategory (願望分類)

```typescript
enum WishCategory {
  FEATURE = "feature",         // 新功能
  IMPROVEMENT = "improvement", // 功能改善
  BUG_FIX = "bug_fix",        // 錯誤修正
  UI_UX = "ui_ux",           // 介面體驗
  PERFORMANCE = "performance", // 效能優化
  OTHER = "other"             // 其他
}
```

### WishStatus (願望狀態)

```typescript
enum WishStatus {
  ACTIVE = "active",           // 進行中
  UNDER_REVIEW = "under_review", // 審核中
  IN_DEVELOPMENT = "in_development", // 開發中
  COMPLETED = "completed",     // 已完成
  REJECTED = "rejected"        // 已拒絕
}
```

### Vote (投票記錄)

```typescript
interface Vote {
  id: string                   // 投票記錄唯一識別碼
  wishId: string              // 關聯的願望ID
  userId?: string             // 使用者ID (若有登入)
  userFingerprint: string     // 使用者指紋 (用於防重複投票)
  createdAt: string           // 投票時間 (ISO 8601格式)
}
```

### WishFormData (前端提交資料)

```typescript
interface WishFormData {
  title: string               // 願望標題
  description?: string        // 願望描述
  authorName: string         // 提出者暱稱
  category: WishCategory     // 願望分類
}
```

## API 端點

### 1. 取得所有願望

```http
GET /api/wishes
```

**查詢參數：**
- `page`: number (選填) - 頁碼，預設為 1
- `limit`: number (選填) - 每頁筆數，預設為 20，最大 100
- `sort`: string (選填) - 排序方式，可選值：`votes_desc`, `votes_asc`, `created_desc`, `created_asc`，預設為 `votes_desc`
- `category`: WishCategory (選填) - 依分類篩選
- `status`: WishStatus (選填) - 依狀態篩選，預設為 `active`

**成功回應 (200)：**
```json
{
  "success": true,
  "data": {
    "wishes": [
      {
        "id": "wish_001",
        "title": "增加寵物友善餐廳的照片上傳功能",
        "description": "希望能讓使用者上傳更豐富的寵物友善設施照片，包括寵物座位區、水碗位置、戶外空間等，讓其他飼主更清楚了解環境是否適合自己的毛孩。",
        "authorName": "愛狗人士小王",
        "votes": 90,
        "createdAt": "2024-01-15T10:30:00Z",
        "updatedAt": "2024-01-20T14:22:33Z",
        "category": "feature",
        "status": "active"
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalItems": 95,
      "hasNext": true,
      "hasPrev": false
    }
  }
}
```

### 2. 建立新願望

```http
POST /api/wishes
```

**請求標頭：**
```
Content-Type: application/json
```

**請求主體：**
```json
{
  "title": "新增寵物友善住宿推薦",
  "description": "旅行時需要帶寵物的住宿選擇太少了！希望平台也能提供寵物友善飯店、民宿的評價和推薦，包括房間大小、是否提供寵物用品、周邊環境等資訊。",
  "authorName": "旅行愛好者",
  "category": "feature"
}
```

**成功回應 (201)：**
```json
{
  "success": true,
  "data": {
    "wish": {
      "id": "wish_096",
      "title": "新增寵物友善住宿推薦",
      "description": "旅行時需要帶寵物的住宿選擇太少了！希望平台也能提供寵物友善飯店、民宿的評價和推薦，包括房間大小、是否提供寵物用品、周邊環境等資訊。",
      "authorName": "旅行愛好者",
      "votes": 0,
      "createdAt": "2024-01-25T09:15:30Z",
      "updatedAt": "2024-01-25T09:15:30Z",
      "category": "feature",
      "status": "active"
    }
  },
  "message": "願望建立成功"
}
```

**錯誤回應 (400)：**
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "資料驗證失敗",
    "details": [
      {
        "field": "title",
        "message": "標題為必填欄位"
      },
      {
        "field": "authorName",
        "message": "提出者暱稱不能超過20個字元"
      }
    ]
  }
}
```

### 3. 為願望投票

```http
POST /api/wishes/{wishId}/vote
```

**路徑參數：**
- `wishId`: string - 願望ID

**請求標頭：**
```
Content-Type: application/json
```

**請求主體：**
```json
{
  "userFingerprint": "fp_abc123xyz789" // 使用者指紋，用於防重複投票
}
```

**成功回應 (200)：**
```json
{
  "success": true,
  "data": {
    "wish": {
      "id": "wish_001",
      "title": "增加寵物友善餐廳的照片上傳功能",
      "votes": 91,
      "updatedAt": "2024-01-25T10:22:15Z"
    },
    "vote": {
      "id": "vote_001234",
      "wishId": "wish_001",
      "userFingerprint": "fp_abc123xyz789",
      "createdAt": "2024-01-25T10:22:15Z"
    }
  },
  "message": "投票成功"
}
```

**錯誤回應 (409)：**
```json
{
  "success": false,
  "error": {
    "code": "ALREADY_VOTED",
    "message": "您已經為此願望投過票了"
  }
}
```

### 4. 取得使用者投票記錄

```http
GET /api/votes/user/{userFingerprint}
```

**路徑參數：**
- `userFingerprint`: string - 使用者指紋

**成功回應 (200)：**
```json
{
  "success": true,
  "data": {
    "votes": [
      {
        "id": "vote_001234",
        "wishId": "wish_001",
        "userFingerprint": "fp_abc123xyz789",
        "createdAt": "2024-01-25T10:22:15Z"
      }
    ]
  }
}
```

### 5. 取得單一願望詳情

```http
GET /api/wishes/{wishId}
```

**路徑參數：**
- `wishId`: string - 願望ID

**成功回應 (200)：**
```json
{
  "success": true,
  "data": {
    "wish": {
      "id": "wish_001",
      "title": "增加寵物友善餐廳的照片上傳功能",
      "description": "希望能讓使用者上傳更豐富的寵物友善設施照片...",
      "authorName": "愛狗人士小王",
      "votes": 90,
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-20T14:22:33Z",
      "category": "feature",
      "status": "active"
    }
  }
}
```

**錯誤回應 (404)：**
```json
{
  "success": false,
  "error": {
    "code": "WISH_NOT_FOUND",
    "message": "找不到指定的願望"
  }
}
```

## 錯誤碼說明

| 錯誤碼 | HTTP狀態碼 | 說明 |
|--------|------------|------|
| VALIDATION_ERROR | 400 | 請求資料驗證失敗 |
| WISH_NOT_FOUND | 404 | 願望不存在 |
| ALREADY_VOTED | 409 | 使用者已投過票 |
| RATE_LIMIT_EXCEEDED | 429 | 請求頻率超過限制 |
| INTERNAL_ERROR | 500 | 伺服器內部錯誤 |

## 資料驗證規則

### Wish 建立驗證
- `title`: 必填，1-100 字元
- `description`: 選填，最多 500 字元
- `authorName`: 必填，1-20 字元
- `category`: 必填，須為有效的 WishCategory 值

### 防重複投票機制
- 使用 `userFingerprint` 識別使用者
- 每個指紋對每個願望只能投票一次
- 建議前端使用瀏覽器指紋技術生成唯一識別碼

## 效能考量

### 快取策略
- 願望列表建議快取 5 分鐘
- 單一願望詳情建議快取 10 分鐘
- 投票後立即清除相關快取

### 分頁建議
- 預設每頁 20 筆資料
- 最大不超過 100 筆
- 使用基於偏移量的分頁

### 索引建議
- `wishes.votes` (降序) - 用於熱門排序
- `wishes.createdAt` (降序) - 用於時間排序
- `wishes.status` - 用於狀態篩選
- `votes.userFingerprint, votes.wishId` (複合索引) - 用於防重複投票

## 安全性考量

### 防濫用機制
- API 限流：每分鐘最多 60 次請求
- 投票限流：每小時最多投票 10 次
- 建立願望限流：每小時最多建立 3 個願望

### 資料清理
- 定期清理無效的投票記錄
- 監控並移除明顯的垃圾願望
- 實施內容審核機制

## 模擬資料範例

```json
{
  "wishes": [
    {
      "id": "wish_001",
      "title": "增加寵物友善餐廳的照片上傳功能",
      "description": "希望能讓使用者上傳更豐富的寵物友善設施照片，包括寵物座位區、水碗位置、戶外空間等，讓其他飼主更清楚了解環境是否適合自己的毛孩。",
      "authorName": "愛狗人士小王",
      "votes": 90,
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-20T14:22:33Z",
      "category": "feature",
      "status": "active"
    },
    {
      "id": "wish_002",
      "title": "新增寵物醫院評價功能",
      "description": "除了餐廳，也希望整合評價寵物醫院的服務品質，包括醫師專業度、等待時間、設備新舊、收費合理性等，幫助其他飼主選擇最適合的動物醫院。",
      "authorName": "多貓家庭",
      "votes": 68,
      "createdAt": "2024-01-18T15:45:22Z",
      "updatedAt": "2024-01-23T11:30:45Z",
      "category": "feature",
      "status": "active"
    },
    {
      "id": "wish_003",
      "title": "增加寵物友善住宿推薦",
      "description": "旅行時需要帶寵物的住宿選擇太少了！希望平台也能提供寵物友善飯店、民宿的評價和推薦，包括房間大小、是否提供寵物用品、周邊環境等資訊。",
      "authorName": "旅行愛好者",
      "votes": 46,
      "createdAt": "2024-01-20T09:12:33Z",
      "updatedAt": "2024-01-24T16:55:12Z",
      "category": "feature",
      "status": "active"
    }
  ]
}
```

此規格文件提供完整的 API 實作指南，包含所有必要的資料結構、端點定義、錯誤處理與效能考量。