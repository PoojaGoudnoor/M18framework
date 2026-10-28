
//Keyboard actions

/**
 * check() --> used to check the checkbox or radio button
 * uncheck() --> used to uncheck the checkbox
 */

import { test,expect } from "@playwright/test";

test('checkbox and radiobutton actions', async ({ page }) => {

    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0");

    await page.locator("#domain_a").check();
    await page.locator("#domain_b").check();

    await page.locator("#domain_a").uncheck();

});



/**1. press()
 * 2. insertText()
 * 3. type()
 * 4. down()
 * 5. up()
 * 
 */


// import { test } from "@playwright/test";

test("type(), insertText()", async ({ page }) => {

    // Navigate to the required webpage
    await page.goto("https://demoapps.qspiders.com/ui?scenario-1");

    // Find the placeholder "Enter your name"
    // exact:true means it will look for the exact placeholder text
    await page.getByPlaceholder("Enter your name", { exact: true }).click();

    // type() is used to fill the text in human-like format
    // It works when the element is focused
    await page.keyboard.type("john");

    // insertText() is used to fill the text in the focused element
    // It inserts the complete text at once
    await page.keyboard.insertText("demo");

    // Select all the text
    await page.keyboard.press("Control+A"); // selection of all text

    // Copy all the selected text
    await page.keyboard.press("Control+C"); // copy all selected text

    // Press the Tab key
    await page.keyboard.press("Tab");

    // press() is used to press a keyboard key
    // It can also be used for a combination of keys
    await page.keyboard.press("Control+V"); // Paste the copied text

    // down() --> Press the keyboard key but do not release it
    await page.keyboard.down("Tab");

    // up() --> Release the currently pressed keyboard key
    await page.keyboard.up("Tab");

    // Insert text using the keyboard
    await page.keyboard.insertText("123");

    // Locate the span element using XPath and click on it
    // await page.locator('//span[@class="absolute text-slate-600 text-[18px] bg-gray-100"]').click(); // Trainer given xpath

   await page.locator('//*[@id="demoUI"]/main/section/article[1]/aside/article/aside[2]/div/div/form/div[3]/section/span/span').click(); // I have copied the xpath from inspect
});


//Task chatgpt

test("Keyboard actions - Login", async ({ page }) => {

    // 1. Launch the application
    await page.goto("https://practicetestautomation.com/practice-test-login/");

    // 2. Fill "student stud" in the username field
    await page.getByLabel("Username").fill("student stud");

    // 3. Press SPACE without using press() method
    // keyboard.down() presses and holds the Space key
    await page.keyboard.down(" ");

    // keyboard.up() releases the Space key
    await page.keyboard.up(" ");

    // 4. Fill "student stud" letter by letter
    // keyboard.type() types the text character by character
    await page.locator("#username").click();
    await page.keyboard.type("student stud");

    // 5. Select the complete username
    await page.keyboard.down("Control");
    await page.keyboard.press("A");
    await page.keyboard.up("Control");

    // 6. Copy the selected username
    await page.keyboard.down("Control");
    await page.keyboard.press("C");
    await page.keyboard.up("Control");

    // 7. Go to the password field
    await page.locator("#password").click();

    // 8. Paste the copied username into the password field
    await page.keyboard.down("Control");
    await page.keyboard.press("V");
    await page.keyboard.up("Control");

    // 9. Click on the Submit button
    await page.locator("#submit").click();
});



//Tried by me
test("Task Login", async ({ page }) => {

    await page.goto("https://practicetestautomation.com/practice-test-login/");

    await page.getByLabel("Username", { exact: true }).click();
    await page.keyboard.insertText("student stud");

    await page.keyboard.press("Control+A"); // selection of all text

    await page.keyboard.press("Control+C"); // copy all
    await page.locator("#password").click();
    await page.keyboard.insertText("student stud");
    await page.locator("#submit").click();
});

test("assignment1", async ({ page }) => {

    // Launch the application
    await page.goto("https://practicetestautomation.com/practice-test-login/");

    // Fill "student" in username text field
    await page.getByRole("textbox", { name: "Username" }).click();
    await page.keyboard.insertText("student");

    // Press Space without using press()
    await page.keyboard.down("Space");
    await page.keyboard.up("Space");

    // Fill "stu" but letter by letter
    await page.keyboard.type("stu");

    // Copy the whole username
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Control+C");

    // Go to password text field
    await page.locator('//input[@id="password"]').click();

    // Paste the copied username in password text field
    await page.keyboard.press("Control+V");

    // Click on Submit
    await page.locator(".btn").click();
});



test('DemoQA Practice Form - Keyboard Actions', async ({ page }) => {

  // 1. Open the application URL
  await page.goto('https://demoqa.com/automation-practice-form');

  // 2. Verify the page title
  //await expect(page).toHaveTitle(/DEMOQA/);

  // 3. Fill First Name using keyboard
  await page.locator('#firstName').click();
  await page.keyboard.type('Pooja');

  // 4. Fill Last Name using keyboard
  await page.keyboard.press('Tab');
  await page.keyboard.type('Goudnoor');

  // 5. Fill Email using keyboard
  await page.keyboard.press('Tab');
  await page.keyboard.type('pooja@gmail.com');

  // 6. Select Gender using keyboard
  await page.keyboard.press('Tab');
  await page.keyboard.press('Space');

  // 7. Fill Mobile Number
  await page.keyboard.press('T  ab');
  await page.keyboard.type('9876543210');

  // 8. Verify First Name
  await expect(page.locator('#firstName')).toHaveValue('Pooja');

  // 9. Verify Last Name
  await expect(page.locator('#lastName')).toHaveValue('Goudnoor');

  // 10. Verify Email
  await expect(page.locator('#userEmail')).toHaveValue('pooja@gmail.com');

  // 11. Verify Mobile Number
  await expect(page.locator('#userNumber')).toHaveValue('9876543210');

  // 12. Verify Gender is selected
  await expect(page.locator('#gender-radio-2')).toBeChecked();

});



test.only('DemoQA1 Practice Form - Keyboard Actions', async ({ page }) => {

    // ---------------------------------------------------
    // 1. Open URL
    // ---------------------------------------------------

    await page.goto('https://demoqa.com/automation-practice-form');

    // Verify page title
    //await expect(page).toHaveTitle(/DEMOQA/);


    // ---------------------------------------------------
    // 2. First Name
    // ---------------------------------------------------

    await page.locator('#firstName').click();
    await page.keyboard.type('Pooja');


    // ---------------------------------------------------
    // 3. Last Name
    // ---------------------------------------------------

    await page.keyboard.press('Tab');
    await page.keyboard.type('Goudnoor');


    // ---------------------------------------------------
    // 4. Email
    // ---------------------------------------------------

    await page.keyboard.press('Tab');
    await page.keyboard.type('pooja@gmail.com');


    // ---------------------------------------------------
    // 5. Gender - Female
    // ---------------------------------------------------

    await page.keyboard.press('Tab');
    await page.keyboard.press('Space');


    // ---------------------------------------------------
    // 6. Mobile Number
    // ---------------------------------------------------

    await page.keyboard.press('Tab');
    await page.keyboard.type('9876543210');


    // ---------------------------------------------------
    // 7. Date of Birth
    // ---------------------------------------------------

    await page.locator('#dateOfBirthInput').click();

    // Select month/year using keyboard if required
    await page.keyboard.press('Control+A');
    await page.keyboard.type('01 Jan 1995');
    await page.keyboard.press('Enter');


    // ---------------------------------------------------
    // 8. Subjects
    // ---------------------------------------------------

    // Click Subjects field
    await page.locator('#subjectsInput').click();

    // Type subject using keyboard
    await page.keyboard.type('Maths');

    // Select suggestion using keyboard
    await page.keyboard.press('Enter');


    // Verify Subjects
    await expect(page.locator('.subjects-auto-complete__multi-value'))
        .toContainText('Maths');


    // ---------------------------------------------------
    // 9. Hobbies
    // ---------------------------------------------------

    // Hobby - Sports
    await page.locator('#hobbies-checkbox-1').check();

    // Hobby - Reading
    await page.locator('#hobbies-checkbox-2').check();


    // If specifically using keyboard:
    // await page.locator('#hobbies-checkbox-1').focus();
    // await page.keyboard.press('Space');

    // await page.locator('#hobbies-checkbox-2').focus();
    // await page.keyboard.press('Space');


    // Verify hobbies
    await expect(page.locator('#hobbies-checkbox-1'))
        .toBeChecked();

    await expect(page.locator('#hobbies-checkbox-2'))
        .toBeChecked();


    // ---------------------------------------------------
    // 10. Picture
    // ---------------------------------------------------

    // File upload cannot be performed by typing a path
    // using keyboard because of browser security restrictions.

    await page.locator('#uploadPicture')
        .setInputFiles('test-data/profile.jpg');


    // Verify file was uploaded
    await expect(page.locator('#uploadPicture'))
        .toHaveValue(/profile\.jpg/);


    // ---------------------------------------------------
    // 11. Current Address
    // ---------------------------------------------------

    await page.locator('#currentAddress').click();

    await page.keyboard.type(
        'Bangalore, Karnataka, India'
    );


    // Verify Current Address
    await expect(page.locator('#currentAddress'))
        .toHaveValue('Bangalore, Karnataka, India');


    // ---------------------------------------------------
    // 12. State
    // ---------------------------------------------------

    // Click State dropdown
    await page.locator('#state').click();

    // Type State using keyboard
    await page.keyboard.type('NCR');

    // Press Enter to select
    await page.keyboard.press('Enter');


    // ---------------------------------------------------
    // 13. City
    // ---------------------------------------------------

    // Click City dropdown
    await page.locator('#city').click();

    // Type City using keyboard
    await page.keyboard.type('Delhi');

    // Select using keyboard
    await page.keyboard.press('Enter');


    // ---------------------------------------------------
    // 14. Assertions
    // ---------------------------------------------------

    // First Name
    await expect(page.locator('#firstName'))
        .toHaveValue('Pooja');

    // Last Name
    await expect(page.locator('#lastName'))
        .toHaveValue('Goudnoor');

    // Email
    await expect(page.locator('#userEmail'))
        .toHaveValue('pooja@gmail.com');

    // Mobile
    await expect(page.locator('#userNumber'))
        .toHaveValue('9876543210');

    // Gender
    await expect(page.locator('#gender-radio-2'))
        .toBeChecked();

    // Address
    await expect(page.locator('#currentAddress'))
        .toHaveValue('Bangalore, Karnataka, India');


    // ---------------------------------------------------
    // 15. Submit
    // ---------------------------------------------------

    await page.locator('#submit').click();


    // ---------------------------------------------------
    // 16. Verify successful submission
    // ---------------------------------------------------

    await expect(page.locator('.modal-content'))
        .toBeVisible();

    await expect(page.locator('.modal-title'))
        .toHaveText('Thanks for submitting the form');
});