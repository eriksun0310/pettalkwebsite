import { test, expect } from '@playwright/test';

test.describe('主題切換功能', () => {
  test('應該能切換亮暗主題', async ({ page }) => {
    await page.goto('/');
    
    // 檢查初始狀態（預設應該是亮色主題）
    const htmlElement = page.locator('html');
    
    // 點擊主題切換按鈕
    const themeToggle = page.locator('button').filter({ has: page.locator('svg') }).last();
    await themeToggle.click();
    
    // 等待主題切換完成
    await page.waitForTimeout(500);
    
    // 檢查是否切換到暗色主題
    await expect(htmlElement).toHaveClass(/dark/);
    
    // 再次點擊切換回亮色主題
    await themeToggle.click();
    await page.waitForTimeout(500);
    
    // 檢查是否切換回亮色主題
    await expect(htmlElement).not.toHaveClass(/dark/);
  });

  test('主題應該在所有頁面保持一致', async ({ page }) => {
    await page.goto('/');
    
    // 切換到暗色主題
    await page.locator('button').filter({ has: page.locator('svg') }).last().click();
    await page.waitForTimeout(500);
    
    // 導航到其他頁面
    await page.click('text=關於我們');
    
    // 檢查主題是否保持
    const htmlElement = page.locator('html');
    await expect(htmlElement).toHaveClass(/dark/);
  });

  test('主題切換應該改變背景和文字顏色', async ({ page }) => {
    await page.goto('/');
    
    // 獲取初始顏色
    const bodyElement = page.locator('body');
    const initialBgColor = await bodyElement.evaluate(el => 
      window.getComputedStyle(el).backgroundColor
    );
    
    // 切換主題
    await page.locator('button').filter({ has: page.locator('svg') }).last().click();
    await page.waitForTimeout(500);
    
    // 獲取切換後的顏色
    const newBgColor = await bodyElement.evaluate(el => 
      window.getComputedStyle(el).backgroundColor
    );
    
    // 確認顏色有改變
    expect(initialBgColor).not.toBe(newBgColor);
  });
});