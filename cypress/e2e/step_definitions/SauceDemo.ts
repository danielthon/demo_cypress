import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import LoginPage from '../../support/page_objects/LoginPage'
const loginPage = new LoginPage

Given("a shopping website navigated through {string} url", (url: string) => {
    cy.visit(url)

    cy.url().then(($currentUrl) => {
        const urlReplaced = $currentUrl.replace("www.", "")
        cy.wrap(urlReplaced).should('eq', url)
    })
});


Given("I am logged as {string} with password {string} in the products page", (username, password) => {
    loginPage.login(username,password)
});

When("I sort the products by {string}", (order) => {
    cy.then(() => {
        return "pending";
      });
});

When("I click in 'Sauce Labs Backpack' product", (productName) => {
    cy.then(() => {
        return "pending";
      });
});

When("I add {string} product to the cart", (productName) => {
    cy.then(() => {
        return "pending";
      });
});

When("I click on the cart", () => {
    cy.then(() => {
        return "pending";
      });
});

When("I proceed to checkout", () => {
    cy.then(() => {
        return "pending";
      });
});

When("I fill the step one with my information", () => {
    cy.then(() => {
        return "pending";
      });
});

When("I proceed to continue checkout", () => {
    cy.then(() => {
        return "pending";
      });
});

Then("the {string} product description should be {string}", (productName, productDescription) => {
    cy.then(() => {
        return "pending";
      });
});


Then("the {string} product should be listed in the products", (productName) => {
    cy.then(() => {
        return "pending";
      });
});