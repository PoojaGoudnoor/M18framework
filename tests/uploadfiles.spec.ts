import { test, expect } from '@playwright/test';
import * as path from "path"
test('upload files',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

//     // //!---------Approach 1---------
//     // //! single file upload
//     // await page.locator("#singleFileInput").setInputFiles("C:/Users/vinod/OneDrive/Desktop/playwright_M18/tests/demo1.text/")

//     // await page.getByRole('button',{name:"Upload Single File", exact:true}).click()

//     // //!multiple file
//     // await page.locator('#multipleFilesInput').setInputFiles(["C:/Users/vinod/OneDrive/Desktop/playwright_M18/tests/demo1.text", "C:/Users/vinod/OneDrive/Desktop/playwright_M18/tests/demo.txt"])

//     // await page.getByRole('button',{name:"Upload Multiple Files", exact:true}).click()


//     //-------------Approch 2--------------------//
    
//     await page.locator('#singleFileInput').setInputFiles(path.join(__dirname,"demo.txt"))

//     await page.getByRole('button',{name:"Upload Single File", exact:true}).click()

//     await page.locator('#multipleFilesInput').setInputFiles([path.join(__dirname,"demo.txt"),path.join(__dirname,"demo1.txt")]) -- //path.join is used only when the file is present in project folder i.e playwright tests folder

//     await page.getByRole('button',{name:"Upload Multiple Files", exact:true}).click()


//     // await page.locator('#multipleFilesInput').setInputFiles(["C:/Users/vinod/OneDrive/Desktop/playwright_M18/tests/demo1.text", "C:/Users/vinod/OneDrive/Desktop/playwright_M18/tests/demo.txt"])

//     // await page.getByRole('button',{name:"Upload Multiple Files", exact:true}).click()
//Approach 3


await page.locator('#singleFileInput').setInputFiles("C:/Users/vinod/Downloads/Pooja Goudnoor Resume (1).docx")
await page.getByRole('button',{name:"Upload Single File", exact:true}).click()



//await page.locator('#multipleFilesInput').setInputFiles("C:/Users/vinod/Downloads/Pooja Goudnoor Resume (1).docx")
await page.locator('#multipleFilesInput').setInputFiles ([("C:/Users/vinod/Downloads/Pooja Goudnoor Resume (1).docx"),("C:/Users/vinod/Downloads/PoojaGoudnoor_Senior Test Engineer_CV.docx")])

await page.getByRole('button',{name:"Upload Multiple Files", exact:true}).click()

await expect(page.getByText('singleFileInput')).not.toBeVisible()

})