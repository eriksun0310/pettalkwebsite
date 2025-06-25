import { test, expect } from '@playwright/test';

test.describe('關於我們頁', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about');
  });

  test('應該顯示品牌故事', async ({ page }) => {
    // 檢查標題
    await expect(page.locator('h2:has-text("我們的故事")')).toBeVisible();
    
    // 檢查創辦人名言
    await expect(page.locator('text=我不想事後後悔……我要讓每一隻狗狗因為我努力過而活得更安全。')).toBeVisible();
    
    // 檢查品牌使命
    await expect(page.locator('text=讓不會說話的牠，也能被好好守護。')).toBeVisible();
  });

  test('應該顯示兩個角色大使', async ({ page }) => {
    // 檢查標題
    await expect(page.locator('h2:has-text("認識我們的角色大使")')).toBeVisible();
    
    // 檢查老實說狗狗
    await expect(page.locator('h3:has-text("老實說狗狗")')).toBeVisible();
    await expect(page.locator('text=對的我會推薦，爛的我會直接吠！')).toBeVisible();
    await expect(page.locator('text=正義感爆棚的毛孩守護者')).toBeVisible();
    
    // 檢查老實說貓貓
    await expect(page.locator('h3:has-text("老實說貓貓")')).toBeVisible();
    await expect(page.locator('text=我不多話，但我說的你最好聽清楚。')).toBeVisible();
    await expect(page.locator('text=高冷但心軟的評論家')).toBeVisible();
  });

  test('應該顯示三個承諾', async ({ page }) => {
    const commitments = [
      { icon: '🔒', title: '隱私保護' },
      { icon: '✅', title: '資訊真實' },
      { icon: '❤️', title: '持續改善' }
    ];

    // 檢查標題
    await expect(page.locator('h2:has-text("我們的承諾")')).toBeVisible();
    
    // 檢查每個承諾
    for (const commitment of commitments) {
      await expect(page.locator(`text=${commitment.icon}`)).toBeVisible();
      await expect(page.locator(`h3:has-text("${commitment.title}")`)).toBeVisible();
    }
  });

  test('角色卡片應該有圖片佔位符', async ({ page }) => {
    // 檢查圖片元素
    const images = page.locator('img[alt*="老實說"]');
    const imageCount = await images.count();
    
    // 應該有兩張角色圖片
    expect(imageCount).toBe(2);
    
    // 檢查圖片是否正確載入
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      await expect(img).toBeVisible();
      
      // 檢查圖片 src 屬性
      const src = await img.getAttribute('src');
      expect(src).toContain('placehold.co');
    }
  });

  test('頁面應該有正確的層次結構', async ({ page }) => {
    // 檢查頁面標題
    await expect(page.locator('h1:has-text("關於 Pet Talk")')).toBeVisible();
    
    // 檢查副標題
    await expect(page.locator('text=用科技與愛心，打造毛孩安全的網路世界')).toBeVisible();
    
    // 檢查各區塊順序
    const sections = [
      '我們的故事',
      '認識我們的角色大使',
      '我們的承諾'
    ];
    
    let previousY = 0;
    for (const section of sections) {
      const element = page.locator(`h2:has-text("${section}")`);
      const box = await element.boundingBox();
      if (box) {
        expect(box.y).toBeGreaterThan(previousY);
        previousY = box.y;
      }
    }
  });
});