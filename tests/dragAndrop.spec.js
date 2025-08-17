const{test, expect} = require('@playwright/test');
test("Drag and Drop Test", async ({ page }) => {
    // Navigate to the auto suggest dropdown page
    await page.goto('https://testautomationpractice.blogspot.com/');
    // Click to open the drag and drop section
    const source = await page.locator('div[id="draggable"] p'); // Locate the draggable element
    const target = await page.locator('div[id="droppable"] p'); // Locate the droppable area
    await source.dragTo(target); // Perform the drag and drop action

    
    
    await page.waitForTimeout(3000);
    
    await page.close(); // Close the page after the test
});