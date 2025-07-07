import { test, expect } from '@playwright/test';

test.describe('網站導航功能', () => {
  test('應該能成功載入首頁', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/PTalk/);
    await expect(page.locator('h1')).toContainText('讓不會說話的牠');
  });

  test('應該能導航到所有主要頁面', async ({ page }) => {
    await page.goto('/');
    
    // 測試導航到 App 功能頁
    await page.click('text=App 功能');
    await expect(page).toHaveURL('/app');
    await expect(page.locator('h1')).toContainText('PTalk App 功能介紹');
    
    // 測試導航到關於我們頁
    await page.click('text=關於我們');
    await expect(page).toHaveURL('/about');
    await expect(page.locator('h1').first()).toContainText('關於 PTalk');
    
    // 測試導航到聯絡我們頁
    await page.click('text=聯絡我們');
    await expect(page).toHaveURL('/contact');
    await expect(page.locator('h1')).toContainText('聯絡我們');
  });

  test('Logo 點擊應該返回首頁', async ({ page }) => {
    await page.goto('/about');
    await page.locator('text=PTalk').first().click();
    await expect(page).toHaveURL('/');
  });

  test('Footer 導航連結應該正常運作', async ({ page }) => {
    await page.goto('/');
    
    // 滾動到頁尾
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // 測試 Footer 中的導航連結
    await page.locator('footer').getByText('App 功能').click();
    await expect(page).toHaveURL('/app');
  });
});