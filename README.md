# 🐾 PTalk

> 讓不會說話的牠，也能被好好守護。

PTalk 是一個寵物友善地點評價與警示平台的官方網站，致力於為毛孩家長提供安全、透明的資訊分享平台。

## ✨ 網站功能

### 🏠 首頁 (Home)
完整的品牌展示頁面，包含：
- **Hero 區塊** - 主視覺與品牌標語展示
- **品牌理念** - 深入了解我們解決的痛點與願景
- **三大核心特色** - 評價地圖、匿名發文、警示等級功能介紹
- **用戶見證** - 真實用戶回饋與評價
- **App 下載 CTA** - 引導下載 iOS/Android App

### 📱 App 功能介紹頁 (/app)
詳細展示四大核心功能：

#### 🗺️ 評價地圖
- 整合 Google Maps，快速查看附近的寵物友善地點評價
- 可依照類別篩選（醫院、美容、公園等）
- 查看其他飼主的真實評價與照片

#### 🔒 匿名發文
- 採用區塊鏈技術確保匿名性
- 讓飼主能安心分享真實體驗
- 支援文字、照片、影片上傳，並有敏感詞過濾機制

#### ⚠️ 警示等級
- 三級警示系統（綠色安全、黃色注意、紅色危險）
- 根據評價數據自動計算
- 危險地點會立即通知附近用戶

#### 🐕‍🦺 狗狗成長階段推薦
- 根據狗狗年齡、體型、品種推薦適合的活動地點
- 提供從幼犬到老犬的全方位照護建議
- 個人化的注意事項提醒

### ❤️ 關於我們頁 (/about)
深度品牌故事頁面：
- **創辦理念** - "我不想事後後悔……我要讓每一隻狗狗因為我努力過而活得更安全。"
- **品牌使命** - "讓不會說話的牠，也能被好好守護。"
- **角色介紹** - 認識我們的吉祥物角色大使

#### 🐶 角色大使介紹

**老實說狗狗**
- 個性：正義感爆棚的毛孩守護者
- 特色：對於不公不義的事情會直接開吠！熱愛分享好地方，更愛揭露爛地方
- 代表台詞：「對的我會推薦，爛的我會直接吠！」

**老實說貓貓**  
- 個性：高冷但心軟的評論家
- 特色：話不多但句句精準，看似不在乎其實比誰都關心毛孩安全
- 代表台詞：「我不多話，但我說的你最好聽清楚。」

### 📬 聯絡我們頁 (/contact)
完整的聯絡方式與服務：
- **聯絡表單** - 支援姓名、Email、主旨、留言內容
- **聯絡資訊** - Email、回覆時間、總部位置
- **社群連結** - Instagram、Facebook 官方帳號
- **常見問題** - 解答用戶最關心的問題
- **隱私權聲明** - 透明的資料使用政策

## 🎨 主要特色

### 🌓 亮暗主題切換
- 一鍵切換亮色/暗色主題
- 流暢的過渡動畫效果
- 保存用戶偏好設定

### 📱 響應式設計
- 完美適配手機、平板、桌機
- 觸控友善的操作介面
- 漢堡選單與導覽列自動適應

### 🧱 模組化架構
- 元件化設計，易於維護擴展
- TypeScript 完全類型安全
- 清晰的檔案結構與命名規範

## 🛠️ 技術架構

### 前端框架
- **Next.js 15** - React 全端框架，使用 App Router
- **TypeScript** - 類型安全的 JavaScript
- **Tailwind CSS** - 實用優先的 CSS 框架
- **shadcn/ui** - 高品質的 React 元件庫

### 開發工具
- **next-themes** - 主題切換管理
- **Lucide React** - 美觀的圖標庫
- **tailwindcss-animate** - 流暢的動畫效果

### 部署平台
- **Vercel** - 推薦的部署平台
- **GitHub Pages** - 靜態網站部署選擇

## 🚀 開始使用

### 環境需求
- Node.js 18.17 或更高版本
- npm、yarn、pnpm 或 bun

### 安裝步驟

1. **複製專案**
```bash
git clone https://github.com/你的用戶名/pet-talk-website.git
cd pet-talk-website
```

2. **安裝依賴**
```bash
npm install
# 或
yarn install
```

3. **啟動開發伺服器**
```bash
npm run dev
# 或
yarn dev
```

4. **開啟瀏覽器**
前往 [http://localhost:3000](http://localhost:3000) 查看網站

### 可用指令

```bash
npm run dev          # 啟動開發伺服器
npm run build        # 建置生產版本
npm run start        # 啟動生產伺服器
npm run lint         # 執行代碼檢查
```

## 📁 專案結構

```
src/
├── app/                    # Next.js App Router 頁面
│   ├── page.tsx           # 首頁
│   ├── app/page.tsx       # App 功能介紹頁
│   ├── about/page.tsx     # 關於我們頁
│   ├── contact/page.tsx   # 聯絡我們頁
│   ├── layout.tsx         # 根佈局（含主題提供者）
│   └── globals.css        # 全域樣式
├── components/
│   ├── layout/            # 佈局元件
│   ├── home/              # 首頁專用元件
│   ├── app-features/      # App 功能頁元件
│   ├── about/             # 關於頁元件
│   ├── contact/           # 聯絡頁元件
│   ├── ui/                # shadcn/ui 元件庫
│   └── providers/         # Context 提供者
├── lib/
│   ├── utils.ts           # 工具函數
│   └── constants.ts       # 靜態資料與常數
└── types/
    └── index.ts           # TypeScript 類型定義
```

## 🔄 自定義與擴展

### 修改內容
- **靜態資料**：編輯 `src/lib/constants.ts`
- **樣式主題**：修改 `src/app/globals.css` 的 CSS 變數
- **新增頁面**：在 `src/app/` 下建立新資料夾

### 新增元件
1. 在 `src/components/` 適當子資料夾建立元件
2. 加入 TypeScript 類型定義到 `src/types/index.ts`
3. 在相關頁面中引入使用

### 主題自定義
修改 `tailwind.config.ts` 中的顏色設定：
```typescript
theme: {
  extend: {
    colors: {
      // 自定義顏色
    }
  }
}
```

## 📞 支援與回饋

如果您有任何問題或建議，歡迎透過以下方式聯絡我們：

- **Email**: contact@pettalk.com
- **GitHub Issues**: 在本專案建立 Issue
- **社群媒體**: @pettalk_official

## 📄 授權條款

本專案採用 MIT 授權條款 - 詳見 [LICENSE](LICENSE) 檔案

## 🙏 致謝

感謝所有為寵物安全而努力的毛孩家長們，以及提供技術支援的開源社群。

---

**用十幾年的陪伴，我們守護牠的每一次選擇。** 🐾
