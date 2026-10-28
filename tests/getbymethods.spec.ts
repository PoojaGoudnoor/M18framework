import {test} from '@playwright/test'
test ("getbymethods",async({page})=>{
await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
await page.getByLabel("Name").fill("pooja")
await page.getByPlaceholder("Enter your Email").fill("pooja1@gmail.com")
await page.getByText("Register").last().click()
await page.getByAltText("signin").click()
// await page.goto("https://demowebshop.tricentis.com/")
// await page.getByAltText("Tricentis Demo Web Shop").click()
await page.getByText("With ToolTip").click()
await page.getByTitle("Enter your Name").fill("Pooja")
await page.goto("https://demowebshop.tricentis.com/")
await page.getByRole("button",{name:'Search'}).click();
await page.goto("https://www.saucedemo.com/")
await page.getByTestId("username").fill("pooja")
})

