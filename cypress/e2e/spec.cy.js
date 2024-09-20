
describe('template spec', { tags: 'sanity' }, () => {

before(() => {
    console.log(cy)
    cy.log("Suite Setup")
    cy.visit("https://www.orangehealth.in/");
})

after(() => {
    cy.log("Suite Teardown")
})

  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})