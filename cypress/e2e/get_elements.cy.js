/// <reference types="cypress" /> 

describe("getting elements in differnet formats", { tags: 'sanity' }, () =>{

before(() => {
    console.log(cy)
    cy.log("Suite Setup")
    cy.visit("https://www.orangehealth.in/");
})

after(() => {
    cy.log("Suite Teardown")
})

    it("getting elements ", { tags: 'regression' }, () =>{

        cy.visit("https://www.saucedemo.com/")
        

        //getting element by tag name
        cy.get("input")
            .type("standard_user")            

        //getting element by
    })

    it("second test ", { tags: 'regression' }, () => {
        cy.visit("https://jqueryui.com/")
        cy.contains("Button").click()

        cy.get("input").eq(1).click()
        cy.wait(2000)

    })

    it("third test", { tags: 'regression' }, () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com")
        
  
        //finding element by attribute name
        cy.get("[placeholder]").eq(0).clear().type("Nageswrara")

        cy.wait(2000)
        //finding element by attribute name and value
        cy.get('[placeholder="Username"]').clear().type("Trijan")

        cy.wait(2000)
        //finding element by attribute name and value and tag included
        cy.get('input[placeholder="Username"]').clear().type("Admin")

        cy.wait(2000)
        //finding element by class name
        cy.get('.oxd-input').eq(1).clear().type("Admin")
    
        cy.wait(2000)
        //finding elementy by mutliple attribute values and classname we can include id also using #
        cy.get('[type="password"][name="password"].oxd-input').clear().type("admin123")

        cy.wait(2000)
        //finding element by tag name
        cy.get("button").click()
        cy.wait(2000)
})
})