export const configData = require('../fixtures/config.json')
export const loginData = require('../fixtures/login.json')
import Generics from "../helpers/Generics"
const helper = new Generics();
export default class LoginPage{

    // Page objects for Login page

    email = "input[name='email']";
    password = "input[name='password']";
    loginButton = "//div[text()='Login']"
    errorMsg = "//div[@class='ui negative message']//p";

    // Actions
    navigateToUrl(){
        cy.visit(configData.baseUrl);
    }

    enterCredentials(){
        helper.assertElementVisibility(this.email);
        helper.typeValue(this.email,loginData.email);
        helper.typeValue(this.password,loginData.password);
    }
    clickOnLoginButton(){
        cy.xpath(this.loginButton).click();
    }
    verifyErrorMsg(){
         cy.xpath(this.errorMsg).should('have.text',loginData.errorMsg)
    }


}
require('cypress-xpath');