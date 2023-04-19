export default class CheckoutYourInformationPage {

    elements = {
        txtFirstName: () => cy.get("#first-name"),
        txtLastName: () => cy.get("#last-name"),
        txtZipPostalCode: () => cy.get("#postal-code"),
        btnContinue: () => cy.get("#continue"),
    };
  
    fillYourInformation(firstName, lastName, zipPostalCode) {
        this.elements.txtFirstName().type(firstName);
        this.elements.txtLastName().type(lastName);
        this.elements.txtZipPostalCode().type(zipPostalCode);
    }

    continueToOverview() {
        this.elements.btnContinue().click();
    }
}