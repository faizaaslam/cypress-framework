import LoginPage from "../../pages/LoginPage"
let loginPage;

describe('Login Page',{ defaultCommandTimeout: 5000 }, () => {

  before(()=>{
    loginPage = new LoginPage();
  });

  it('Launch website',() => {
    loginPage.navigateToUrl();
  });

  it('Enter invalid credentials', () => {
    loginPage.enterCredentials();
  })
})