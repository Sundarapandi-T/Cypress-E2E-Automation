describe("Locators", () => {
  it("CssSelectors", () => {
    cy.visit("http://www.automationpractice.pl/index.php");
    cy.get("#search_query_top").type("t-shirt");
    cy.get("[name='submit_search']").click();
    cy.get(".lighter").contains("t-shirt");
  });
});
