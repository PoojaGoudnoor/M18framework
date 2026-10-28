import { test, expect } from '@playwright/test';

test.only("Flipkart - Search and Select Shoe", async ({ page, context }) => {

    // 1. Open Flipkart application
    await page.goto("https://www.flipkart.com");
    await page.getByPlaceholder("Search for Products, Brands and More")

    // 2. Search for shoes
    const searchBox = page.locator('input[placeholder="Search for Products, Brands and More"]');

    await searchBox.fill("shoes");

    // 3. Click on Search icon
    // Since a new tab will open after clicking Search,
    // wait for the new page/tab before clicking the search icon.

    const newPagePromise = context.waitForEvent("page");

    await page.locator('button[type="submit"]').click();

    // 4. Get the newly opened tab
    const newPage = await newPagePromise;

    // Wait until the new tab is loaded
    await newPage.waitForLoadState("domcontentloaded");

    // 5. Click on the 1st shoe shown on the screen
    await newPage.locator('a').filter({has: newPage.locator('img')}).first().click();

    // 6. Wait for shoe/product page
    await newPage.waitForLoadState("domcontentloaded");

    // 7. Click on the size of the shoe
    // Example: click on size 8
    await newPage.getByText("8",{ exact: true }).click();

});