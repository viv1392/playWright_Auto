const{test, expect} = require('@playwright/test');

test("Bootstrap Dropdown Test", async ({ page }) => {
    // Navigate to the Bootstrap dropdown page
    await page.goto('https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/');
    await page.click('#justAnInputBox'); // Click to open the dropdown

   const options= await page.$$('div[id="comboTree388326DropDownContainer"] span.comboTreeItemTitle');
   for(const option of options){
        const value = await option.textContent();
        console.log(value); // Log the text content of each option
        if (value === 'choice 1') {
            await option.click(); // Select 'choice 1' from the dropdown
            break; // Exit the loop after selecting
        }
   } // Click to open the dropdown options

   /* await page.waitForSelector('input[type="checkbox"]'); // Wait for the dropdown to appear
    const options=await page.locator('div[id="comboTree388326DropDownContainer"] input[type="checkbox"]'); // Select all options in the dropdown
    
    const titles=options.textContent() ;// Get all dropdown options
    console.log(titles); // Log the text content of the options*/

    
    await page.waitForTimeout(3000);
    
    await page.close(); // Close the page after the test
});