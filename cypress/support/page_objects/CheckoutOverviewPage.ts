export default class CheckoutYourInformationPage {

    elements = {
        lblFirstCartItemName: () => cy.get(".cart_list .inventory_item_name"),
        btnCheckout: () => cy.get("#checkout"),
    };
  
    assertCheckoutProductTitle(title) {
        this.elements.lblFirstCartItemName().should('have.text', title);
    }
}