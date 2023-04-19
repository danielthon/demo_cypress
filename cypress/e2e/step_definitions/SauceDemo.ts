import { Given, When, Then, After } from "@badeball/cypress-cucumber-preprocessor"
import LoginPage from '../../support/page_objects/LoginPage'
import InventoryPage from '../../support/page_objects/InventoryPage'
import InventoryItemPage from '../../support/page_objects/InventoryItemPage'
import SharedComponentsBetweenPages from '../../support/page_objects/SharedComponentsBetweenPages'
import CartPage from '../../support/page_objects/CartPage'
import CheckoutYourInformationPage from '../../support/page_objects/CheckoutYourInformationPage'
import CheckoutOverviewPage from '../../support/page_objects/CheckoutOverviewPage'

const loginPage = new LoginPage
const inventoryPage = new InventoryPage
const inventoryItemPage = new InventoryItemPage
const cartPage = new CartPage
const checkoutStep1 = new CheckoutYourInformationPage
const checkoutStep2 = new CheckoutOverviewPage
const sharedComponentsBetweenPages = new SharedComponentsBetweenPages

// [Given] functions

Given("a shopping website navigated through {string} url", (url: string) => {
    cy.visit(url)
    
    cy.url().then(($currentUrl) => {
        cy.wrap($currentUrl.replace("www.", ""))
            .should('eq', url)
    })
});


Given("I am logged as {string} with password {string} in the products page", (username, password) => {
    loginPage.login(username,password)
});

// [When] functions

When("I sort the products by {string}", (order) => {
    inventoryPage.sortProductsBy(order);
});

When("I click in {string} product", (productName) => {
    inventoryPage.clickProduct(productName)
});

When("I add {string} product to the cart", (productName) => {
    inventoryPage.addToCart(productName)
});

When("I click on the cart", () => {
    inventoryPage.goToCart()
});

When("I proceed to checkout", () => {
    cartPage.goToCheckout()
});

When("I fill the step one with my information", () => {
    checkoutStep1.fillYourInformation("Saruman", "The Wise", "12345678")
});

When("I proceed to continue checkout", () => {
    checkoutStep1.continueToOverview()
});

// [Then] functions

Then("the {string} product description should be {string}", (productName, productDescription) => {
    inventoryItemPage.assertProductTitle(productName)
    inventoryItemPage.assertProductDescription(productDescription)
});

Then("the {string} product should be listed in the products", (productName) => {
    checkoutStep2.assertCheckoutProductTitle(productName)
});

// [After] functions

After({ tags: "@cart" }, () => {
    sharedComponentsBetweenPages.resetAppState()
});