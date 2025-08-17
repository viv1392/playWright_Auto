const{test, expect} = require('@playwright/test');
test.skip("Table product Test", async ({ page }) => {
    
    await page.goto('https://www.w3schools.com/sql/sql_and.asp');
   const table= await page.locator('//*[@class="ws-table-all notranslate"]');
    const rows = await table.locator('tbody tr');
    const column=await table.locator('tbody tr th'); 
    const coulmnCount=await column.count
    console.log(`Total number of columns: ${coulmnCount}`); // Log the total number of columns
    const rowCount = await rows.count();
    console.log(`Total number of rows: ${rowCount}`); // Log the total number of rows

    for (let i = 0; i < rowCount; i++) {
        const row = rows.nth(i);
        const cells = await row.locator('td');
        const cellCount = await cells.count();
        console.log(`Row ${i + 1} has ${cellCount} cells`);
        for (let j = 0; j < cellCount; j++) {
            const cell = cells.nth(j);
            const text = await cell.textContent();
            console.log(`Cell ${j + 1}: ${text}`);
        }
    }

    
    await page.waitForTimeout(3000);
    
    await page.close(); // Close the page after the test
});

test.skip("Table Interaction Test", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = await page.locator('#productTable');
    const rows = await table.locator('tbody tr');
    const rowCount = await rows.count();
    console.log(`Total number of rows: ${rowCount}`); // Log the total number of rows

    const column = await table.locator('thead tr th'); // Log the total number of columns
    const columnCount = await column.count();
    console.log(`Total number of columns: ${columnCount}`); // Log the total number of columns

   /* const productFilter=rows.filter({ 
        has: await page.locator('td'), // Filter rows that contain Product
        hasText: 'Smartwatch' // Filter rows that contain 'Product 1'
     });
     await productFilter.locator('input[type="checkbox"]').check(); // Check the checkbox in the filtered row

    */
    // Check the checkboxes for specific products using a resuable function
   await productSelection(rows, page,'Laptop');
   await productSelection(rows, page,'Smartwatch');
   await productSelection(rows, page,'Tablet '); 
   await productSelection(rows, page,'Smartphone');

    await page.waitForTimeout(5000);
    
    await page.close(); // Close the page after the test
} );

test("Table pagination test", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = await page.locator('#productTable');
    const rows = await table.locator('tbody tr');
    const rowCount = await rows.count();
    console.log(`Total number of rows: ${rowCount}`); // Log the total number of rows

    const column = await table.locator('thead tr th'); // Log the total number of columns
    const columnCount = await column.count();
    console.log(`Total number of columns: ${columnCount}`); // Log the total number of columns

    const pagination = await page.locator('.pagination li a'); // Locate the pagination element
    const paginationCount = await pagination.count();
    console.log(`Total number of pagination items: ${paginationCount}`); // Log the total number of pagination items
    // Iterate through each pagination item and log the rows in each page
    for (let p = 1; p < paginationCount; p++) {
        const pageItem =await pagination.nth(p);
        await pageItem.click(); // Click on each pagination item
        await page.waitForTimeout(2000); // Wait for the page to load after clicking

    for (let i = 0; i < rowCount; i++) {
        const row = rows.nth(i);
        const cells = await row.locator('td');
        const cellCount = await cells.count();
        console.log(`Row ${i + 1} has ${cellCount} cells`);
        for (let j = 0; j < cellCount-1; j++) {
            const cell = cells.nth(j);
            const text = await cell.textContent();
            console.log(`Cell ${j + 1}: ${text}`);
        }
    }
}

    

    await page.waitForTimeout(5000);
    
    await page.close(); // Close the page after the test
});

 // Function to check the specific cell in a row
async function productSelection(rows, page,name) {
    const productFilter=rows.filter({ 
        has: await page.locator('td'), // Filter rows that contain Product
        hasText: name // Filter rows that contain 'Product 1'
     });
    await productFilter.locator('input').check();
    }