const { test, expect } = require('@playwright/test');
test("Home Page Test", async ({ page }) => {
    // Navigate to the home page
    await page.goto('https://demoblaze.com/');
    const pageTitle = await page.title();
    console.log(`Page title is: ${pageTitle}`);
    
    // Check if the title is correct
    await expect(page).toHaveTitle('STORE');
    
    // Check if the url is correct
    const currentUrl = page.url();
    console.log(`Current URL is: ${currentUrl}`);
    await expect(page).toHaveURL('https://demoblaze.com/');
    page.close();
    
    
})
