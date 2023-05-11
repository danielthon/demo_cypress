export default class CheckoutYourInformationPage {

    elements = {
        btnCheckout: () => cy.get("#checkout"),
    };
  
    goToCheckout() {
        this.elements.btnCheckout().click();
    }
}