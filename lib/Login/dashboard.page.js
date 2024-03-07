"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardPage = void 0;
const wdio_page_objects_1 = require("@testing/wdio-page-objects");
const selectors = {
    userTextField: `.Account-module__welcome-name___1-86E`
};
let dashboardPage = class dashboardPage extends wdio_page_objects_1.Page {
    obtainText() {
        $(selectors.userTextField).waitForDisplayed(5000);
        return $(selectors.userTextField).isExisting();
    }
};
dashboardPage = __decorate([
    wdio_page_objects_1.PageContext({
        path: '/homecenter-co/',
        wrapper: `body`,
    })
], dashboardPage);
exports.dashboardPage = dashboardPage;
//# sourceMappingURL=dashboard.page.js.map