const{test, expect} = require('@playwright/test');

test("Dynamic Dropdown Test", async ({ page }) => { 
    // Navigate to the dynamic dropdown page
    await page.goto('https://testautomationpractice.blogspot.com/');

   const options=await page.locator('#colors option');
    await expect(options).toHaveCount(7);  // Assert that there are 7 options in the dropdown
    await page.selectOption('#colors',[{ label: 'Red' }, { label: 'Yellow' }, { label: 'Green' }]); // Select multiple options from the dropdown


  /* for (const option of options) {
        const value = await option.textContent;
        console.log(value); // Get the current value of the drop down  
        if (value === 'red') {
            await option.selectOption('red'); // Select 'Red' from the drop down
            break; // Exit the loop if 'Red' is found
        }*/
    

    await page.waitForTimeout(3000);
    
    await page.close(); // Close the page after the test
});