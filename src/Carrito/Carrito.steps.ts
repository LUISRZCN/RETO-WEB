import { pageProvider } from "@testing/wdio-page-objects";
import { AddCard } from "./Carrito.page";
import { dashboardPage } from "./dashboard.page";
import { Given, When, Then, World } from "@testing/cucumber-runner";
import { expect } from "chai";

export class AddCardSteps {
  private Addcard: AddCard;
  private dashboardPage: dashboardPage;

  constructor() {
    this.Addcard = new AddCard();
    this.dashboardPage = new dashboardPage();
  }

  @Given(/^Yo como usuario me encuentro en la pagina principal de Homecenter$/)
  navigateToLoginPage() {
    pageProvider.go(AddCard);
  }

  @When(/^nos posicionamos sobre categoria de construccion y ferreteria$/)
  clickCategoria() {
    this.Addcard.OpenCategoria();
  }

  @When(/^doy click en la supcategoria de ladrillos y bloques$/)
  clickSubcategoria() {
    this.Addcard.Opensubcategoria();
  }

  @When(/^agrego tres productos aleatoriamente$/)
  AgregarProducts() {
    this.Addcard.select_product();
  }
  // Agrego los productos al carrito
  @When(/^Los agrego al carrito$/)
  AgregarCarrito() {
    this.Addcard.AddToCart();
  }

  @Then(/^los productos se encuentran en el carrito de compras$/)
  verifySuccessfulLogin() {
    expect(this.dashboardPage.obtainText()).to.be.true;
  }
}
