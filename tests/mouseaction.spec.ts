import { test,expect } from "@playwright/test";

test("mouse actions", async ({ page }) => {

    await page.goto(
        "https://demoapps.qspiders.com/ui/button?sublist=0"
    );

    // By default, click() will perform a left click
    await page.locator("#btn").click();

    let value1 = 'You selected "Yes"';

    await expect(value1).toContain('You selected "Yes"');


    // --------------------------------------------------
    // Mouse button, clickCount, delay and force options
    // --------------------------------------------------

    await page.goto(
        "https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1"
    );

    await page.locator("#btn_a").click({
        button: "right",
        clickCount: 6
    });

    await page.getByText("Yes", {
        exact: true
    }).click({
        delay: 5000,
        force: true
    });

});


// button
// It will specify which mouse button should be clicked.
// By default, it will perform a left click.


// clickCount
// It will specify the number of mouse clicks.


// delay
// It will specify the time between the press
// and release of the mouse button.


// force
// If the element is disabled, force will help
// to forcefully click on it.
// By default, the value for force is false.

test("dblclick", async ({ page }) => {

    await page.goto(
        "https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2"
    )

    // Using clickCount: 2 to perform a double click
    // await page.locator("#btn_a").click({clickCount: 2});

    // Using Playwright's built-in dblclick() method
    await page.locator("#btn_a").dblclick();

});




test("hover,down,up", async ({ page }) => {

    await page.goto(
        "https://demoapps.qspiders.com/ui/clickHold?sublist=0"
    );

    await page.locator("#circle").hover();

    // hover --> it will hover the cursor
    // on the specified element


    // down --> it is used to press the mouse button
    // up --> it is used to release the mouse button

    await page.mouse.down();

    await page.waitForTimeout(5000);

    await page.mouse.up();

    await page.locator("#circle").click({
        delay: 5000
    });

});



test("move , boundingBox", async ({ page }) => {

    // Navigate to the mouse hover demo application
    await page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0");

    // boundingBox() returns the position and size of an element
    // It gives x, y coordinates, width and height
    let box = await page.locator(".w-5.h-5.mt-5.ml-3.cursor-pointer").boundingBox(); //boundingBox is for getting x-axis and y-axis number

    // Print the bounding box details in the console
    console.log(box);


    // move() means moving the mouse pointer from its current position to a specified location or web element

    // Move/hover the mouse over the specified element
    await page.locator(".w-5.h-5.mt-5.ml-3.cursor-pointer").hover();

    // Move the mouse pointer to a specific X and Y coordinate
    await page.mouse.move(768.3500366210938,251.52500915527344);

});


//By default playwright has scrolling mechanism

// If we want to perform external


test("scolling", async ({ page }) => {

    // Open the vertical scrolling demo page
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical");

    // Scroll the checkbox element into the visible area
    // scrollIntoViewIfNeeded() is useful when the element is outside the currently visible portion of the page

    await page.locator('[type="checkbox"]').scrollIntoViewIfNeeded();// external

    // Click on the checkbox
    // Playwright automatically scrolls the element into view before clicking

    await page.locator('[type="checkbox"]').click();// built-in


    // ==========================================
    // VERTICAL SCROLLING
    // ==========================================

    // mouse.wheel(x, y)
    // x = horizontal scrolling
    // y = vertical scrolling

    // Scroll DOWN by 1000 pixels
    await page.mouse.wheel(0, 1000);

    // Scroll UP by 900 pixels
    await page.mouse.wheel(0, -900);


    // ==========================================
    // HORIZONTAL SCROLLING
    // ==========================================

    // Open the horizontal scrolling demo page
    await page.goto(
        "https://demoapps.qspiders.com/ui/scroll/newTabHorizontal"
    );

    // mouse.wheel(x, y)
    // x = horizontal scrolling
    // y = vertical scrolling

    // Scroll RIGHT by 1000 pixels
    await page.mouse.wheel(1000, 0);

    // Scroll LEFT by 600 pixels
    await page.mouse.wheel(-600, 0);

});

test.only("drag and drop", async ({ page }) => {

    // =========================
    // CASE 1
    // =========================

    // Open the Drag and Drop page
     await page.goto("https://demoapps.qspiders.com/ui/dragDrop?sublist=0");

    // Hover over the "Drag Me" element
     await page.getByText("Drag Me", { exact: true }).hover();

    // Press and hold the mouse button
    await page.mouse.down();

    // Move the mouse to the specified X and Y coordinates
    await page.mouse.move(200, 500);

    // Release the mouse button
    await page.mouse.up();


    // =========================
    // CASE 2
    // =========================

    // Open the drag-and-drop page
    await page.goto(
        "https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2"
    );

    // Hover over the source element
    await page.getByText("Mobile Charger", { exact: true }).hover();

    // Press and hold the mouse button
     await page.mouse.down();

    // Locate the target element and hover over it
     await page.locator('//div[text()="Mobile Accessories"]/parent::div').hover();

    // Release the mouse button
     await page.mouse.up();


    // =========================
    // CASE 3
    // =========================

    // Syntax:
    // target.dragTo(source)

    // Drag "Mobile Charger" and drop it into "Mobile Accessories"
    await page
        .getByText("Mobile Charger", { exact: true })
        .dragTo(
            page.locator('//div[text()="Mobile Accessories"]/parent::div')
        );

});