const { test, expect } = require('@playwright/test');
test("Home Page Test", async ({ page }) => {
    // Navigate to the home page
    await page.goto('https://demoblaze.com/');
    
    // Check if the title is correct
    await expect(page).toHaveTitle('STORE');
    
    // Check if the main heading is present
    const mainHeading = page.locator('a');
    await expect(mainHeading).toHaveText('PRODUCT STORE');
    
    // Check if the paragraph text is present
   // const paragraph = page.locator('p');
    //await expect(paragraph).toHaveText('This domain is for use in illustrative examples in documents.');
    
    // Check if the link is present and has the correct URL
   // const link = page.locator('a');
   // await expect(link).toHaveAttribute('href', 'https://www.iana.org/domains/example');
    })
