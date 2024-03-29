import LoginPage from "../../pages/loginPage"
const loginPage = new LoginPage();

describe('Login Page',{ defaultCommandTimeout: 20000 }, () => {

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