export const configData = require('../fixtures/config.json')
export const loginData = require('../fixtures/login.json')
export default class LoginPage{

    // Page objects for Login page
    elements = {
        emailField: () => cy.get("input[name='email']"),
        passwordField: () => cy.get("input[name='password']")
    }

    // Actions
    navigateToUrl(){
        cy.visit(configData.baseUrl);
    }

    enterCredentials(){
        this.elements.emailField().type(loginData.email);
        this.elements.passwordField().type(loginData.password);
    }
}
require('cypress-xpath');