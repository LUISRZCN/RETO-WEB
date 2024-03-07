import { expect } from "chai";
import { Page, PageContext, pageProvider } from "@testing/wdio-page-objects"

const selectors = {
  categoria: `//a[contains(text(),'Construcción y Ferretería')]`,
  subcategoria: `(//a[contains(text(),'Cementos, Concreto y Morteros')])[1]`,
  checkBox: `(//span[@class='jsx-2815902796 checkmark '])`,
  product: `div.jsx-2974854745 a[id="title-pdp-link"]`,
  numberAddToCart: `(//input[@id='testId-input-product-quantity-desktop'])[2]`,
  //addToCart: `(//button[@id='testId-btn-add-to-cart'])[2]`,
  addToCart: `(//span[@class='jsx-3051388068 jsx-139374854 add-to-cart-label'][normalize-space()='Agregar al carro'])[1]`,
  returnToCategory: `//span[@class='jsx-3448568250'][normalize-space()='Cementos, Concreto y Morteros']`,
  cloudButton: `//li[@class='s-list-inline-item s-d-none s-d-lg-inline-block']//div//button`,
  buttondCart: `//span[@class='MiniCart-module__icon-container___173Po']//*[name()='svg']`,
  numbreOfProducts: `//span[@id='testId-cart-header-count']`
}

@PageContext({
  path: '/',
  wrapper: 'body'
})



export class AddCard extends Page {

  OpenCategoria() {

    $(selectors.cloudButton).click();
    browser.pause(5000)

    const categoriaElement = $(selectors.categoria);

    // Mover el mouse sobre el elemento de la categoría
    categoriaElement.moveTo();

    // Esperar un tiempo para que se muestre algún efecto, como la aparición de un menú desplegable
    browser.pause(2000);
    $(selectors.subcategoria).click();
    browser.pause(5000)
  }

  select_product() {
    // Hacer clic en tres productos aleatorios
    for (let i = 0; i < 3; i++) {
      // Obtener todos los productos
      const products = $$(selectors.product);

      // Seleccionar un producto aleatorio
      const randomProducts = products[Math.floor(Math.random() * products.length)];

      const headerHeight = 100;
      const productPosition = randomProducts.getLocation('y') - headerHeight;

      // hacer un scroll a una posicion visible del checkbox
      browser.execute((position) => {
        window.scrollTo(0, position);
      }, productPosition);
      // hacer clic en el producto
      randomProducts.click();

      // funcion para elegir un numero aleatorio de 1 a 5

      function obtenerNumeroAleatorio(): number {
        // Genera un número aleatorio entre 1 y 5
        const numeroAleatorio = Math.floor(Math.random() * 5) + 1;
        return numeroAleatorio;
      }

      // Llama a la función para obtener un número aleatorio y guárdalo en una variable
      const numeroAleatorio = obtenerNumeroAleatorio();


      $(selectors.numberAddToCart).click(),
        browser.keys('\uE017');
      browser.keys('\uE003');
      $(selectors.numberAddToCart).setValue(numeroAleatorio),
        browser.pause(5000),
        $(selectors.addToCart).click(),
        browser.pause(5000)

      const desiredUrl = "https://www.homecenter.com.co/homecenter-co/category/cat5510024/cementos-concreto-y-morteros/";

      const currentUrl = driver.getUrl();

      // Comparar la URL actual con la deseada
      if (currentUrl !== desiredUrl) {
        // Navegar a la página deseada
        driver.url(desiredUrl);
      }

    }

  }

  validateCart() {

    $(selectors.buttondCart).click()

    // Obtener el elemento
    const cartCountElement = $(`//span[@id='testId-cart-header-count']`);

    // Verificar si el elemento existe
    const exists = cartCountElement.isExisting();

    if (exists) {
      // Obtener el texto del elemento
      const cartCountText = cartCountElement.getText();

      // Convertir el texto a un número entero
      const cartItemCount = parseInt(cartCountText);

      // Verificar si el contenido es mayor o igual a 3
      expect(cartItemCount).to.be.at.least(3);
    } else {
      // Si el elemento no existe, mostrar un mensaje de error o manejar la situación según sea necesario
      console.error("El selector no existe");
    }

  }

}

