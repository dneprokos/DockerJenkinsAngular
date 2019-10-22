import { browser, logging } from 'protractor';
import { LoginPage } from '../pages/login';
import { HomePage } from '../pages/home';
import { Navbar } from '../pages/navbar';

describe('Logout feature:', () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const navbar = new Navbar();

  beforeEach(() => {
    browser.waitForAngularEnabled(false);
    browser.get(browser.baseUrl);
  });

  it('should exit to Login page', () => {
    browser.executeScript(`window.sessionStorage.setItem('user', 'admin');`);
    homePage.navigateTo();

    navbar.clickLogoutBtn();
    expect(browser.baseUrl + loginPage.getPageUrl()).toEqual(browser.baseUrl + 'login');
    expect(loginPage.getFormTitle()).toEqual('Login');
  })

  afterEach(async () => {
    browser.executeScript('window.sessionStorage.clear()');
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  });
});
