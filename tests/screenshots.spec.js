const{test, expect} = require('@playwright/test');

    test('Take a screenshot of the page', async ({ page }) => {
        // Navigate to the page
        await page.goto('https://demoblaze.com/');
        
        // Take a screenshot
        await page.screenshot({path: `screenShots/${Date.now()}_homePage.png`});
        
        // Verify the screenshot was taken
        const screenshot = await page.screenshot();
        expect(screenshot).toBeDefined();
    });

    test('Take a screenshot of an element', async ({ page }) => {
        // Navigate to the page
        await page.goto('https://demoblaze.com/');
        
        // Locate the element
        const element = await page.locator('//*[@id="tbodyid"]/div[1]/div');
        
        // Take a screenshot of the element
        await element.screenshot({ path: `screenShots/${Date.now()}_element-screenshot.png` });
        
        // Verify the screenshot was taken
        const elementScreenshot = await element.screenshot();
        expect(elementScreenshot).toBeDefined();
    });

    test('Take a full page screenshot', async ({ page }) => {
        // Navigate to the page
        await page.goto('https://demoblaze.com/');
        
        // Take a full page screenshot
        await page.screenshot({ path: `screenShots/${Date.now()}_fullPageScreenshot.png`, fullPage: true });
        
        // Verify the screenshot was taken
        const fullPageScreenshot = await page.screenshot({ fullPage: true });
        expect(fullPageScreenshot).toBeDefined();
    });    

    //voideo recording and screeshots can be enabled in playwright.config.js
    // Uncomment the following lines to enable video recording and screenshots  
    // screenshot: 'on',
    // video: 'on',
    //no need to write the code for video recording in the test file, it will be handled by playwright.config.js
    // You can find the video files in the 'videos' directory after running the tests
    