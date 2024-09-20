/// <reference types="cypress" />

describe("test invoke", { tags: 'sanity' }, () => {
before(() => {
    console.log(cy)
    cy.log("Suite Setup")
    cy.visit("https://www.orangehealth.in/");
})

after(() => {
    cy.log("Suite Teardown")
})

    it("test invoke function", { tags: 'regression' }, () => {
        cy.visit("https://opensource-demo.orangehrmlive.com")
        
        cy.get('input[placeholder="Username"]').clear().type("Admin")

        cy.get('input[placeholder="Username"]')
            .invoke("prop", "value")
            .should("be.eq", "Admin")

        cy.get('input[placeholder="Username"]').then(ele => {
            cy.wrap(ele).invoke("attr", "class")
            .should("contain", "oxd-input")
        })

        cy.get('p[class="oxd-text oxd-text--p"]').eq(0).invoke("text").then(lable_txt => {
            expect(lable_txt).to.be.eq("Username : Admin")
        })
       
    })
})

// Handle the dialogbox or popup
/*
First approach 

cy.on('window:confirm', (confirm) =>
{
	expect(confirm).to.equal("dialog box message")
}

second approach
const stub = cy.stub()
cy.on("window:confirm", stub)
cy.get("some element").click().then(() => {
	expect(stub.getCall(0)).to.be.calledWith("dialog box message")
})

to cancle the dialog
cy.on('window:confirm', () => false)
*/