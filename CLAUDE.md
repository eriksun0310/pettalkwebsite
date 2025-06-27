# CLAUDE.md

本檔案為 Claude Code (claude.ai/code) 在此專案中工作時的指引文件。

## 重要指示
- **所有回復都必須使用繁體中文**

## 專案概述

Pet Talk - 採用 Next.js、TypeScript、Tailwind CSS 和 shadcn/ui 構建的寵物友善場所評價與警示平台網站。

## 技術架構
- **框架**: Next.js 15 with App Router
- **語言**: TypeScript
- **樣式**: Tailwind CSS
- **元件庫**: shadcn/ui
- **主題**: 使用 next-themes 的深色/淺色模式
- **圖標**: Lucide React
- **動畫**: Framer Motion（頁面過渡與交互效果）

## 開發指令
```bash
npm run dev          # 啟動開發伺服器 (http://localhost:3000)
npm run build        # 建置生產版本
npm run start        # 啟動生產伺服器
npm run lint         # 執行 ESLint 檢查
```

## 專案結構

```
src/
├── app/                     # Next.js App Router 頁面
│   ├── page.tsx            # 首頁
│   ├── app/page.tsx        # App 功能頁面
│   ├── wishes/             # 許願池功能
│   │   ├── page.tsx        # 許願池主頁面
│   │   └── wishes-client.tsx # 許願池客戶端元件
│   ├── about/page.tsx      # 關於我們頁面
│   ├── contact/page.tsx    # 聯絡我們頁面
│   ├── layout.tsx          # 根佈局含主題提供者
│   └── globals.css         # 全域樣式含主題變數
├── components/
│   ├── shared/             # 可重用共享元件
│   │   ├── FAQItem.tsx     # 問答元件
│   │   ├── FeatureGrid.tsx # 三欄特色網格
│   │   ├── AppDownloadButtons.tsx # 應用程式下載按鈕
│   │   ├── SocialLinks.tsx # 社群媒體連結
│   │   ├── BrandLogo.tsx   # Pet Talk 標誌元件
│   │   ├── PageHeader.tsx  # 頁面標題與副標題
│   │   ├── ContactItem.tsx # 聯絡資訊項目
│   │   └── index.ts        # 共享元件匯出
│   ├── layout/             # 佈局元件
│   │   ├── Header.tsx      # 導航列含主題切換
│   │   └── Footer.tsx      # 網站頁尾
│   ├── home/              # 首頁元件
│   │   ├── Hero.tsx
│   │   ├── BrandConcept.tsx
│   │   ├── Features.tsx
│   │   ├── Testimonials.tsx
│   │   └── AppDownloadCTA.tsx
│   ├── app-features/      # App 功能頁面元件
│   │   └── FeatureCard.tsx
│   ├── about/             # 關於頁面元件
│   │   ├── BrandStory.tsx
│   │   └── CharacterCard.tsx
│   ├── contact/           # 聯絡頁面元件
│   │   ├── ContactForm.tsx
│   │   └── ContactInfo.tsx
│   ├── wishes/            # 許願池元件
│   │   ├── WishCardNew.tsx      # 願望卡片元件
│   │   ├── AddWishSectionNew.tsx # 新增願望區塊
│   │   └── index.ts             # 許願池元件匯出
│   ├── ui/                # shadcn/ui 元件
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── form.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── textarea.tsx
│   │   ├── sheet.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── badge.tsx
│   │   ├── select.tsx
│   │   └── theme-toggle.tsx
│   └── providers/         # Context 提供者
│       └── theme-provider.tsx
├── contexts/              # React Context
│   └── WishContext.tsx    # 許願池資料管理
├── lib/
│   ├── utils.ts          # 工具函數 (cn helper)
│   ├── constants.ts      # 應用程式資料
│   └── wishes/           # 許願池相關
│       ├── types.ts      # 許願池類型定義
│       ├── utils.ts      # 許願池工具函數
│       └── mockData.ts   # 模擬資料
└── types/
    └── index.ts          # TypeScript 類型定義
```

## 主要功能

### 頁面
1. **首頁 (/)** - 包含英雄區塊、品牌理念、功能介紹、使用者見證、行動呼籲的登陸頁面
2. **App 功能 (/app)** - 詳細的應用程式功能展示
3. **許願池 (/wishes)** - 功能需求投票與願望提交系統
4. **關於我們 (/about)** - 品牌故事與角色介紹
5. **聯絡我們 (/contact)** - 聯絡表單與資訊

### 角色設定
- **老實說狗狗** (誠實狗) - "對的我會推薦，爛的我會直接吠！"
- **老實說貓貓** (誠實貓) - "我不多話，但我說的你最好聽清楚。"

### 核心功能
- **評價地圖** - 寵物友善場所評價與地圖
- **匿名發文** - 隱私保護的匿名評價發布
- **警示等級** - 場所安全警示系統
- **狗狗成長階段推薦** - 適齡推薦功能
- **許願池系統** - 功能需求收集與投票

### 主題系統
- 使用 next-themes 進行深色/淺色模式切換
- Header 中的主題切換按鈕
- CSS 自訂屬性作為主題變數
- 支援系統主題自動偵測

### 交互效果
- Header 導航連結 hover 效果（放大、移動、背景漸變）
- 許願池特色背景設計（淺色與暗色模式不同配色）
- 響應式設計與動畫效果

## 資料管理
- 靜態資料儲存於 `src/lib/constants.ts`
- 佔位圖片來自 placehold.co
- TypeScript 介面定義於 `src/types/index.ts`
- 許願池資料透過 React Context 管理 (`src/contexts/WishContext.tsx`)
- 模擬資料與類型定義位於 `src/lib/wishes/`

## 樣式說明
- 使用 Tailwind CSS 工具類別
- shadcn/ui 提供一致的元件樣式
- 採用行動優先的響應式設計
- 自訂主題變數確保品牌一致性
- 許願池頁面特殊漸層背景設計
- 深色模式下的文字對比度優化

## 共享元件架構

專案採用模組化元件架構以減少程式碼重複：

### 🏗️ 佈局與結構元件

- **PageLayout** - 統一頁面結構（Header + main + Footer）
- **Section** - 標準化區塊容器，支援背景色和內距變體
- **PageHeader** - 頁面標題與副標題區塊
- **ContentCard** - 統一卡片樣式，支援多種變體

### 📝 表單元件

- **FormField** - 統一表單欄位，支援 input/textarea/自訂元件
- **ButtonGroup** - 按鈕群組，支援主要與次要按鈕組合

### 🔄 可重用功能元件

- **FAQItem** - 問答格式元件
- **FeatureGrid** - 三欄特色佈局含圖標、標題、描述
- **AppDownloadButtons** - App Store 與 Google Play 下載按鈕
- **SocialLinks** - Instagram 與 Facebook 連結，可配置佈局
- **BrandLogo** - Pet Talk 標誌，可選連結
- **ContactItem** - 聯絡資訊顯示含圖標與內容

### 許願池專用元件 (`src/components/wishes/`)

- **WishCardNew** - 願望卡片元件，支援排名顯示與投票功能
- **AddWishSectionNew** - 新增願望區塊，含表單驗證

### 使用範例

#### 🏗️ 頁面結構

```tsx
import { PageLayout, Section, PageHeader } from "@/components/shared"

export default function SamplePage() {
  return (
    <PageLayout>
      <Section padding="xl">
        <PageHeader 
          title="頁面標題" 
          subtitle="副標題描述" 
        />
      </Section>
      
      <Section background="muted">
        {/* 內容區塊 */}
      </Section>
    </PageLayout>
  )
}
```

#### 📝 表單建立

```tsx
import { FormField, ButtonGroup } from "@/components/shared"

<FormField
  id="email"
  type="email"
  label="Email"
  placeholder="請輸入 Email"
  required
/>

<FormField
  id="message"
  type="textarea"
  label="留言"
  placeholder="請輸入留言..."
  rows={6}
/>

<ButtonGroup
  primaryButton={{ text: "送出", onClick: handleSubmit }}
  secondaryButton={{ text: "重設", onClick: handleReset }}
/>
```

#### 🔄 功能元件

```tsx
import { FeatureGrid, ContentCard, AppDownloadButtons } from "@/components/shared"

// 三欄特色佈局
const features = [
  { icon: "🎯", title: "標題", description: "描述" }
]
<FeatureGrid features={features} />

// 內容卡片
<ContentCard variant="muted" padding="lg">
  <h3>卡片標題</h3>
  <p>卡片內容...</p>
</ContentCard>

// 下載按鈕
<AppDownloadButtons variant="secondary" />
```

### 此架構的優勢

1. **DRY 原則** - 消除跨頁面的程式碼重複
2. **一致性** - 確保統一的 UI 模式
3. **可維護性** - 共享元件的變更會自動更新到所有地方
4. **型別安全** - TypeScript 介面確保正確的 prop 使用
5. **可重用性** - 元件可輕鬆重用於新功能
6. **響應式設計** - 所有元件支援行動與桌面裝置
7. **主題支援** - 完整的深色/淺色模式支援

## 新增功能指南

### 📋 開發檢查清單

1. **優先使用共享元件**
   - 檢查 `src/components/shared/` 中是否已有所需的 UI 模式
   - 優先使用 `PageLayout`、`Section`、`FormField` 等佈局元件
   - 避免重複的 section/container 結構

2. **建立新元件**
   - 如需新功能，優先考慮是否可建立共享元件
   - 在 `src/components/shared/` 建立可重用元件
   - 在 `src/components/shared/index.ts` 中匯出新元件
   - 提供完整的 TypeScript 介面

3. **資料管理**
   - 將靜態資料加入 `src/lib/constants.ts`
   - 在 `src/types/index.ts` 中定義 TypeScript 類型
   - 考慮是否需要 Context 或其他狀態管理

4. **樣式與互動**
   - 確保深色/淺色模式相容性
   - 添加適當的 hover 效果與動畫
   - 遵循響應式設計原則

### 🚫 避免的反模式

- **禁止** 直接使用 `<Header />` + `<Footer />` 包裝，請使用 `<PageLayout>`
- **禁止** 重複的 `<section className="py-20"><div className="container..."`，請使用 `<Section>`
- **禁止** 重複的表單欄位結構，請使用 `<FormField>`
- **禁止** 建立功能相似的重複元件
- **禁止** 在沒有檢查共享元件的情況下建立新元件

## 許願池功能特色

### 核心功能
- **投票系統** - 使用者可對功能需求進行投票
- **排名顯示** - 依票數自動排序，前三名有特殊視覺效果
- **願望提交** - 使用者可提交新的功能需求
- **即時更新** - 使用 React Context 管理狀態

### 視覺設計
- **漸層背景** - 粉紅-橙-黃漸層營造溫暖氛圍
- **排名徽章** - 前三名有獎杯、獎牌、獎章圖標
- **響應式卡片** - 支援桌面與行動裝置的最佳顯示
- **暗色模式適配** - 文字對比度優化確保可讀性

### 技術實作
- **Context API** - 統一管理許願池狀態
- **Local Storage** - 記住使用者投票狀態
- **表單驗證** - 使用 react-hook-form + zod 驗證
- **動畫效果** - 卡片 hover 與按鈕交互效果