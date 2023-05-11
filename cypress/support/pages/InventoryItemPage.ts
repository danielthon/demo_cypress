export default class InventoryPage {

    elements = {
        lblTitle: () => cy.get(".inventory_details_name"),
        lblDescription: () => cy.get(".inventory_details_desc"),
    };
  
    assertProductTitle(title) {
        this.elements.lblTitle().should('have.text', title);
    }

    assertProductDescription(description) {
        this.elements.lblDescription().should('have.text', description);
    }
}