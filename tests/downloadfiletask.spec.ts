import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs" //file system


test("Download generated file task", async ({ page }) => {

    // Step 1: Open the URL
    await page.goto("https://demo.automationtesting.in/FileDownload.html");

    // Step 2: Enter 1000 characters in the Enter Data field
    const data = "A".repeat(1000);

    await page.locator("textarea").first().fill(data);

    // Step 3 and Step 4:
    // Click Generate File and then click the Download link
    const [downloadFile] = await Promise.all([
        page.waitForEvent("download"),

        page.getByRole("button", {name: "Generate File",exact: true}).first().click()
            .then(async () => {
                await page.getByText("Download", {
                    exact: true
                }).first().click();
            })
    ]);

    // Step 5: Save the downloaded file
    const downloadFolder = "C:/Users/vinod/OneDrive/Desktop/playwright_M18/tests/Download Folder";

    const fileName = downloadFile.suggestedFilename();

    await downloadFile.saveAs(
        path.join(downloadFolder, fileName)
    );

    console.log("File downloaded successfully:", fileName);
});

