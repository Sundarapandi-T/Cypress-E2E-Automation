class Login {
  txtUsername = "input[placeholder='Username']";
  txtPassWord = "input[placeholder='Password']";
  btnSubmit = "button[type='submit']";
  txtVerify = ".oxd-topbar-header-breadcrumb > .oxd-text";

  setUsername(username) {
    cy.get(this.txtUsername).type(username);
  }
  setPassword(password) {
    cy.get(this.txtPassWord).type(password);
  }
  clickSubmit() {
    cy.get(this.btnSubmit).click();
  }
  verifyText() {
    cy.get(this.txtVerify).should("have.text", "Dashboard");
  }
}

export default Login;
