export const loginData = require('../fixtures/login.json')
import Generics from "../support/generics"
const helper = new Generics();
export default class LoginPage {

    // Page objects for Login page
    email = "input[name='email']";
    password = "input[name='password']";
    loginButton = ".ui.fluid.large.blue.submit.button"
    error = ".ui.negative.message";

    // Actions
    navigateToUrl(){
        cy.visit('/');
    }

    enterCredentials(){
        helper.assertElementVisibility(this.email);
        helper.typeValue(this.email,loginData.email);
        helper.typeValue(this.password,loginData.password);
    }
    clickOnLoginButton(){
        cy.get(this.loginButton).click();
    }
    verifyErrorMsg(){
        cy.get(this.error)
        .should('be.visible');
    }
}
