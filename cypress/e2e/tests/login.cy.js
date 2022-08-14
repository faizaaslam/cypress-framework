import LoginPage from "../../pages/LoginPage"
const loginPage = new LoginPage();

describe('Login Page',{ defaultCommandTimeout: 10000 }, () => {

  before(()=>{
  });

  it('Launch website',() => {
    loginPage.navigateToUrl();
  });

  it('Enter invalid credentials', () => {
    loginPage.enterCredentials();
  })

  it('Click on login button', () => {
    loginPage.clickOnLoginButton();
  })

  it('Verify the error message is displayed',()=>{
    loginPage.verifyErrorMsg();
  })
})