import { test, expect } from '@playwright/test';

test.describe('聯絡表單功能', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('聯絡表單應該包含所有必要欄位', async ({ page }) => {
    // 檢查表單欄位
    await expect(page.locator('label:has-text("姓名")')).toBeVisible();
    await expect(page.locator('input[id="name"]')).toBeVisible();
    
    await expect(page.locator('label:has-text("Email")')).toBeVisible();
    await expect(page.locator('input[id="email"]')).toBeVisible();
    
    await expect(page.locator('label:has-text("主旨")')).toBeVisible();
    await expect(page.locator('input[id="subject"]')).toBeVisible();
    
    await expect(page.locator('label:has-text("留言內容")')).toBeVisible();
    await expect(page.locator('textarea[id="message"]')).toBeVisible();
    
    await expect(page.locator('button:has-text("送出訊息")')).toBeVisible();
  });

  test('表單驗證應該正常運作', async ({ page }) => {
    // 不填寫任何內容直接提交
    await page.locator('button:has-text("送出訊息")').click();
    
    // 檢查是否有驗證訊息（HTML5 驗證）
    const nameInput = page.locator('input[id="name"]');
    const isNameInvalid = await nameInput.evaluate((el: HTMLInputElement) => !el.validity.valid);
    expect(isNameInvalid).toBe(true);
  });

  test('應該能成功填寫並提交表單', async ({ page }) => {
    // 填寫表單
    await page.fill('input[id="name"]', '測試用戶');
    await page.fill('input[id="email"]', 'test@example.com');
    await page.fill('input[id="subject"]', '測試主旨');
    await page.fill('textarea[id="message"]', '這是一個測試訊息');
    
    // 監聽對話框（alert）
    page.on('dialog', dialog => {
      expect(dialog.message()).toContain('感謝您的訊息');
      dialog.accept();
    });
    
    // 提交表單
    await page.locator('button:has-text("送出訊息")').click();
    
    // 等待處理完成
    await page.waitForTimeout(1500);
  });

  test('Email 欄位應該驗證格式', async ({ page }) => {
    // 填寫無效的 email
    await page.fill('input[id="email"]', 'invalid-email');
    await page.fill('input[id="name"]', '測試');
    
    // 嘗試提交
    await page.locator('button:has-text("送出訊息")').click();
    
    // 檢查 email 輸入是否無效
    const emailInput = page.locator('input[id="email"]');
    const isEmailInvalid = await emailInput.evaluate((el: HTMLInputElement) => !el.validity.valid);
    expect(isEmailInvalid).toBe(true);
  });

  test('常見問題應該正確顯示', async ({ page }) => {
    const faqs = [
      'Pet Talk 是免費的嗎？',
      '如何確保匿名性？',
      '支援哪些平台？',
      '如何回報不實資訊？'
    ];

    for (const faq of faqs) {
      await expect(page.locator(`text=Q: ${faq}`)).toBeVisible();
    }
  });

  test('聯絡資訊應該正確顯示', async ({ page }) => {
    // 檢查 Email
    await expect(page.locator('text=contact@pettalk.com')).toBeVisible();
    
    // 檢查回覆時間
    await expect(page.locator('text=週一至週五 9:00-18:00')).toBeVisible();
    
    // 檢查總部位置
    await expect(page.locator('text=台北市信義區')).toBeVisible();
    
    // 檢查社群連結
    await expect(page.locator('text=@pettalk_official')).toBeVisible();
    await expect(page.locator('text=Pet Talk 官方粉絲團')).toBeVisible();
  });
});