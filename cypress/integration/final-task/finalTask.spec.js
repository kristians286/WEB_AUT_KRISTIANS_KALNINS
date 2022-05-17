

describe('Final task scenario', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => { // Must have, savādāk izmet uncaught errors randomly.
      return false;
    }); 
    cy.visit('https://demoqa.com/automation-practice-form')
  })
  
  it('Fill Student Registration Form', () => {
    cy.get('input#firstName').type('kristians')
      .should('have.value', 'kristians')
    cy.get('input#lastName').type('kalnins')
      .should('have.value', 'kalnins')
    cy.get('input#userEmail').type('kristianskalnins@email.com')
      .should('have.value', 'kristianskalnins@email.com')
    cy.get('[type="radio"]').check('Male', {force:true})
    cy.get('#userNumber').type('21234567')

    cy.get('#dateOfBirthInput').click()
      .get('.react-datepicker__month-select').select('February')
      .get('.react-datepicker__year-select').select('1930')
      .get('.react-datepicker__month').contains('27').click()
      .get('#dateOfBirthInput').should('have.value', '27 Jan 1930')

    cy.get('#subjectsContainer').type("Eco{enter}")
    cy.get('[type="checkbox"]').check('3', {force:true})

    cy.get('[type="file"]').selectFile('cypress/files/picture.png')
    cy.get('#currentAddress').type('Some random street 23')
    cy.get('#state').type('NCR{enter}')
    cy.get('#city').type('Delhi{enter}')
    cy.get('#submit').click({force: true})
  })
})