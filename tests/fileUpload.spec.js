const { test, expect } = require('@playwright/test');

test("Single File Upload", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Upload the file
    await page.setInputFiles('#singleFileInput', 'testFolder/Resume.pdf'); // Replace with your file path

    await page.waitForTimeout(5000);

    await page.close();
});

test.only("Multiple File Upload", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Upload multiple files
    await page.setInputFiles('#multipleFilesInput', [
        'testFolder/Resume.pdf', // Replace with your file paths
        'testFolder/Vivek_Pandey_Resume.pdf'
    ]);

    await page.waitForTimeout(5000);

    await page.close();
}); 

