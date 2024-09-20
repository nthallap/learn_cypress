


describe("test_assertions", { tags: 'sanity' }, () => {

before(() => {
    console.log(cy)
    cy.log("Suite Setup")
    cy.visit("https://www.orangehealth.in/");
})

after(() => {
    cy.log("Suite Teardown")
})

    it("test_several_assertions", { tags: 'regression' }, () => {
        cy.visit("https://example.cypress.io/")

        cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)').click()

        cy.get('#query-btn')
            .should("be.visible")
            .and("contain", "Button")
            .and("have.attr", "id")

        cy.get('#query-btn')
            .invoke("attr", "class")
            .should("contain", "query-btn")

        cy.get('#query-btn')
            .should("have.class", "query-btn")

        expect(true).to.be.true
    })

    it("test_several_assertions2", { tags: 'regression' }, () => {
        var name = "Nageswara"
        expect(name).to.be.contains("Nag")
        expect(name).to.be.contain("Nag")
        assert.equal(name, "Nageswara")
        assert.contains("Nag", name, "name not contain")
    })
})