import { cyTimeOutLong } from '../constant';
import LoginObjects from '../pageObjects/LoginPageObjects';

const loginObj = new LoginObjects();

/// <reference types="cypress" />
Cypress.Commands.add('acceptCookiePolicy', () => {
  cy.get('body').then(($body) => {
    if ($body.find('[data-cy="accept-cookie-policy-btn"]').length == 1) {
      loginObj.acceptCookieBtn.click();
    }
  });
});

Cypress.Commands.add('login', (user, password) => {
  cy.visit('/', {
    headers: { 'Accept-Encoding': 'gzip, deflate' },
  });
  cy.wait(1000);

  cy.acceptCookiePolicy();

  loginObj.navLoginBtn.click();
  loginObj.signinEmailInput.should('be.visible').type(user);
  loginObj.signinPasswordInput.should('be.visible').type(password);

  cy.intercept('GET', '/api/user/loggedin').as('loginStatus');
  loginObj.submitButton.click();
  cy.wait('@loginStatus', { timeout: cyTimeOutLong })
    .its('response.statusCode')
    .should('eq', 200);
  loginObj.homePageBtn.should('be.visible');
  cy.wait(1000);
});

Cypress.Commands.add('logout', (visitHome) => {
  if (visitHome) {
    cy.visit('/', { headers: { 'Accept-Encoding': 'gzip, deflate' } });
    cy.wait(1000);
  }
  cy.intercept('GET', '/api/user/loggedin').as('loginStatus');
  loginObj.navAvatarIcon.should('be.visible').click();
  loginObj.navLogoutBtn.should('be.visible').click();
  loginObj.navLoginBtn.should('be.visible');
});

export {};
