import { element, by, browser } from "protractor";

export class LoginPage {
    private pageUrl = 'login';
    private loginField = element(by.xpath(`//input[@placeholder='Username']`));
    private password = element(by.xpath(`//input[@placeholder='Password']`));
    private loginBtn = element(by.buttonText('Login'));
    private formTitle = element(by.xpath(`//mat-card-title`));

    performLogin(userName: string, password: string) {
        this.loginField.clear();
        this.loginField.sendKeys(userName);
        this.password.clear();
        this.password.sendKeys(password);
        this.loginBtn.click();
    }

    getFormTitle() {
        return this.formTitle.getText().then(t => t);
    }

    getPageUrl() {
        return this.pageUrl;
    }

    navigateTo(){
        browser.get(this.pageUrl);
        browser.sleep(5000);
    }


}

