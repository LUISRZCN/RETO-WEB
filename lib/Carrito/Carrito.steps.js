"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCardSteps = void 0;
const wdio_page_objects_1 = require("@testing/wdio-page-objects");
const Carrito_page_1 = require("./Carrito.page");
const dashboard_page_1 = require("./dashboard.page");
const cucumber_runner_1 = require("@testing/cucumber-runner");
const chai_1 = require("chai");
class AddCardSteps {
    constructor() {
        this.Addcard = new Carrito_page_1.AddCard();
        this.dashboardPage = new dashboard_page_1.dashboardPage();
    }
    navigateToLoginPage() {
        wdio_page_objects_1.pageProvider.go(Carrito_page_1.AddCard);
    }
    clickCategoria() {
        this.Addcard.OpenCategoria();
    }
    AgregarProducts() {
        this.Addcard.select_product();
    }
    verifySuccessfulLogin() {
        chai_1.expect(this.Addcard.validateCart()).to.be.true;
    }
}
__decorate([
    cucumber_runner_1.Given(/^Yo como usuario me encuentro en la pagina principal de Homecenter$/),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AddCardSteps.prototype, "navigateToLoginPage", null);
__decorate([
    cucumber_runner_1.When(/^nos posicionamos sobre categoria de construccion y ferreteria y elegimos una subcategoria$/),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AddCardSteps.prototype, "clickCategoria", null);
__decorate([
    cucumber_runner_1.When(/^agrego tres productos aleatoriamente$/),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AddCardSteps.prototype, "AgregarProducts", null);
__decorate([
    cucumber_runner_1.Then(/^los productos se encuentran en el carrito de compras$/),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AddCardSteps.prototype, "verifySuccessfulLogin", null);
exports.AddCardSteps = AddCardSteps;
//# sourceMappingURL=Carrito.steps.js.map