import { test } from "@playwright/test";
import { getRandomNumber, getRandomString } from "..PageObjectModel/utils/typescriptUtility"

test("typescript Utility", async () => {

    let data = await getRandomNumber(
        5,
        500000000, 1000000000
    );
    console.log(data);

    let data2 = getRandomString(5);
    console.log(data2 + "@gmail.com");


    let date=getCurrentDate()
    console.log(date);

    let timestamp=getTimestamp()
    console.log(timestamp);

    console.log(getDate(5));

})