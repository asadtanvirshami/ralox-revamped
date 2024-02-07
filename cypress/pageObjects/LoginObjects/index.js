class authObjects {
    get loginHeaderBtn () {
      return cy.get('[data-cy="login-header-btn"]');
    }
    get logOutHeaderBtn () {
      return cy.get('[data-cy="logout-header-btn"]');
    }
    get emailInput () {
      return cy.get('[data-cy="email-input"]');
    }
    get passwordInput () {
      return cy.get('[data-cy="passsword-input"]');
    }
    get loginBtn () {
      return cy.get('[data-cy="btn"]');
    }
  }
  
  export default authObjects;
  