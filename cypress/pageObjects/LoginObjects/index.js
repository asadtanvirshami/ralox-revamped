class authObjects {
  get loginHeaderBtn() {
    return cy.get('[data-cy="login-header-btn"]');
  }
  get logOutHeaderBtn() {
    return cy.get('[data-cy="logout-header-btn"]');
  }
  get emailInput() {
    return cy.get('[data-cy="email-input"]');
  }
  get passwordInput() {
    return cy.get('[data-cy="passsword-input"]');
  }
  get btn() {
    return cy.get('[data-cy="btn"]');
  }
  get profileHeaderBtn() {
    return cy.get('[data-cy="profile-pic"]');
  }

  get profileHeaderLinkBtn() {
    return cy.get('[data-cy="logout-header-btn"]');
  }
}

export default authObjects;
