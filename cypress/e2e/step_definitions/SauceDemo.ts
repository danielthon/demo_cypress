import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from '../../support/page_objects/LoginPage';
const loginPage = new LoginPage;

Given("a shopping website navigated through {string} url", (url: string) => {
    cy.visit(url);
});


Given("I am logged as {string} with password {string} in the products page", (username, password) => {
    loginPage.login(username,password);
});
