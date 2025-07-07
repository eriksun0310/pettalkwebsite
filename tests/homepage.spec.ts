import { test, expect } from '@playwright/test';

test.describe('首頁內容', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Hero 區塊應該包含正確的內容', async ({ page }) => {
    // 檢查主標語
    await expect(page.locator('h1')).toContainText('讓不會說話的牠，也能被好好守護。');
    
    // 檢查副標語
    await expect(page.locator('text=用十幾年的陪伴，我們守護牠的每一次選擇。')).toBeVisible();
    
    // 檢查 CTA 按鈕
    await expect(page.locator('button:has-text("立即下載 App")')).toBeVisible();
    await expect(page.locator('button:has-text("了解更多")')).toBeVisible();
    
    // 檢查角色圖示
    await expect(page.locator('text=🐕')).toBeVisible();
    await expect(page.locator('text=🐱')).toBeVisible();
  });

  test('品牌理念區塊應該顯示三個痛點', async ({ page }) => {
    const painPoints = [
      { icon: '😰', title: '資訊不透明' },
      { icon: '🤐', title: '不敢說真話' },
      { icon: '⏰', title: '後悔來不及' }
    ];

    for (const point of painPoints) {
      await expect(page.locator(`text=${point.icon}`)).toBeVisible();
      await expect(page.locator(`text=${point.title}`)).toBeVisible();
    }

    // 檢查願景區塊
    await expect(page.locator('text=我們的願景')).toBeVisible();
  });

  test('三大核心功能應該正確顯示', async ({ page }) => {
    const features = [
      { icon: '🗺️', title: '評價地圖' },
      { icon: '🔒', title: '匿名發文' },
      { icon: '⚠️', title: '警示等級' }
    ];

    for (const feature of features) {
      await expect(page.locator(`text=${feature.icon}`)).toBeVisible();
      await expect(page.locator(`text=${feature.title}`)).toBeVisible();
    }
  });

  test('用戶見證區塊應該包含評價', async ({ page }) => {
    // 檢查標題
    await expect(page.locator('text=用戶真實回饋')).toBeVisible();
    
    // 檢查至少有一個見證卡片
    const testimonialCards = page.locator('[class*="card"]').filter({ hasText: '感謝 PTalk' });
    await expect(testimonialCards).toHaveCount(1);
    
    // 檢查評分星星
    const stars = page.locator('text=⭐');
    const starCount = await stars.count();
    expect(starCount).toBeGreaterThan(0);
  });

  test('App 下載 CTA 區塊應該包含正確內容', async ({ page }) => {
    // 滾動到底部
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // 檢查標題
    await expect(page.locator('h2:has-text("立即下載 PTalk")')).toBeVisible();
    
    // 檢查下載按鈕
    await expect(page.locator('button:has-text("App Store")').last()).toBeVisible();
    await expect(page.locator('button:has-text("Google Play")').last()).toBeVisible();
    
    // 檢查支援平台說明
    await expect(page.locator('text=支援 iOS 14+ 與 Android 8+')).toBeVisible();
  });
});