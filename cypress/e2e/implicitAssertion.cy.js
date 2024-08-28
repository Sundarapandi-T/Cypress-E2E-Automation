describe("Implict Assertions", () => {
  it("learn", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.url()
      .should("include", "orange")
      .and("contain", "hrm")
      .and("not.contain", "apple");
  });
});
