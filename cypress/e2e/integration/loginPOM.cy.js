import Kmat from "../../page objects/kmat";
describe("Login",()=>{

    beforeEach(() => {
        cy.visit("https://v3-uat.kalyanmatrimony.com/", {timeout:20000});
    });

    it("Login", ()=>{
        cy.fixture("kmatLogin.json").then((loginArray)=>{
            const secondElement = loginArray[1];
            const kmatObj = new Kmat();
            kmatObj.setEmailOrMobile(secondElement.mobile);
            kmatObj.setPassword(secondElement.password)
            kmatObj.clickLogin();
        })
    })
})