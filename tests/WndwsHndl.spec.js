import { test, expect} from '@playwright/test';

test('Windows handle Test',async({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    expect(page.title('OrangeHRM'));
    const pagePromise=context.waitForEvent('page');
    await page.click('//p/a');
    expect(page.title('Human Resources Management Software | HRMS | OrangeHRM'));
    page.close;

});