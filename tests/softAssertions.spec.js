const { test, expect } = require('@playwright/test');
test("Soft Assertions Test", async ({ page }) => {
    // Navigate to the home page
    await page.goto('https://demoblaze.com/index.html');
    await expect.soft(page).toHaveURL('https://demoblaze.com/'); // Soft assertion for URL
    await expect.soft(page).toHaveTitle('STORE123'); // Soft assertion for title
    await expect.soft(page.locator('id=login2')).toBeVisible(); // Soft assertion for visibility of login button
    // Close the page
    await page.close();
});