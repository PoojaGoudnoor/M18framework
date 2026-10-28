import { test } from "@playwright/test";
import data from "../DDT/jsonvalidinvalid.json";

test("Single set", async () => {
    // console.log(data.greet);
    // console.log(data.subject);
})

// test("multiple json object in array", async () => {
//     data.forEach((d) => {
//         console.log(d.greet);
//     })
// })

test("for application--> single set of data", async ({page})=>{
    // await page.goto(data.url)
    // await page.getByLabel("Username",{exact:true}).fill(data.username)
    // await page.getByLabel("Password",{exact:true}).fill(data.password)

    // await page.getByRole("button",{name:"Submit",exact:true}).click()
})

test("for application--> multiple set",async ({page})=>{

    for(let testdata of data){
        let url=testdata.url
        let username=testdata.username
        let password=testdata.password

        await page.goto(url)
        await page.getByLabel("Username",{exact:true}).fill(username)
        await page.getByLabel("Password",{exact:true}).fill(password)

        await page.getByRole("button",{name:"Submit",exact:true}).click()
    }
})


test.only("for application--> invalid set", async ({page}) => {

    for(let testdata of data.invalid){
        let url=testdata.url
        let username=testdata.username
        let password=testdata.password

        await page.goto(url)
        await page.getByLabel("Username",{exact:true}).fill(username)
        await page.getByLabel("Password",{exact:true}).fill(password)

        await page.getByRole("button",{name:"Submit",exact:true}).click()
    }

})

test.only("for application--> valid set",async({page})=>{
    for(let testdata of data.valid){
        let url=testdata.url
        let username=testdata.username
        let password=testdata.password
        await page.goto(url)
        await page.getByLabel("Username",{exact:true}).fill(username)
        await page.getByLabel("Password",{exact:true}).fill(password)
        await page.getByRole("button",{name:"Submit",exact:true}).click()
    }
})