/// <reference types="cypress" />

it('App renders bookify name', () => {
  cy.visit('/');

  cy.get('#root > div').contains('Home');
})
