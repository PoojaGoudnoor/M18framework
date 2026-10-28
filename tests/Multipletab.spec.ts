import { test } from "@playwright/test"

test("new tab", async({browser}) => {
    //creating multiple tabs manually

    let context = await browser.newContext()
    let page = await context.newPage()

    await page.goto("https://www.amazon.in/")

    let page2 = await context.newPage()
    await page2.goto("https://www.flipkart.com/")

})
//September 29 Photo - iPhone
test.only("multiple tabs",async({browser})=>{
    let context=await browser.newContext()
    let page=await context.newPage()

    await page.goto("https://www.flipkart.com/")
    await page.locator('(//input[@class="nw1UBF v1zwn26"])[1]').fill
    ("shoes")
    await page.locator('//button[@class="XFwMiH" and @type="submit"]/*[name()="svg"]').click()

    let [page2]=await Promise.all([
        page.waitForEvent("popup"),
        page.locator('(//img[@class="MZeksS"])[1]').click()
    ])

    await page2.locator('(//div[@class="_1psv1zeb9 _1psv1ze0 _1o6mltlk1 _1o6mltlf0 _1o6mltl4y _1o6mltl9z _7dzyg24y"])[2]').click()

})