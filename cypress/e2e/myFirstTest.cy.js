import { describe } from "mocha";

describe("My First Test", () => {
  it("Verify pass", () => {
    cy.visit("https://www.facebook.com/");
    cy.title().should("eq", "Facebook");
  });
});
