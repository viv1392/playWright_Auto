const{test, expect} = require('@playwright/test');

test('Trace Test', async ({ page }) => {
    await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('div:nth-child(3) > .card > a').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await page.getByRole('row', { name: 'Samsung galaxy s6 360 Delete' }).getByRole('link').click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByRole('textbox', { name: 'Total: 650 Name:' }).click();
  await page.getByRole('textbox', { name: 'Total: 650 Name:' }).fill('Vivek');
  await page.getByRole('textbox', { name: 'Country:' }).click();
  await page.getByRole('textbox', { name: 'Country:' }).fill('India');
  await page.getByRole('textbox', { name: 'City:' }).click();
  await page.getByRole('textbox', { name: 'City:' }).fill('Ayodhya');
  await page.getByRole('textbox', { name: 'Credit card:' }).click();
  await page.getByRole('textbox', { name: 'Credit card:' }).fill('5566447733445566');
  await page.getByRole('textbox', { name: 'Month:' }).click();
  await page.getByRole('textbox', { name: 'Month:' }).fill('08');
  await page.getByRole('textbox', { name: 'Year:' }).click();
  await page.getByRole('textbox', { name: 'Year:' }).fill('2028');
});
//Trace can be enabled in playwright.config.js
// Uncomment the following lines to enable trace collection 
// trace: 'on',
// You can view the trace files in the 'traces' directory after running the tests
// To view the trace, use the command: npx playwright show-trace traces/<trace-file-name>.zip
// This will open the trace viewer in your browser where you can see the steps taken during the test execution