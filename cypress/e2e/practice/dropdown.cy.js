/// <reference types="cypress-xpath"/>

describe("dropdown", () => {
  it.skip("dropdowns", () => {
    //without select option
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
    cy.get("#select2-billing_country-container").click();
    cy.get("input[role='combobox']").type("italy").type("{enter}");
    cy.get("#select2-billing_country-container").should("have.text", "Italy");
  });
  it.skip("with select", () => {
    //with select
    cy.visit("https://artoftesting.com/samplesiteforselenium");
    cy.get("#testingDropdown")
      .select("Manual Testing")
      .should("have.value", "Manual");
  });
  it.skip("Auto-Suggested dropdown", () => {
    cy.visit("https://www.wikipedia.org/");
    cy.get("#searchInput").type("chennai");
    cy.get(".suggestion-title")
      .contains("Chennai International Airport")
      .click();
  });
  it("Dynamic Dropdown", () => {
    cy.visit("https://www.google.com/");
    cy.get("#APjFqb").type("cypress automation");

    cy.get(".wM6W7d").each(($element, index, $list) => {
      if ($element.text() == "cypress automation tool tutorial") {
        cy.wrap($element).click();
      }
    });
    cy.get("#APjFqb").should("have.value", "cypress automation tool tutorial");
  });
});
