import { test, expect } from '@playwright/test';

test("web_element", async ({ page }) => {

  await page.goto("https://demoapps.qspiders.com/ui?scenario=1");

  await page.getByPlaceholder('Enter your name', { exact: true }).fill('student');

  //await page.getByPlaceholder('Enter your Email', { exact: true }).type('student@gmail.com');

  await page.getByPlaceholder('Enter your name', { exact: true }).fill('demo');

  //await page.getByPlaceholder('Enter your Email', { exact: true }).type('demo@gmail.com');

  await page.locator('//button[text()="Register"]').click();

  let text1 = await page.locator('//h1[text()="Register"]').innerText();
  console.log(text1);

  let text2 = await page.locator('//h1[text()="Register"]').textContent();
  console.log(text2);

  // await page.locator('//button[text()="Register"]').click()

let text11 = await page.locator('//h1[text()="Register"]').innerText();
console.log(text11);

let text22 = await page.locator('//h1[text()="Register"]').textContent();
console.log(text22);

let value = await page.locator('#name').inputValue();
console.log(value);

test.only("test1", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    let text1 = await page.locator('.form-check-label').allInnerTexts();
    console.log(text1);
});
});

test("non retrying assertion", async ({ page }) => {

    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')

    let text = await page.locator('//h1[.="Register"]').textContent()

    await expect(text).not.toBe("Regis")

    let title = await page.title()
    let url = await page.url()

    // await page.mouse.click(200,200)

    await expect(title).not.toContain("DemoApps | QSpiders ")

    await expect.soft(url).toMatch(/scenario=1/)

    // let status = "hi"
    // await expect(status).toBeTruthy()

    // let name = "rohit"
    // await expect(name).toBeUndefined()
})

test.only("asymmetric", async ({ page }) => {


await page.goto("https://demoapps.qspiders.com/ui?scenario=1")

let text = await page.locator('//button').textContent()  //! Register

expect(text).toEqual(expect.stringContaining("Regis"))

//! used to check whether a string contains a specified substring
// expect(text).toEqual("Regis")

expect(text).toEqual(expect.stringMatching(/Register/))

//! used to check whether a string contains a specified substring or regular expression

const products = ["laptop", "mobile", "keyboard", "mouse"]

expect(products).toEqual(
    expect.arrayContaining(["laptop", "mouse"])
)

//! checks whether an array contains the specified elements

const user = {
    name: "john",
    age: 25,
    city: "bangalore"
}

expect(user).not.toEqual(
    expect.objectContaining({
        name: "john",
        age: 27
    })
)

///! expect.anything()
//? matches any value except null and undefined

let a = true;

expect(a).toEqual(expect.anything());

const user1 = {
    name: "john",
    age: 25,
}

expect(user1).toEqual({
    name: expect.anything(),
    age: expect.anything()
});


///! expect.any()
//? matches any value of a specified datatype

expect(user1).toEqual({
    name: expect.any(String),
    age: expect.any(Number)
});

let stud = true;

expect(stud).toEqual(expect.any(Boolean));

//! check whether an object contains the specified properties
})