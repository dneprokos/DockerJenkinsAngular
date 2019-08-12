import { browser, logging } from 'protractor';
import { LoginPage } from '../pages/login';
import { HomePage } from '../pages/home';

describe('workspace-project App', () => {
  let loginPage = new LoginPage();
  let homePage = new HomePage();

  beforeEach(() => {  
    browser.waitForAngularEnabled(false);
    browser.get(browser.baseUrl);     
  });

  it('should display home page after login', () => {
    loginPage.performLogin('test@test.com', 'test');
    expect(homePage.getPageUrl()).toEqual(browser.baseUrl + 'home');
    expect(homePage.getPageTitle()).toContain(`I've never had "Design" ablities. So, just watch and shut up!`);
    
  })

  it('should display alert after invalid credentials', () => {
    loginPage.performLogin('test1@test.com', 'test');    
    let alert = browser.switchTo().alert();

    expect(alert.getText()).toEqual('Invalid credentials');
    alert.accept();
    expect(browser.baseUrl + loginPage.getPageUrl()).toEqual(browser.baseUrl + 'login');
    expect(loginPage.getFormTitle()).toEqual('Login');
  })

  afterEach(async () => {
    browser.executeScript('window.sessionStorage.clear()'); 
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER); 
  });
});
