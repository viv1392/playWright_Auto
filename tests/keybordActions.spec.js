const { test, expect } = require('@playwright/test');

test("Keyboard Action Test", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.fill('#input1', 'India');

    // Select all text in input1
    await page.click('#input1');
    await page.keyboard.press('Control+A');

    // Copy selected text
    await page.keyboard.press('Control+C');

    // Paste into input2
    await page.click('#input2');
    await page.keyboard.press('Control+V');

    await page.waitForTimeout(3000);
    await page.close();
});