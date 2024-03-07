import { pageProvider } from "@testing/wdio-page-objects";
import { loginPage } from "./login.page";
import { dashboardPage } from "./dashboard.page";
import { Given, When, Then, World } from "@testing/cucumber-runner";
import { expect } from "chai";

export class loginStep {
  private loginPage: loginPage;
  private dashboardPage: dashboardPage;

  constructor() {
    this.loginPage = new loginPage();
    this.dashboardPage = new dashboardPage();
  }

  @Given(/^Yo como usuario me encuentro en la pagina de inicio$/)
  navigateToLoginPage() {
    pageProvider.go(loginPage);
  }

  @When(/^Realizo el inicio de sesion con mi correo "([^"]*)" mi contraseña "([^"]*)"$/)
  enterCredentials(email: string, password: string) {
    this.loginPage.enterCredentials(email, password);
  }

  @Then(/^El logueo se realiza exitosamente regresando a la pestaña de inicio$/)
  verifySuccessfulLogin() {
    expect(this.dashboardPage.obtainText()).to.be.true;
  }

}
