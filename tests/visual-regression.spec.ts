import { test, expect } from '@playwright/test';

test.describe('視覺回歸測試', () => {
  test('首頁亮色主題截圖', async ({ page }) => {
    await page.goto('/');
    
    // 確保是亮色主題
    const html = page.locator('html');
    const isDark = await html.evaluate(el => el.classList.contains('dark'));
    if (isDark) {
      await page.locator('button[aria-label="切換主題"]').click();
      await page.waitForTimeout(500);
    }
    
    // 全頁截圖
    await expect(page).toHaveScreenshot('homepage-light.png', {
      fullPage: true,
      animations: 'disabled'
    });
  });

  test('首頁暗色主題截圖', async ({ page }) => {
    await page.goto('/');
    
    // 切換到暗色主題
    const html = page.locator('html');
    const isDark = await html.evaluate(el => el.classList.contains('dark'));
    if (!isDark) {
      await page.locator('button[aria-label="切換主題"]').click();
      await page.waitForTimeout(500);
    }
    
    // 全頁截圖
    await expect(page).toHaveScreenshot('homepage-dark.png', {
      fullPage: true,
      animations: 'disabled'
    });
  });

  test('手機版首頁截圖', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    await expect(page).toHaveScreenshot('homepage-mobile.png', {
      fullPage: true,
      animations: 'disabled'
    });
  });

  test('平板版首頁截圖', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    
    await expect(page).toHaveScreenshot('homepage-tablet.png', {
      fullPage: true,
      animations: 'disabled'
    });
  });

  test('各頁面亮色主題截圖', async ({ page }) => {
    const pages = [
      { url: '/app', name: 'app-features' },
      { url: '/about', name: 'about' },
      { url: '/contact', name: 'contact' }
    ];

    for (const pageInfo of pages) {
      await page.goto(pageInfo.url);
      
      // 確保是亮色主題
      const html = page.locator('html');
      const isDark = await html.evaluate(el => el.classList.contains('dark'));
      if (isDark) {
        await page.locator('button[aria-label="切換主題"]').click();
        await page.waitForTimeout(500);
      }
      
      await expect(page).toHaveScreenshot(`${pageInfo.name}-light.png`, {
        fullPage: true,
        animations: 'disabled'
      });
    }
  });

  test('手機版漢堡選單開啟截圖', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // 開啟漢堡選單
    await page.locator('button[aria-label="開啟選單"]').click();
    await page.waitForTimeout(300);
    
    await expect(page).toHaveScreenshot('mobile-menu-open.png', {
      animations: 'disabled'
    });
  });

  test('聯絡表單填寫中截圖', async ({ page }) => {
    await page.goto('/contact');
    
    // 填寫部分表單
    await page.fill('input[id="name"]', '王小明');
    await page.fill('input[id="email"]', 'test@example.com');
    await page.fill('input[id="subject"]', '關於寵物友善餐廳的建議');
    await page.fill('textarea[id="message"]', '希望能增加更多寵物友善餐廳的評價...');
    
    // 聚焦在表單上
    await page.locator('input[id="name"]').focus();
    
    await expect(page).toHaveScreenshot('contact-form-filled.png', {
      fullPage: true,
      animations: 'disabled'
    });
  });
});