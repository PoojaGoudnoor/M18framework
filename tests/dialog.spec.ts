import {test} from "@playwright/test"

test('dialogs',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    //!event listener
    //instead of page.on if we use page.once then it will accept only 1st occurance of the dialog i.e confirmation dialog
    page.on("dialog",async(dialog)=>{
        if(dialog.type()=="alert"){
            await dialog.accept()
        }
        else if(dialog.type()=="confirm"){
            await dialog.accept()
            console.log(await dialog.message());
        }
        else if(dialog.type()=="prompt"){
            console.log(await dialog.defaultValue());
            await dialog.accept("Tommy")
        }
    })

    await page.getByRole("button",{name:"Simple Alert",exact:true}).click()

    await page.getByRole("button",{name:"Confirmation Alert",exact:true}).click()

    await page.getByRole("button",{name:"Prompt Alert",exact:true}).click()

})