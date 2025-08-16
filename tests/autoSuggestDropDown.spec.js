const{test, expect} = require('@playwright/test');

test("Auto suggest drop down Test", async ({ page }) => { 
    // Navigate to the auto suggest dropdown page
    await page.goto('https://demo.automationtesting.in/AutoComplete.html');
    await page.fill('.ui-autocomplete-input','India'); // Fill the source input field
    

    

    await page.waitForTimeout(3000);
    
    await page.close(); // Close the page after the test
});