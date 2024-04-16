class dashboardObjects {
  get loginHeaderBtn() {
    return cy.get('[data-cy="login-header-btn"]');
  }
  get emailInput() {
    return cy.get('[data-cy="email-input"]');
  }
  get passwordInput() {
    return cy.get('[data-cy="passsword-input"]');
  }

  get profileHeaderBtn() {
    return cy.get('[data-cy="profile-pic"]');
  }

  get profileHeaderLinkBtn() {
    return cy.get('[data-cy="link-01-dashboard"]');
  }
  get btn() {
    return cy.get('[data-cy="btn"]');
  }
  get boostBtn() {
    return cy.get('[data-cy="boost-btn"]');
  }
  get closeBoostBtn() {
    return cy.get('[data-cy="close-modal-btn"]');
  }
}

export default dashboardObjects;
