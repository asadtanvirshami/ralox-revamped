import dashboardObjects from "../../pageObjects/DashboardObjects";

const dashboardObj = new dashboardObjects();

describe("Dashboard-Functionalities", () => {
  it("should login user", () => {
    //*********Auth-Testing*********
    cy.visit("/");
    dashboardObj.loginHeaderBtn.click();
    dashboardObj.emailInput.type("williamclarkj@gmail.com");
    dashboardObj.passwordInput.type("Admin123");
    dashboardObj.btn.contains("Login").click();
    dashboardObj.profileHeaderBtn.click();
    dashboardObj.profileHeaderLinkBtn.click();
    //*********Dashboard-Testing*********
    cy.visit("/dashboard");
    cy.wait(2000);
    dashboardObj.btn.contains("Next Page").click();
    dashboardObj.btn.contains("Previous Page").click();
  });
});

export {};
