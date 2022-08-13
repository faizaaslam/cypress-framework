export const configData = require('../fixtures/config.json')
export const loginData = require('../fixtures/login.json')
import Generics from "../helpers/Generics"
const helper = new Generics();
export default class LoginPage{

    // Page objects for Login page

    email = "input[name='email']";
    password = "input[name='password']";

    // Actions
    navigateToUrl(){
        cy.visit(configData.baseUrl);
    }

    enterCredentials(){
        helper.assertElementVisibility(this.email);
        helper.typeValue(this.email,loginData.email);
        helper.typeValue(this.password,loginData.password);
    }

}
require('cypress-xpath');