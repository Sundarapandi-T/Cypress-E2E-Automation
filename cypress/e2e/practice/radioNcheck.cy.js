/// <reference types="cypress-xpath"/>

describe("UI", () => {
  it("radio", () => {
    cy.visit("https://artoftesting.com/samplesiteforselenium");

    //test visibility
    cy.get("input#male").should("not.be.checked");
    cy.get("input#female").should("not.be.checked");
    //selecting
    cy.get("input#male").check().should("be.checked");
    cy.get("input#female").should("not.be.checked");
    cy.get("input#female").check().should("be.checked");
    cy.get("input#male").should("not.be.checked");

    //select single checkbox
    cy.get("input[value='Automation']").check().should("be.checked");

    cy.get("input[value='Automation']").uncheck().should("not.be.checked");
    //select all
    cy.get("input[type='checkbox']").check().should("be.checked");
  });
});
