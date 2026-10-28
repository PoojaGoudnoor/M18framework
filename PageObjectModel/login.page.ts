import { Locator, Page } from "@playwright/test";
class Login {
    //declaring the properties
    page: Page
    txtUsername: Locator
    txtPassword: Locator
    BtnSubmit: Locator
    
    constructor(page: Page) {
        this.page = page
        this.txtUsername = page.getByLabel("Username", { exact: true })
        this.txtPassword = page.getByLabel("Password", { exact: true })
        this.BtnSubmit = page.getByRole('button', { name: "Submit", exact: true })
    }
}
export default Login