import { browser, element, by } from 'protractor';

export class HomePage {
    private pageUrl = 'home';
    private pageTitle = element(by.xpath('//h1'));

    getPageUrl() {
        return browser.getCurrentUrl();
    }

    navigateTo(){
        browser.get(this.pageUrl);
        browser.sleep(5000);
    }

    getPageTitle() {
        return this.pageTitle.getText().then(t => t);
    }
    
    
}