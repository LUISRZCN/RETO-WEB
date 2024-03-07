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
exports.loginStep = void 0;
const wdio_page_objects_1 = require("@testing/wdio-page-objects");
const login_page_1 = require("./login.page");
const dashboard_page_1 = require("./dashboard.page");
const cucumber_runner_1 = require("@testing/cucumber-runner");
const chai_1 = require("chai");
class loginStep {
    constructor() {
        this.loginPage = new login_page_1.loginPage();
        this.dashboardPage = new dashboard_page_1.dashboardPage();
    }
    navigateToLoginPage() {
        wdio_page_objects_1.pageProvider.go(login_page_1.loginPage);
    }
    enterCredentials(email, password) {
        this.loginPage.enterCredentials(email, password);
    }
    verifySuccessfulLogin() {
        chai_1.expect(this.dashboardPage.obtainText()).to.be.true;
    }
}
__decorate([
    cucumber_runner_1.Given(/^Yo como usuario me encuentro en la pagina de inicio$/),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], loginStep.prototype, "navigateToLoginPage", null);
__decorate([
    cucumber_runner_1.When(/^Realizo el inicio de sesion con mi correo "([^"]*)" mi contraseña "([^"]*)"$/),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], loginStep.prototype, "enterCredentials", null);
__decorate([
    cucumber_runner_1.Then(/^El logueo se realiza exitosamente regresando a la pestaña de inicio$/),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], loginStep.prototype, "verifySuccessfulLogin", null);
exports.loginStep = loginStep;
//# sourceMappingURL=login.steps.js.map