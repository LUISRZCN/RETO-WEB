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
    TextProducts: `.jsx-245626150.category-title`
};
let dashboardPage = class dashboardPage extends wdio_page_objects_1.Page {
    obtainText() {
        $(selectors.TextProducts).waitForDisplayed(5000);
        $(selectors.TextProducts).scrollIntoView();
        return $(selectors.TextProducts).isExisting();
    }
};
dashboardPage = __decorate([
    wdio_page_objects_1.PageContext({
        path: '/',
        wrapper: `body`,
    })
], dashboardPage);
exports.dashboardPage = dashboardPage;
//# sourceMappingURL=dashboard.page.js.map