import LoginPage from "../../pages/LoginPage"
const loginPage = new LoginPage();

describe('Login Page',{ defaultCommandTimeout: 5000 }, () => {

  before(()=>{
  });

  it('Launch website',() => {
    loginPage.navigateToUrl();
  });

  it('Enter invalid credentials', () => {
    loginPage.enterCredentials();
  })
})