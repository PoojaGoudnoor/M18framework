import { test,expect } from "@playwright/test";

test.use({
  actionTimeout: 20000
});

test('auto waits', async ({ page }) => {
  await page.setDefaultTimeout(25000);

  await page.goto("https://practicetestautomation.com/practice-test-login/");

  await page.locator('//input[@id="username"]').fill("student")

  await page.getByLabel("Pasrd", { exact: true }).fill("Password123")

  await page.getByRole("button", {name: "Submit",exact: true}).click()
});



test('hard_coded_waits', async ({ page }) => {

  await page.waitForTimeout(2000);

  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await page.waitForTimeout(2000);

  await page.locator('//input[@id="username"]').fill('student');

  await page.waitForTimeout(2000);

  await page.getByLabel('Password', { exact: true }).fill('Password123');

  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Submit', exact: true }).click();

  await page.waitForTimeout(2000);
});






// test.only('Amazon - Search shoes and fetch first product name and price', async ({ page }) => {

//   // 1. Launch Amazon
//   await page.goto('https://www.amazon.in/');

//   // 2. Search for "shoes"
//   const searchBox = page.locator('//input[@id="twotabsearchtextbox"]');
//   await searchBox.fill('shoes');

//   await page.locator('//input[@id="nav-search-submit-button"]').click();

//   // 3. Wait for search results
//   const firstProduct = page.locator(
//     '//div[@data-component-type="s-search-result"][1]'
//   );

//   await expect(firstProduct).toBeVisible();

//   // 4. Fetch the name of the first item
//   const productName = firstProduct.locator(
//     './/h2//span'
//   );

//   await expect(productName).toBeVisible();

//   const name = await productName.textContent();

//   console.log('First Product Name:', name);

//   // Assertion - product name should not be empty
//   expect(name?.trim()).not.toBe('');

//   // 5. Fetch the price of the first item
//   const productPrice = firstProduct.locator(
//     './/span[contains(@class,"a-price")]//span[@class="a-offscreen"]'
//   );

//   await expect(productPrice).toBeVisible();

//   const price = await productPrice.textContent();

//   console.log('First Product Price:', price);

//   // Assertion - price should not be empty
//   expect(price?.trim()).not.toBe('');

// });


test('wait for navigation', async ({ page }) => {

await page.goto("https://demoapps.qspiders.com/ui?scenario=1")

// await Promise.all([
//     page.waitForNavigation(),
//     page.getByText("Check Box", { exact: true }).click()
// ]);

await Promise.all([
    page.waitForURL("https://demoapps.qspiders.com/ui/checkbox"),
    page.getByText("Check Box", { exact: true }).click()
])

await page.waitForLoadState("networkidle")
})

// load → default state → it will wait until all the HTML,
// CSS, JS, and other resources will be loaded

// domcontentloaded → it will just wait for the HTML part,
// not CSS, JS, and other resources

// networkidle → it will wait until there is no network request
// for 500ms


test("waitforEvent", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0");

    await page
        .getByPlaceholder("Enter text here", { exact: true })
        .fill("i am downloading the file");

    let [downloadFile] = await Promise.all([
        page.waitForEvent("download"),
        page.locator("#downloadButton").click()
    ]);

    console.log(await downloadFile.path());
});



// // Go to amazon 
// // Search for shoes 
// // Print the name and price of 7th product


// // Go to Amazon
// await page.goto("https://www.amazon.in/");

// // Search for shoes
// await page.getByPlaceholder("Search Amazon.in").fill("shoes");
// await page.keyboard.press("Enter");

// // Wait for search results
// await page.waitForLoadState("domcontentloaded");

// // Get the 7th product
// const product = page.locator('[data-component-type="s-search-result"]').nth(6);

// // Print product name
// const productName = await product
//     .locator("h2")
//     .innerText();

// // Print product price
// const productPrice = await product
//     .locator(".a-price-whole")
//     .innerText();

// console.log("Product Name:", productName);
// console.log("Product Price:", productPrice);

//---------------------------------------------------
test.only("custom waits", async ({ page }) => {

    await page.goto("https://www.amazon.in/");

    await page.waitForFunction(() => {
        return document.readyState === "complete";
    });
//! document.readystate--> it will check the html DOM structurethat is the element are loaded/elements are on readystate to perform actions or not
    await page
        .getByPlaceholder("Search Amazon.in", { exact: true })
        .fill("shoes");

    await page.waitForFunction(() => {
        let ele = document.querySelectorAll(".s-suggestion-container");
        return ele.length > 1;
    });

});
