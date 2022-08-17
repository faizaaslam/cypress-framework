export default class Generics {

    // generic functions
    assertElementVisibility = (selector)=>{
        cy.get(selector,{timeout: 10000}).should('be.visible');
    }

    typeValue = (selector, value)=>{
        cy.get(selector).type(value);
    }

}