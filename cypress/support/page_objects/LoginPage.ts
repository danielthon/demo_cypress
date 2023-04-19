export default class LoginPage {

    elements = {
      usernameInput: () => cy.get("#user-name"),
      passwordInput: () => cy.get("#password"),
      loginBtn: () => cy.get("[type=submit]")
    };
  
    login(username,password){
      this.elements.usernameInput().type(username);
      this.elements.passwordInput().type(password);
      this.elements.loginBtn().click();
    }
}