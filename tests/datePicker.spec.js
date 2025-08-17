const{test, expect} = require('@playwright/test');
test("Date picker Test", async ({ page }) => {
    // Navigate to the auto suggest dropdown page
    await page.goto('https://testautomationpractice.blogspot.com/');
    // Define the date to be selected
    // const date = 'September 18, 2026'; // Example date

    const year=2026;
    const month='September';
    const day=18;
    await page.click('#datepicker'); // Click to open the date picker
    //await page.fill('#datepicker', `${month} ${day}, ${year}`); // Simple way to fill the date input field
    const yearPicker=await page.locator('ui-datepicker-year'); // Click the date picker trigger
    const monthPicker=await page.locator('ui-datepicker-month'); // Click the date picker trigger
    const nextButton=await page.locator('//span[text()="Next"]'); // Click the date picker trigger
    const dayButton=await page.locator(`td .ui-state-default`); // Click the date picker trigger
    while (true) {
        const currentYear = await yearPicker.textContent();
        const currentMonth = await monthPicker.textContent();
        
        if (currentYear === String(year) && currentMonth === month) {
            break; // Exit the loop if the desired year and month are found
        }
        
        await nextButton.click();
        
        if(await dayButton.textContent===day){
            await dayButton.click// Click the next button to navigate to the next month
        }
    }

    // Wait for a while to observe the result
    await page.waitForTimeout(3000);
    
    await page.close(); // Close the page after the test
});