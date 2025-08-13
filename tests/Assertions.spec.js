const { test, expect } = require('@playwright/test');
const { click } = require('appium-android-driver/build/lib/commands/element');
test("Assertions Test",async({ page }) => {
    // Navigate to the home page
    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');

//await expect(locator).toBeAttached()	Element is attached

// Assert that the checkbox is checked
const checkBox=await page.locator('input[type="checkbox"]'); // Click the checkbox
await expect(checkBox).toBeChecked(); 

//await expect(locator).toBeDisabled()	Element is disabled

//await expect(locator).toBeEditable()	Element is editable

//await expect(locator).toBeEmpty()	Container is empty

// Assert that the input box is enabled

const inputBox=await page.getByPlaceholder('Search store');
await expect(inputBox).toBeEnabled(); 

//await expect(locator).toBeFocused()	Element is focused

//await expect(locator).toBeHidden()	Element is not visible

//await expect(locator).toBeInViewport()	Element intersects viewport

// Assert that the logo is visible
const logo=await page.locator("//div/a/img"); // Click the register button
await expect(logo).toBeVisible();


//await expect(locator).toContainText()	Element contains text (partial match)
const header=await page.locator('//h1'); // Click the register button
await expect(header).toContainText('Reg'); // Assert that the header contains the text 'Register'

//await expect(locator).toContainClass()	Element has specified CSS classes

//await expect(locator).toHaveAccessibleDescription()	Element has a matching accessible description

//await expect(locator).toHaveAccessibleName()	Element has a matching accessible name

//await expect(locator).toHaveAttribute()	Element has a DOM attribute

//await expect(locator).toHaveClass()	Element has specified CSS class property

//await expect(locator).toHaveCount()	List has exact number of items
const products=await page.locator("//div/label"); 
await expect(products).toHaveCount(8); 

//await expect(locator).toHaveCSS()	Element has CSS property

//await expect(locator).toHaveId()	Element has an ID
await expect(page.locator("input[id='small-searchterms']")).toHaveId('small-searchterms'); // Assert that the header has the ID 'register-header'

//await expect(locator).toHaveJSProperty()	Element has a JavaScript property

//await expect(locator).toHaveRole()	Element has a specific ARIA role

//await expect(locator).toHaveScreenshot()	Element has a screenshot

// Assert that the header has the text 	Element matches text(exact match)

await expect(page.locator('//h1')).toHaveText('Register');

//await expect(locator).toHaveValue()	Input has a value

//await expect(locator).toHaveValues()	Select has options selected

//await expect(locator).toMatchAriaSnapshot()	Element matches the Aria snapshot

//await expect(page).toHaveScreenshot()	Page has a screenshot

//await expect(page).toHaveTitle()	Page has a title
await expect(page).toHaveTitle('nopCommerce demo store. Register'); // Assert that the page title is correct


//await expect(page).toHaveURL()	Page has a URL
await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F'); // Assert that the page URL is correct

//await expect(response).toBeOK()

 


})