import {test} from "@playwright/test"
import Login from "../PageObjectModel/login.page"
import data from "../DDT/jsonvalidinvalid.json"
test("pom login",async({page})=>{
    //creating object of pom class
    let LoginPage=new Login(page)
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await LoginPage.txtUsername.fill("student")
    await LoginPage.txtPassword.fill("Password123")
    await LoginPage.BtnSubmit.click()
})


test("pom+ddt login", async({page})=>{
    //creating object of pom class
    let LoginPage=new Login(page)

    for(let testdata of data.valid){
        let url=testdata.url
        let username=testdata.username
        let password=testdata.password

        await page.goto(url)
        await LoginPage.txtUsername.fill(username)
        await LoginPage.txtPassword.fill(password)
        await LoginPage.BtnSubmit.click()
    }
})