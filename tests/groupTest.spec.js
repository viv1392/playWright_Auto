const{test, expect} = require('@playwright/test');

test.describe('Group Test Suite one', () => {
    test("test one", async ({ page }) => {
        console.log("Test one executed");
    });
    test("test two", async ({ page }) => {
        console.log("Test two executed");
    });
    test("test three", async ({ page }) => {
        console.log("Test three executed");
    });
});
test.describe('Group Test Suite two', () => {
    test("test four", async ({ page }) => {
        console.log("Test four executed");
    });
    test("test five", async ({ page }) => {
        console.log("Test five executed");
    });
    test("test six", async ({ page }) => {
        console.log("Test six executed");
    });
});

   