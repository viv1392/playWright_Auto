const{test, expect} = require('@playwright/test');
test.skip("Mouse hover", async ({ page }) => {
    // Navigate to the auto suggest dropdown page
    await page.goto('https://demo.nopcommerce.com/');
    const electronicsMenu = await page.locator('.top-menu [href="/electronics"]');
    const cellPhonesMenu = await page.locator('.top-menu [href="/cell-phones"]');

    await electronicsMenu.hover(); // Hover over the Electronics menu
    await page.waitForTimeout(1000); // Wait for the hover effect to take place
    await cellPhonesMenu.hover(); // Click on the Cell Phones submenu

    
    
    // Wait for a while to observe the result
    await page.waitForTimeout(3000);
    
    await page.close(); // Close the page after the test
});

test.skip("Double Click", async ({ page }) => {
    // Navigate to the auto suggest dropdown page
    await page.goto('https://testautomationpractice.blogspot.com/');
    const doubleClickButton = await page.locator('//button[text()="Copy Text"]'); // Locate the button to double click
    await doubleClickButton.dblclick(); // Perform a double click on the button
    
    await expect(page.locator('#field2')).toHaveValue('Hello World!'); // Assert that the text field has the expected value after double click
    // Wait for a while to observe the result
    await page.waitForTimeout(3000);
    
    await page.close(); // Close the page after the test
});

test("Right Click", async ({ page }) => {
    
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
  
    // Locate the element to right-click on
    await page.locator(".context-menu-one.btn.btn-neutral").click({ button: "right" });   
   
  
    await page.waitForTimeout(3000);
    
    await page.close(); // Close the page after the test
});