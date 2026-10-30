
import { test } from "@playwright/test"
import { readExcel } from "../PageObjectModel/utils/excelUtility.ts"
import { getRowValues } from "../PageObjectModel/utils/excelUtility.ts"
import { getCellValue } from "../PageObjectModel/utils/excelUtility.ts"
import { writeExcel } from "../PageObjectModel/utils/excelUtility.ts"


test("excel util", async() => {
    // let value=await readExcel("C:/Users/rhutuja/Desktop/PW_PM/DDT/excelfile1.xlsx","Sheet2")

    // console.log(value);

    // let value1=await getRowValues
    // ("C:/Users/vinod/OneDrive/Desktop/playwright_M18/DDT/excelfile1.xlsx","Sheet2",4)
    // console.log(value1);

    //  let value2=await getCellValue
    // ("C:/Users/vinod/OneDrive/Desktop/playwright_M18/DDT/excelfile1.xlsx","Sheet2",2,3)
    // console.log(value2);

    await writeExcel("C:/Users/vinod/OneDrive/Desktop/playwright_M18/DDT/excelfile1.xlsx","Sheet6",1,1,"Playwright")
   
})
