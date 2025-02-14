/// <reference types="cypress-xpath"/>

describe("Alerts", () => {
  it("simple alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsAlert()']").click();

    //to add event to manually validate alert
    cy.on("window:alert", (validate) => {
      expect(validate).to.contains("I am a JS Alert");
    });

    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });

  it("confirm alert-OK", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsConfirm()']").click();

    //to add event to manually validate alert
    cy.on("window:confirm", (validate) => {
      expect(validate).to.contains("I am a JS Confirm");
    });

    cy.get("#result").should("have.text", "You clicked: Ok");
  });

  it("confirm alert-Cancel", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsConfirm()']").click();

    //to add event to manually validate alert
    cy.on("window:confirm", (validate) => {
      expect(validate).to.contains("I am a JS Confirm");
    });

    cy.on("window:confirm", () => false); // to click on the cancel button

    cy.get("#result").should("have.text", "You clicked: Cancel");
  });

  it("prompt alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    //enter value before clicking on propmt button
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("Tadaa");
    });
    cy.get("button[onclick='jsPrompt()']").click();
    cy.get("#result").should("have.text", "You entered: Tadaa");
  });

  it("Authenticated alert", () => {
    /*cy.visit("https://the-internet.herokuapp.com/basic_auth", {
      auth: { username: "admin", password: "admin" },
    });*/
    //alternative
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    cy.get("div[class='example'] p").contains("Congratulations");
  });
});
