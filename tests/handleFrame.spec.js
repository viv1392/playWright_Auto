const{test, expect} = require('@playwright/test');
test.skip("Handle frame test", async ({ page }) => {
    // Navigate to the page with the frame
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const iFrame=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})// frmae by URL
    // Alternatively, you can use the frame by name or index if needed
    // const iFrame = await page.frame({ name: 'frame_1' });
    await iFrame.fill('//input[@name="mytext1"]','Vivek') ;// Wait for the frame to load
    
   

    await page.waitForTimeout(3000);
    
    await page.close(); // Close the page after the test
});

test("Handle frame test with locator", async ({ page }) => {
    // Navigate to the page with the frame
    await page.goto('https://ui.vision/demo/webtest/frames/');
 const iFrame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
 // frmae by URL
const childFrame= await iFrame3.childFrames(); 
await childFrame[0].check('//*[@id="i6"]/div[3]/div'); // Fill the input field in the frame


    await page.waitForTimeout(3000);
    
    await page.close(); // Close the page after the test
});