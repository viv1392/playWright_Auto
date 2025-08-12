const{test,expect}=require('@playwright/test');
test("Multiplelocator",async({page})=>{

    //Multiple ways to get locators are following
     //page.byAltText
     //page.getByPlaceholder
     //page.getByRole
    //page.getByLabel
    //page.getByText
    //page.getByTitle

    


    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
     // Real use of above locators
     /*page.waitForSelector("//div[@id='app']//img[@alt='company-branding']"); // Wait for the logo to be visible
    const logo= await page.getByAltText("company-branding");
    await expect(logo).toBeVisible();*/


    await page.getByPlaceholder("Username").fill("Admin");
    await page.fill("//input[@name='password']","admin123");
    await page.getByRole("button",{name:"Login"}).click();
    //page.waitForSelector("//span/p"); // Wait for the dashboard to be visible
    const name=await page.locator("//span/p").textContent();
    console.log(`Logged in as: ${name}`); // Log the name of the logged-in user
    await expect(name).toBeVisible; // Verify the name is correct


    
    

    


});