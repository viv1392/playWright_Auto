const { test,expect } = require('@playwright/test');

test("Multiple Locator Test", async ({ page }) => {
    // Navigate to the home page
    await page.goto('https://demoblaze.com/index.html');


   /* const links = await page.$$('a'); // Using XPath to select all anchor tags
    for (const link of links) {
        const text=link.textContent()
        const href = await link.getAttribute('href'); // Get the href attribute of each link
        console.log(`Link URL: ${href}`); // Log the URL to the console
        console.log(`Link Text: ${text}`); // Log the text of the link to the console
    }*/

     // page.waitForSelector("//h4/a"); // Wait for the product cards to be visible

   // Capturing all products that are available on the home page
    const products = await page.$$("//h4/a"); // Using Xpath to select all product
    console.log(`Total Products: ${products.length}`); // Log the total number of products
    for (const product of products) {  
        const productName = await product.textContent().trim(); // Get the product name
        console.log(`Product Name: ${productName}`); // Log the product name and price
    }
        
        
   // await page.close();
});
