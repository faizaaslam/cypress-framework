export default class Generics {

    // Assertions & generic functions

    assertElementByText = (selector, text)=>{
        cy.get(selector).should('have.text', text)
    }

    assertElementVisibility = (selector)=>{
        cy.get(selector,{timeout: 10000}).should('be.visible');
    }

    typeValue = (selector, value)=>{
        cy.get(selector).type(value);
    }

}