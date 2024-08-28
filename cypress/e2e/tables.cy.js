/// <reference types="cypress"/>

describe("tables", () => {
  beforeEach("login", () => {
    cy.visit("https://demo.opencart.com/admin/index.php");
    // cy.get("#input-username").click()
    // cy.get("#input-password").click()
    cy.get("button[type='submit']").click();

    cy.get("#menu-customer>a").click();
    cy.get("#collapse-5>li:first-child").click();
  });

  it.only("Count rows and columns", () => {
    cy.get("table[class='table table-bordered table-hover']>tbody>tr").should(
      "have.length",
      "10"
    );
    cy.get(
      "table[class='table table-bordered table-hover']>thead>tr>td"
    ).should("have.length", "06");
  });
});
