const{test, expect} = require('@playwright/test');
test.skip("Alert tests", async ({ page }) => {
    // 
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog with ok button', async dialog => {
        await expect(dialog.message()).toBe('I am an alert box!');
       await expect(dialog.type()).toBe('alert');
       await dialog.accept();   
    });
    await page.click('#alertBtn'); // Click to trigger the alert dialog
    await page.waitForTimeout(3000);
    
    await page.close(); // Close the page after the test
});

test.skip("Confirm alert tests", async ({ page }) => {
    // 
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog with ok button', async dialog => {
        await expect(dialog.message()).toBe('Press a button!');
        await expect(dialog.type()).toBe('confirm');
        await dialog.accept();   
    });
    await page.click('#confirmBtn'); // Click to trigger the confirm dialog
    await page.waitForTimeout(3000);
    
    await page.close(); // Close the page after the test
});

test("Prompt alert tests", async ({ page }) => {
    // 
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog with ok button', async dialog => {
         expect(dialog.message()).toBe('Please enter your name');
         expect(dialog.defaultValue()).toBe('Harry Potter');
         expect(dialog.type()).toBe('prompt');
        await dialog.accept('Vivek'); // Accept the prompt with a value
    });
    await page.click('#promptBtn'); 
    await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello Vivek! How are you today?'); // Click to trigger the prompt dialog
    await page.waitForTimeout(3000);
    
    await page.close(); // Close the page after the test
});