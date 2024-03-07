"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginPage = void 0;
const wdio_page_objects_1 = require("@testing/wdio-page-objects");
const selectors = {
    button_sesion: `.Account-module__icon-container___1rHHv`,
    email: `#testId-input-email`,
    password: `#testId-input-password`,
    button_login: `#testId-btn-login-button`
};
let loginPage = class loginPage extends wdio_page_objects_1.Page {
    enterCredentials(email, password) {
        $(selectors.button_sesion).click(),
            browser.pause(5000),
            $(selectors.email).setValue(email),
            $(selectors.password).setValue(password),
            $(selectors.button_login).click(),
            browser.pause(5000);
    }
};
loginPage = __decorate([
    wdio_page_objects_1.PageContext({
        path: '/homecenter-co/',
        wrapper: 'body'
    })
], loginPage);
exports.loginPage = loginPage;
//# sourceMappingURL=login.page.js.map