describe("explicit assertions", () => {
  it("BDD and TDD", () => {
    //BDD - Behavioural Driven Development => expect
    //TDD - Test Driven Development        => assert
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("button[type='submit']").click();

    let expName = "manda user";
    cy.get(".oxd-userdropdown-name").then((x) => {
      let actName = x.text();

      //BDD
      expect(actName).to.equal(expName);
      //TDD
      assert.equal(actName, expName);
    });
  });
});
