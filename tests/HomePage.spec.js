const { test, expect } = require('@playwright/test');
test("Home Page Test", async ({ page }) => {
    // Navigate to the home page
    await page.goto('https://demoblaze.com/');
    const pageTitle = await page.title();
    console.log(`Page title is: ${pageTitle}`);
    
    // Check if the title is correct
    await expect(page).toHaveTitle('STORE');
    
    // Check if the url is correct
    const currentUrl = page.url();
    console.log(`Current URL is: ${currentUrl}`);
    await expect(page).toHaveURL('https://demoblaze.com/');
    page.close();

   // Some command to run tests
   
  // npx playwright test    ==> runs all the test in headles mode
  //npx playwright test HomePage.spec.js    ==> runs only the HomePage.spec.js test file
  //npx playwright test HomePage.spec.js --headed    ==> runs the HomePage.spec in headed mode
 //npx playwright test HomePage.spec.js --headed --debug    ==> runs the HomePage.spec in headed mode with debug enabled 
 //npx playwright test HomePage.spec.js --headed --debug --project=chromium    ==> runs the HomePage.spec in headed mode with debug enabled for chromium browser
 //  npx playwright test HomePage.spec.js --headed --debug --project=chromium --grep @smoke    ==> runs the HomePage.spec in headed mode with debug enabled for chromium browser and only runs tests tagged with @smoke
 //  npx playwright test HomePage.spec.js --headed --slow mo 1000    ==> runs the HomePage.spec in headed mode with debug enabled and slows down the test execution by 1 second   
    
    
    
})
