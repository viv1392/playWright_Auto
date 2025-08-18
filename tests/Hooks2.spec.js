const{test, expect} = require('@playwright/test');

//BeforeAll and AfterAll hooks are used to set up and tear down the test environment
let page;
test.beforeAll(async ({ browser }) => { 
    page = await browser.newPage();
 // Navigate to the auto suggest dropdown page
    await page.goto('https://demoblaze.com/');
    //login
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button', { name: 'Log in' }).click();

});
test.afterAll(async () => {  
     //logout
    await page.getByRole('link', { name: 'Log out' }).click();
    // Verify successful logout by checking if the login button is visible
    const loginButton = await page.getByRole('link', { name: 'Log in' });
    await expect(loginButton).toBeVisible(); // Assert that the login button is visible after logout

   await page.waitForTimeout(3000);  
   await page.close(); // Close the page after the test
});

test("Hooks login Test", async ({ page }) => {

    //product count
    const productCount = await page.$$('.card-block');
    console.log(`Number of products: ${productCount}`);    
   
});
test("Hooks product add to cart test",async({page})=>{
    
    
    //product add to card
    await page.click('//*[@id="tbodyid"]/div[1]/div/div/h4/a');
    await page.click('.btn.btn-success.btn-lg');
    page.on("dialog",dialog=>{
        expect(dialog.message()).toBe("Product added.");
        dialog.accept();
    });

});