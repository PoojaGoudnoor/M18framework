import { test, expect } from '@playwright/test';

test('Apollo Pharmacy Login', async ({ page }) => {

    // Open Apollo Pharmacy login page
    await page.goto('https://www.apollopharmacy.in/login');

    // Enter mobile number
    await page.getByRole('textbox').fill('9876543210');

    // Click Continue button
    await page.getByRole('button', { name: /continue/i }).click();

});


//Keyboard actions

/**
 * check() --> used to check the checkbox or radio button
 * uncheck() --> used to uncheck the checkbox
 */

//import { test } from "@playwright/test";

test('checkbox and radiobutton actions', async ({ page }) => {

    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0");

    await page.locator("#domain_a").check();
    await page.locator("#domain_b").check();

    await page.locator("#domain_a").uncheck();

});