import { element, by, browser } from "protractor";

export class Navbar {
    private adminMenu = element(by.xpath(`//button[@class = 'mat-icon-button']`)); 
    private logoutBtn = element(by.id('signOutBtn'));

    clickLogoutBtn(){
        this.adminMenu.click();
        browser.sleep(1000);
        this.logoutBtn.click();
    }

    
}