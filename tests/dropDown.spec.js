const{test,expect}=require('@playwright/test');
test("Drop Down Test", async ({ page }) => {
    // Navigate to the drop down page
    await page.goto('https://testautomationpractice.blogspot.com/');
   // Method one
   /* const dropDownLocator = await page.locator('#country'); // Locate the drop down element
    await dropDownLocator.selectOption('india'); // Select 'India' from the drop down
    await expect(dropDownLocator).toHaveValue('india'); // Assert that 'India' is selected */

    // Method two
    //await page.selectOption('#country', { label: 'Australia' }); // Select 'Australia' from the drop down
    //await page.selectOption('#country', { value: 'usa' }); // Select 'USA' from the drop down

    // Method three using loop
    const options = await page.$$('#country option'); // Locate the drop down element
    let status=false
    for (const option of options) {
        const value = await option.textContent; // Get the current value of the drop down
        if (value === 'india') {
            await option.selectOption('india'); // Select 'India' from the drop down
            status = true; // If 'India' is selected, set status to true
            break; // Exit the loop if 'India' is found
        }
    }


    // Wait for 3 seconds to observe the changes
    await page.waitForTimeout(3000);
    await page.close(); // Close the page after the test
});