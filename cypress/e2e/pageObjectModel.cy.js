import Login from "../page objects/orangehrm_login";

describe("POM", () => {
  it("page objects", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    const loginObj = new Login();
    loginObj.setUsername("Admin");
    loginObj.setPassword("admin123");
    loginObj.clickSubmit();
    loginObj.verifyText();
  });
});
