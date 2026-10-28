import { test, expect } from '@playwright/test';

test('Add product to cart', async ({ page }) => {

  // Step 1: Open the URL
  await page.goto('https://demoapps.qspiders.com/ui/browser?sublist=0');

  // Step 2: Click on "View More" button await page.getByText('View More', { exact: true }).click();
  
  await page.locator('button.mt-4.px-4.py-2').click();


  // Step 3: Click on "Add to Cart"

  await page.getByRole('button', { name: 'Add to Cart' }).click();

});


test("example1",async({browser})=>{
    let context=await browser.newContext()
    let page=await context.newPage()
    await page.goto('https://demoapps.qspiders.com/ui/browser/newTab?sublist=1')

    let [page2]=await Promise.all([
        page.waitForEvent("popup"),
        page.getByRole("button",{name:"view more"}).first().click()
    ])

    await page2.getByRole("button",{name:"Add to Cart"}).click()

    let cartele=await page2.locator('//article').last()

    let cartcount=parseInt(await cartele.textContent() || "0")


    await expect(cartcount).toBeGreaterThan(0)
})

// one more task - same as above task/code write code for new window

test.only("frame intro", async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    await page.locator('[name="mytext1"]').fill("hello")
})