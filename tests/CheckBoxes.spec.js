const{test, expect} = require('@playwright/test');
test("Check Boxes Test", async ({ page }) => {

    // Navigate to the check boxes page
    await page.goto('https://testautomationpractice.blogspot.com/');

    const checkBoxLocators= [ "//input[@type='checkbox' and @ id='tuesday']",
                              "//input[@type='checkbox' and @ id='wednesday']", 
                                "//input[@type='checkbox' and @ id='thursday']",
                                "//input[@type='checkbox' and @ id='sunday']" 
                                 ];

    for (const checkBox of checkBoxLocators) {
        await page.locator(checkBox).isVisible(); // Assert that the checkbox is visible
        await page.locator(checkBox).isEnabled(); // Assert that the checkbox is enabled
        await page.locator(checkBox).isEditable(); // Assert that the checkbox is editable
        await expect(page.locator(checkBox)).toBeChecked({ checked: false }); // Assert that the checkbox is not checked
        await page.check(checkBox); // Check the checkbox
        await expect(page.locator(checkBox)).toBeChecked(); // Assert that the checkbox is checked

    }
    await page.waitForTimeout(3000); // Wait for 3 seconds to observe the changes

    for (const checkBox of checkBoxLocators) {
        if( await page.locator(checkBox).isChecked()) {
            await page.uncheck(checkBox); // Uncheck the checkbox if it is checked
            await expect(page.locator(checkBox).isChecked).toBeFalsy(); // Assert that the checkbox is not checked
        }
    }
    await page.waitForTimeout(3000); // Wait for 3 seconds to observe the changes
    
    
});