
import { test,expect } from "@playwright/test";
test.only('DemoQA1 Practice Form - Keyboard Actions', async ({ page }) => {

    // ---------------------------------------------------
    // 1. Open URL
    // ---------------------------------------------------

    await page.goto('https://demoqa.com/automation-practice-form');

    await page.locator('#firstName').click();
    await page.keyboard.type('Pooja');

    await page.keyboard.press('Tab');
    await page.keyboard.type('Goudnoor');
    await page.keyboard.press('Tab');
    await page.keyboard.type('pooja@gmail.com');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Space');

    await page.keyboard.press('Tab');
    await page.keyboard.type('9876543210');

    await page.locator('#dateOfBirthInput').click();

    await page.keyboard.press('Control+A');
    await page.keyboard.type('01 Jan 1995');
    await page.keyboard.press('Enter');

    await page.locator('#subjectsInput').click();

    await page.keyboard.type('Maths');

    await page.keyboard.press('Enter');

    await expect(page.locator('.subjects-auto-complete__multi-value')).toContainText('Maths');

    await page.locator('#hobbies-checkbox-1').check();

    await page.locator('#hobbies-checkbox-2').check();

    await expect(page.locator('#hobbies-checkbox-1')).toBeChecked();

    await expect(page.locator('#hobbies-checkbox-2')).toBeChecked();

    await page.locator('#currentAddress').click();

    await page.keyboard.type('Bangalore, Karnataka, India');

    await expect(page.locator('#currentAddress')).toHaveValue('Bangalore, Karnataka, India');


    await page.locator('#state').click();

    await page.keyboard.type('NCR');


    await page.keyboard.press('Enter');
    await page.locator('#city').click();

    await page.keyboard.type('Delhi');
    await page.keyboard.press('Enter');
    await expect(page.locator('#firstName')).toHaveValue('Pooja');

    await expect(page.locator('#lastName')).toHaveValue('Goudnoor');

    await expect(page.locator('#userEmail')).toHaveValue('pooja@gmail.com');

    await expect(page.locator('#userNumber')).toHaveValue('9876543210');

    await expect(page.locator('#gender-radio-2')).toBeChecked();

    await expect(page.locator('#currentAddress')).toHaveValue('Bangalore, Karnataka, India');

    await page.locator('#submit').click();

    await expect(page.locator('.modal-content')).toBeVisible();

    await expect(page.locator('.modal-title')).toHaveText('Thanks for submitting the form');
});