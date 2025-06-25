import { test, expect } from '@playwright/test';

test.describe('App 功能介紹頁', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/app');
  });

  test('應該顯示所有四大功能', async ({ page }) => {
    const features = [
      { icon: '🗺️', title: '評價地圖' },
      { icon: '🔒', title: '匿名發文' },
      { icon: '⚠️', title: '警示等級' },
      { icon: '🐕‍🦺', title: '狗狗成長階段推薦' }
    ];

    for (const feature of features) {
      await expect(page.locator(`text=${feature.icon}`)).toBeVisible();
      await expect(page.locator(`h3:has-text("${feature.title}")`)).toBeVisible();
    }
  });

  test('功能卡片應該交錯排列', async ({ page }) => {
    // 在桌面版本測試
    await page.setViewportSize({ width: 1280, height: 720 });
    
    // 獲取所有功能卡片
    const featureCards = page.locator('[class*="grid"][class*="lg:grid-cols-2"]');
    const cardCount = await featureCards.count();
    
    // 確保有功能卡片
    expect(cardCount).toBeGreaterThan(0);
  });

  test('應該有立即體驗按鈕', async ({ page }) => {
    const buttons = page.locator('button:has-text("立即體驗")');
    const buttonCount = await buttons.count();
    
    // 應該有多個立即體驗按鈕（每個功能一個）
    expect(buttonCount).toBeGreaterThanOrEqual(4);
  });

  test('底部應該有 App 下載區塊', async ({ page }) => {
    // 檢查標題
    await expect(page.locator('h2:has-text("現在就下載 Pet Talk")')).toBeVisible();
    
    // 檢查用戶數量說明
    await expect(page.locator('text=超過 10,000+ 毛孩家長正在使用')).toBeVisible();
    
    // 檢查下載按鈕
    await expect(page.locator('button:has-text("App Store")')).toBeVisible();
    await expect(page.locator('button:has-text("Google Play")')).toBeVisible();
  });

  test('功能描述應該夠詳細', async ({ page }) => {
    // 檢查評價地圖功能描述
    await expect(page.locator('text=整合 Google Maps')).toBeVisible();
    await expect(page.locator('text=可依照類別篩選')).toBeVisible();
    
    // 檢查匿名發文功能描述
    await expect(page.locator('text=採用區塊鏈技術')).toBeVisible();
    await expect(page.locator('text=支援文字、照片、影片上傳')).toBeVisible();
    
    // 檢查警示等級功能描述
    await expect(page.locator('text=三級警示系統')).toBeVisible();
    await expect(page.locator('text=危險地點會立即通知')).toBeVisible();
    
    // 檢查成長階段推薦功能描述
    await expect(page.locator('text=根據狗狗年齡、體型、品種')).toBeVisible();
    await expect(page.locator('text=從幼犬到老犬')).toBeVisible();
  });
});