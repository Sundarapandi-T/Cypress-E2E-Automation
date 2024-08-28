import "cypress-iframe";
/// <reference types="cypress-xpath"/>

describe("iframes", () => {
  it("method1", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");
    //storing iframe
    let iframe = cy
      .get("#mce_0_ifr")
      .its("0.contentDocument.body")
      .should("be.visible")
      .then(cy.wrap);

    iframe.clear().type("hi guys{ctrl+a}");
    cy.wait(2000);
    cy.get("button[title='Bold']").click();
  });

  it("method2", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");
    //using custom command
    cy.getIframe("#mce_0_ifr").clear().type("hi guys{ctrl+a}");
    cy.wait(2000);
    cy.get("button[title='Bold']").click();
  });

  it("method3", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");
    //using iframe plugin
    cy.frameLoaded("#mce_0_ifr");
    cy.iframe("#mce_0_ifr").clear().type("hi guys{ctrl+a}");
    cy.wait(2000);
    cy.get("button[title='Bold']").click();
  });
});
