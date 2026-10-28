import {test,expect} from "@playwright/test"

test("frame intr",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    // await page.locator('[name="mytext1"]').fill("hello")

    //!APPROACH 1-->
    // await page.frameLocator('//frame[@src="frame_1.html"]').locator('[name="mytext1"]')
    // .fill("hello")

    let frame1=await page.frameLocator('//frame[@src="frame_1.html"]')
    await frame1.locator('[name="mytext1"]').fill("hello")


    //!APPROACH 2-->
    let frame2=await page.locator('//frame[@src="frame_2.html"]').contentFrame()
    await frame2.locator('[name="mytext2"]').fill('bye')

    //? Do for frame5 and frame4

    let frame5=await page.frameLocator('//frame[@src="frame_5.html"]')
    await frame5.locator('[name="mytext5"]').fill("Hi")

    let frame4=await page.frameLocator('//frame[@src="frame_4.html"]')
    await frame4.locator('[name="mytext4"]').fill("yellow")


})

test.only("nested frame",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    let frame3=await page.frameLocator('//frame[@src="frame_3.html"]')
    await frame3.locator('[name="mytext3"]').fill("hello")


    let innerframe=await frame3.frameLocator('//iframe').locator('(//div[@class="AB7Lab Id5V1"])[2]')
    await innerframe.check()


    await expect(innerframe).toBeChecked()


})

