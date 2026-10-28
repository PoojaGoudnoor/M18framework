import { test } from "@playwright/test";

test("standard dropdown", async ({ page }) => {

    // -------- Standard Dropdown --------

    // Navigate to the dropdown page
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0");

    // Select "India" using the option value
    // value is the value attribute of the <option>
    await page.locator("#select3").selectOption({ value: "India" });

    // Select "Jammu And Kashmir" using the visible label/text
    await page.locator("#select5").selectOption({
        label: "Jammu And Kashmir"
    });

    // Select an option based on its index
    // Index starts from 0
    await page
        .locator('(//select[@class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"])[3]')
        .selectOption({ index: 5 });

});


//Multi Select Dropdown


test("multiselect dropdown", async ({ page }) => {

    // Open the Multi Select Dropdown page
    await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")

    // Select multiple options from the native <select> dropdown
  
    //await page.locator("#select-multiple-native").selectOption([{value: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"},{value: "Mens Casual Premium Slim Fit T-Shirts"},{value: "Mens Casual Slim Fit"}])    // We can select multiple values by passing an array of objects
 await page.locator("#select-multiple-native").selectOption([{label:"Fjallraven - Foldsac..."}])
    // Selecting multiple options through keyboard actions

    await page.getByTitle("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",{ exact: true }).click(); // First, click on the first option
    await page.keyboard.press("Shift+ArrowDown");// Press Shift + ArrowDown to select the next option
    await page.keyboard.press("Shift+ArrowDown");// Press Shift + ArrowDown again to select another option
    await page.keyboard.press("Shift+ArrowDown");// Press Shift + ArrowDown again
    await page.getByRole("button", { name: "Add" }).click();// Click on the Add button
});

//custom dropdown
test("custom dropdowns", async ({ page }) => {

    await page.goto("https://www.amazon.in/s?k=shoes&crid=39QFMSSQK00F&sprefix=shoe%2Caps%2C312&ref=nb_sb_noss_2");

    // Click on the Sort By dropdown
    await page.locator("#s-result-sort-select").click({ force: true });

    // Wait for dropdown options to appear
    await page.locator('//a[@class="a-dropdown-link"]').first().waitFor();

    // Get all dropdown options
    let options = await page.locator('//a[@class="a-dropdown-link"]').all();

    // Iterate through each option
    for (let option of options) {let text = await option.textContent();// Get the text of the option
        

        // Select the option containing "Best"
        if (text?.includes("Best")) {
            await option.click();
        }
    }
});

//Using xpath

test("custom dropdowns using XPath", async ({ page }) => {

    // Open Amazon shoes search page
    await page.goto("https://www.amazon.in/s?k=shoes&crid=39QFMSSQK00F&sprefix=shoe%2Caps%2C312&ref=nb_sb_noss_2");

    // Click on the Sort By dropdown using XPath
    await page.locator('//span[@id="s-result-sort-select"]').click({force: true});

    // Wait for the first dropdown option
    await page.locator('//a[@class="a-dropdown-link"]').first().waitFor();

    // Get all dropdown options using XPath
    let options = await page.locator('//a[@class="a-dropdown-link"]').all();

    // Loop through all dropdown options
    for (let option of options) {

        // Get the text of each option
        let text = await option.textContent();

        // Check if the option contains "Best"
        if (text?.includes("Best")) {

            // Click the matching option
            await option.click();
        }
    }
});

//suggestion dropdown


test.only("autosuggest dropdown", async ({ page }) => {

    // Open Amazon
    await page.goto("https://www.amazon.in/");

    // Enter search text
    await page
        .getByPlaceholder("Search Amazon.in", { exact: true })
        .fill("shoes");

    // Wait for autosuggestion dropdown
    await page.locator('//div[@role="row"]').first().waitFor();


    // =========================
    // CASE 1: Using textContent()
    // =========================

    // let allautosugg = await page.locator('//div[@role="row"]').all();

    // for (let option of allautosugg) {

    //     let text = await option.textContent();

    //     if (text?.includes("rack")) {
    //         await option.click();
    //         break;
    //     }
    // }


    // =========================
    // CASE 2: Using keyboard
    // =========================

    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");

});