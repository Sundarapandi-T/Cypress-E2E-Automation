
describe("Family Login",()=>{
    beforeEach("Click Link",()=>{
        cy.visit("https://v3-uat.kalyanmatrimony.com/", {timeout:20000});
        cy.contains('a', 'Login as Family Member/ Friend').click();
    })
})