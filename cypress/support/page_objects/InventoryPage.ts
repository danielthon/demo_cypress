
export default class InventoryPage {

    elements = {
        lblItemName: (itemName) => cy.contains(itemName),
        divItemName: (itemName) => cy.contains(itemName).parent().parent().parent(),
        dropSort: () => cy.get(".product_sort_container"),
        btnCart: () => cy.get("#shopping_cart_container"),
    };
  
    sortProductsBy(criteria) {
        this.elements.dropSort().select(criteria);
    }

    clickProduct(productName) {
        this.elements.lblItemName(productName).click();
    }

    addToCart(productName) {
        this.elements.divItemName(productName).within(() => { return cy.get("button").click() });
    }

    goToCart() {
        this.elements.btnCart().click();
    }
}