import { test, expect } from '@playwright/test';

test.describe('響應式設計', () => {
  test('手機版應該顯示漢堡選單', async ({ page }) => {
    // 設定手機視窗大小
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // 檢查漢堡選單是否可見
    const hamburgerMenu = page.locator('button[aria-label="開啟選單"]');
    await expect(hamburgerMenu).toBeVisible();
    
    // 檢查桌面導航選單應該隱藏
    const desktopNav = page.locator('nav').filter({ hasText: 'App 功能' }).first();
    await expect(desktopNav).toBeHidden();
  });

  test('手機版漢堡選單應該能開啟側邊欄', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // 點擊漢堡選單
    await page.locator('button[aria-label="開啟選單"]').click();
    
    // 檢查側邊欄是否打開
    const sheet = page.locator('[role="dialog"]');
    await expect(sheet).toBeVisible();
    
    // 檢查選單項目
    await expect(sheet.locator('text=首頁')).toBeVisible();
    await expect(sheet.locator('text=App 功能')).toBeVisible();
    await expect(sheet.locator('text=關於我們')).toBeVisible();
    await expect(sheet.locator('text=聯絡我們')).toBeVisible();
  });

  test('桌面版應該隱藏漢堡選單', async ({ page }) => {
    // 設定桌面視窗大小
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');
    
    // 檢查漢堡選單應該隱藏
    const hamburgerMenu = page.locator('button[aria-label="開啟選單"]');
    await expect(hamburgerMenu).toBeHidden();
    
    // 檢查桌面導航選單應該可見
    const desktopNav = page.locator('nav').filter({ hasText: 'App 功能' }).first();
    await expect(desktopNav).toBeVisible();
  });

  test('功能卡片應該在手機版垂直排列', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // 取得所有功能卡片
    const featureCards = page.locator('[class*="grid"] > [class*="space-y-4"]');
    const cardCount = await featureCards.count();
    
    // 確保有功能卡片存在
    expect(cardCount).toBeGreaterThan(0);
    
    // 檢查卡片是否垂直排列（每個卡片的 Y 座標應該不同）
    if (cardCount > 1) {
      const firstCardBox = await featureCards.nth(0).boundingBox();
      const secondCardBox = await featureCards.nth(1).boundingBox();
      
      if (firstCardBox && secondCardBox) {
        expect(firstCardBox.y).not.toBe(secondCardBox.y);
      }
    }
  });

  test('App 下載按鈕應該在手機版垂直排列', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // 滾動到 App 下載區塊
    await page.evaluate(() => {
      const element = document.querySelector('text=立即下載 Pet Talk');
      element?.scrollIntoView();
    });
    
    // 找到 App Store 和 Google Play 按鈕
    const appStoreBtn = page.locator('button:has-text("App Store")');
    const googlePlayBtn = page.locator('button:has-text("Google Play")');
    
    // 獲取按鈕位置
    const appStoreBox = await appStoreBtn.boundingBox();
    const googlePlayBox = await googlePlayBtn.boundingBox();
    
    // 確認按鈕垂直排列（Y座標不同，X座標相近）
    if (appStoreBox && googlePlayBox) {
      expect(appStoreBox.y).not.toBe(googlePlayBox.y);
      expect(Math.abs(appStoreBox.x - googlePlayBox.x)).toBeLessThan(50);
    }
  });
});