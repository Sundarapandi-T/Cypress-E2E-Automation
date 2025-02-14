/// <reference types="cypress-xpath"/>

describe("tabs", () => {
  it.skip("method1", () => {
    cy.visit("https://the-internet.herokuapp.com/windows");
    cy.get(".example>a").invoke("removeAttr", "target").click();

    cy.url().should(
      "include",
      "https://the-internet.herokuapp.com/windows/new"
    );
    cy.wait(3000);
    cy.go("back");
  });

  it("method2", () => {
    cy.visit("https://the-internet.herokuapp.com/windows");
    cy.get(".example>a").then((key) => {
      let url = key.prop("href");

      cy.visit(url);
    });

    cy.url().should(
      "include",
      "https://the-internet.herokuapp.com/windows/new"
    );
    cy.wait(3000);
    cy.go("back");

    // in method 2 domain should be same as parent. i.e https://the-internet.herokuapp.com
  });
});
