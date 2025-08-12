//locators=> Property(Name,id ect),CSS,XPath

const { test, expect } = require('@playwright/test');
test("Locator Test", async ({ page }) => {
    // Navigate to the home page
    await page.goto('https://demoblaze.com/');
    
    // Check if the title is correct
    await expect(page).toHaveTitle('STORE');
    
    // Check if the url is correct
    await expect(page).toHaveURL('https://demoblaze.com/');

    // click action
    await page.click('id=login2'); // Click on the login button using its ID
    await page.fill('id=loginusername','pavanol')
    await page.fill('id=loginpassword','test@123'); // Fill in the username and password fields
    await page.click("//button[text()='Log in']"); // Click the login button using its text
    // Verify successful login by checking if the logout button is visible
    const logoutButton = await page.locator('id=logout2');
    await expect(logoutButton).toBeVisible(); // Assert that the logout button is visible after login

    // Close the page
    await page.close();



});