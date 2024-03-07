"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCard = void 0;
const chai_1 = require("chai");
const wdio_page_objects_1 = require("@testing/wdio-page-objects");
const selectors = {
    categoria: `//a[contains(text(),'Construcción y Ferretería')]`,
    subcategoria: `(//a[contains(text(),'Cementos, Concreto y Morteros')])[1]`,
    checkBox: `(//span[@class='jsx-2815902796 checkmark '])`,
    product: `div.jsx-2974854745 a[id="title-pdp-link"]`,
    numberAddToCart: `(//input[@id='testId-input-product-quantity-desktop'])[2]`,
    addToCart: `(//span[@class='jsx-3051388068 jsx-139374854 add-to-cart-label'][normalize-space()='Agregar al carro'])[1]`,
    returnToCategory: `//span[@class='jsx-3448568250'][normalize-space()='Cementos, Concreto y Morteros']`,
    cloudButton: `//li[@class='s-list-inline-item s-d-none s-d-lg-inline-block']//div//button`,
    buttondCart: `//span[@class='MiniCart-module__icon-container___173Po']//*[name()='svg']`,
    numbreOfProducts: `//span[@id='testId-cart-header-count']`
};
let AddCard = class AddCard extends wdio_page_objects_1.Page {
    OpenCategoria() {
        $(selectors.cloudButton).click();
        browser.pause(5000);
        const categoriaElement = $(selectors.categoria);
        categoriaElement.moveTo();
        browser.pause(2000);
        $(selectors.subcategoria).click();
        browser.pause(5000);
    }
    select_product() {
        for (let i = 0; i < 3; i++) {
            const products = $$(selectors.product);
            const randomProducts = products[Math.floor(Math.random() * products.length)];
            const headerHeight = 100;
            const productPosition = randomProducts.getLocation('y') - headerHeight;
            browser.execute((position) => {
                window.scrollTo(0, position);
            }, productPosition);
            randomProducts.click();
            function obtenerNumeroAleatorio() {
                const numeroAleatorio = Math.floor(Math.random() * 5) + 1;
                return numeroAleatorio;
            }
            const numeroAleatorio = obtenerNumeroAleatorio();
            $(selectors.numberAddToCart).click(),
                browser.keys('\uE017');
            browser.keys('\uE003');
            $(selectors.numberAddToCart).setValue(numeroAleatorio),
                browser.pause(5000),
                $(selectors.addToCart).click(),
                browser.pause(5000);
            const desiredUrl = "https://www.homecenter.com.co/homecenter-co/category/cat5510024/cementos-concreto-y-morteros/";
            const currentUrl = driver.getUrl();
            if (currentUrl !== desiredUrl) {
                driver.url(desiredUrl);
            }
        }
    }
    validateCart() {
        $(selectors.buttondCart).click();
        const cartCountElement = $(`//span[@id='testId-cart-header-count']`);
        const exists = cartCountElement.isExisting();
        if (exists) {
            const cartCountText = cartCountElement.getText();
            const cartItemCount = parseInt(cartCountText);
            chai_1.expect(cartItemCount).to.be.at.least(3);
        }
        else {
            console.error("El selector no existe");
        }
    }
};
AddCard = __decorate([
    wdio_page_objects_1.PageContext({
        path: '/',
        wrapper: 'body'
    })
], AddCard);
exports.AddCard = AddCard;
//# sourceMappingURL=Carrito.page.js.map