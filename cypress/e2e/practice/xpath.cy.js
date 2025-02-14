describe("xpath locator", () => {
  it("learning", () => {
    cy.visit("http://www.automationpractice.pl/index.php");
    cy.xpath("//a[@title='Women']").click();
  });
});
