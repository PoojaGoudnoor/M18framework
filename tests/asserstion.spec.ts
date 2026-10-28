// import { test, expect } from "@playwright/test";

// test("auto_retrying_assertion", async ({ page }) => {

//   await page.goto("https://demoapps.qspiders.com/ui?scenario=1");

//   await expect(page).toHaveURL("https://demoapps.qspiders.com/ui?scenario=1");

//   await expect(page).toHaveTitle("DemoApps | Qspiders | Text Box");

//   await expect(page.getByPlaceholder("Enter your name", { exact: true })).toBeVisible();

//   await page.getByPlaceholder("Enter your name", { exact: true }).fill("user");

//   await expect(page.getByPlaceholder("Enter your name", { exact: true })).toHaveValue("user");
// });



import { test, expect } from "@playwright/test";

test("auto_retrying_assertion", async ({ page }) => {

    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");

    await expect(page).toHaveURL("https://demoapps.qspiders.com/ui?scenario=1");

    await expect(page).toHaveTitle("DemoApps | Qspiders | Text Box");

    await expect(page.getByPlaceholder("Enter your name", { exact: true })).toBeVisible();

    await page.getByPlaceholder("Enter your name", { exact: true }).fill("user");

    await expect(page.getByPlaceholder("Enter your name", { exact: true })).toHaveValue("user");

    await expect(page.locator('//h1[text()="Register"]')).toContainText("Regis");

    await expect(page.locator('//h1[text()="Register"]')).toHaveText("Register");

    await page.screenshot({path:"screenshot/ss1.png"});

    await page.getByPlaceholder("Enter your name", {exact:true }).fill("username");

    await expect(page).toHaveScreenshot("screenshot/ss1.png");
});


test.only("non retrying assertion", async ({ page }) => {

    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");

    let text = await page.locator('//h1[.="Register"]').textContent();

    await expect(text).toBe("Register");

    let title = await page.title();

    let url = await page.url();

    await expect(title).toContain("DemoApps | Qspiders");

    await expect(url).toMatch(/scenario=1/);

    let status = "hii";

    await expect(status).toBeTruthy();

    let name;
    
    await expect(name).toBeUndefined();

    await expect("hii").toBeTruthy();
});


// Poll assertion

test.only("poll assertion", async ({ page }) => {
  await page.goto("https://demoapps.qspiders.com/ui?scenario=1");

  await expect
    .poll(async () => {
      return await page.title();
    }, "poll assertion")
    .toContain("Demo");
});