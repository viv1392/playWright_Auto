const{test,expect}=require('@playwright/test');
test("Input Box and Radio Button Test", async ({ page }) => {

    // Navigate to the input box and radio button page
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.fill('#name', 'Vivek'); // Fill the input box with the name 'Vivek'
    await page.locator('#name').isEditable() ;// input box is editable
    await expect(page.locator('#name')).toBeVisible(); // input box is visible'
    await expect(page.locator('#name')).toBeEnabled(); // input box is enabled
   // await expect(page.soft.locator('#name')).toBeEmpty(); // input box is empty

    await page.check('#male'); // Check the radio button
    await expect(page.locator('#male')).toBeChecked(); // Assert that the radio button is checked and truthy
    await expect(page.locator('#female')).toBeVisible(); // Assert that female radio button is visible
    await expect(page.locator('#female')).not.toBeChecked(); //Assert that fmeale radio button is not checked


});

    
     