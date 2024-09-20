
describe("test then", ()=>{
    var placeholder;
    it("test then with var inside", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.get('input[name="username"]').invoke('attr', 'placeholder').as("text");

        cy.log(text);
        cy.pause();
    })
})