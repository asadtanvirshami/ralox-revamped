import authObjects from "../../pageObjects/LoginObjects";

const authObj = new authObjects();

describe("User-Login-Authorization", () => {
  it("should login user", () => {
    //*********Auth-Testing*********
    cy.visit("/");
    authObj.loginHeaderBtn.click();
    authObj.emailInput.type("williamclarkj@gmail.com");
    authObj.passwordInput.type("Admin123");
    authObj.btn.contains("Login").click();
    authObj.profileHeaderBtn.click();
    authObj.logOutHeaderBtn.click();
  });
});

export {};
