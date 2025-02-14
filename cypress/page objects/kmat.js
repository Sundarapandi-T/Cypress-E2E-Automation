class Kmat{
  // for login
    txtEmailOrMobile = "//div[@class='space-y-1 mt-[1rem]']//div//input[@id='name']";
    txtPassword = "//div[@class='space-y-1 mt-[1rem]']//div//input[@id='password']";
    btnLogin = "div[class='space-y-1 mt-[0.9rem]'] button[type='submit']";

    setEmailOrMobile(EmailOrMobile){
        cy.xpath(this.txtEmailOrMobile).type(EmailOrMobile)
    }
    setPassword(password) {
        cy.xpath(this.txtPassword).type(password);
      }
    clickLogin() {
        cy.get(this.btnLogin).click();
      }


  // for adding family member
  
}

export default Kmat;