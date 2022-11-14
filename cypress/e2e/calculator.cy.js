describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })


  it('can add two numbers', () => {      
    cy.get('#number4').click();  
    cy.get('#operator_add').click();      
    cy.get('#number3').click();      
    cy.get('#operator-equals').click();
    cy.get('#running-total.display').should('contain', '7')
  
  })

  it('carry out multiple operations', () => {
    cy.get('#number5').click().and
    cy.get('#operator-multiply').click().and
    cy.get('#number1').click().and
    cy.get('#number0').click().and
    cy.get('#operator-subtract').click().and
    cy.get('#number8').click().and
    cy.get('#operator-equals').click().and
    cy.get('.display').should('contain', '42').and('contain', '4')
  })

  it('can divide by 0.5', () => {      
    cy.get('#number5').click();  
    cy.get('#operator-divide').click();      
    cy.get('#number0').click();  
    cy.get('#decimal').click();  
    cy.get('#number5').click();  
    cy.get('#operator-equals').click();
    cy.get('#running-total.display').should('contain', '10')

  })

    it('can divide by decimal numbers', () => {      
      cy.get('#number1').click();       
      cy.get('#number0').click(); 
      cy.get('#operator-divide').click();  
      cy.get('#number2').click();
      cy.get('#decimal').click();  
      cy.get('#number5').click();  
      cy.get('#operator-equals').click();
      cy.get('#running-total.display').should('contain', '4')
  
  })

  it('can divide by large numbers', () => {      
    cy.get('#number4').click();       
    cy.get('#operator-divide').click();  
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total.display').should('contain', '0.004')

})

it('can multiply by negative numbers', () => {      
  cy.get('#number4').click();       
  cy.get('#operator-multiply').click();  
  cy.get('#operator-subtract').click();
  cy.get('#number2').click();
  cy.get('#operator-equals').click();
  cy.get('#running-total.display').should('contain', '-8')

})

it('can add divide by 0', () => {      
  cy.get('#number5').click();       
  cy.get('#operator-divide').click();  
  cy.get('#number0').click();
  cy.get('#operator-equals').click();
  cy.get('#running-total.display').should('contain', 'NAN')

})

})

