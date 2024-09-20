/// <reference types="cypress" />

describe("understaing about cypress wrap funcion", { tags: 'smoke' }, () =>{

before(() => {
    console.log(cy)
    cy.log("Suite Setup")
    cy.visit("https://www.orangehealth.in/");
})

after(() => {
    cy.log("Suite Teardown")
})

    it("test_wrap", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com")
        
        cy.get('input[placeholder="Username"]').clear().type("Admin")

        //finding elementy by mutliple attribute values and classname we can include id also using #
        cy.get('[type="password"][name="password"].oxd-input').clear().type("admin123")

        //finding element by tag name
        cy.get("button").click()

        cy.wait(6000)
        cy.get('button[class="oxd-icon-button oxd-icon-button--success orangehrm-report-icon"]', {timeout: 6000}).then( leave =>{
            const data = leave.siblings('p[class="oxd-text oxd-text--p"]').text()
            cy.log(data)
            expect(data).to.be.contain("Leave Requests to Approve")
            
            cy.wrap(leave).siblings('p[class="oxd-text oxd-text--p"]').should("contain", "Leave Requests to Approve")
        })
        cy.get('button[class="oxd-icon-button oxd-icon-button--success orangehrm-report-icon"]', {timeout: 6000})
            .siblings('p[class="oxd-text oxd-text--p"]').should("contain", "Leave Requests to Approve")
        
})

})