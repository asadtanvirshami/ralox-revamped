import authObjects from "../../pageObjects/LoginObjects";

const authObj = new authObjects();

describe('User-Login-Authorization', () => {
  it('should login user', () => {
    cy.visit('/home')
    authObj.loginHeaderBtn.click()
    authObj.emailInput.type('johnathan@gmail.com')
    authObj.passwordInput.type('Admin123')
    authObj.loginBtn.contains('Login').click()
    authObj.logOutHeaderBtn.click()
  });
});

export {};
