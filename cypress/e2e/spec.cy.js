describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('first test', () => {
  it('amazon', () => {
    cy.visit('https://www.amazon.com')
    cy.get('#twotabsearchtextbox').type("elma{enter}")
    cy.get('.a-section > .a-color-state')
  
  })
})