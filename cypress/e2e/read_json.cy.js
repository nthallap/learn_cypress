var filepath = "cypress/downloads/Sustainability report 2024-02-01 - 2024-07-31.json"
describe("read json", ()=>{

    it("read_json", ()=>{
        cy.readFile(filepath).then((jsonData)=>{
            cy.log(jsonData)
            let serversCarbonEmision = jsonData.filter( item => item["Server model"] != "UNKNOWN")
            cy.log(serversCarbonEmision)
            cy.wrap(serversCarbonEmision).as("serversCarbonEmisionJSON") 
        })
    })

})