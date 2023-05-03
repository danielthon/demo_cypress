export default class SharedComponentsBetweenPages {

    elements = {
        btnOpenSideMenu: () => cy.get("#react-burger-menu-btn"),
        btnResetAppState: () => cy.get("#reset_sidebar_link"),
    };
  
    resetAppState() {
      this.elements.btnOpenSideMenu().click();
      this.elements.btnResetAppState().click();
      cy.reload();
    }
}