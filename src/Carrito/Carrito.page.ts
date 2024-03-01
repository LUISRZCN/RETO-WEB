import { Page, PageContext, pageProvider } from "@testing/wdio-page-objects"

const selectors = {
  categoria: `//a[contains(text(),'Construcción y Ferretería')]`,
  subcategoria: `(//a[contains(text(),'Cementos, Concreto y Morteros')])[1]`,
  checkBox: `(//span[@class='jsx-2815902796 checkmark '])`,
  buttonBuyl: `//button[@id='testId-btn-compare-button']`,
  buttonCart: `//thead[@class="jsx-3696295907 jsx-3496414204"]//button[@id="testId-btn-add-to-cart"]`,
  buttonCancel: `//button[@id='testId-btn-compare-button']`,
  TextProducts: `.jsx-245626150.category-title`,
  cloudButton: `/html[1]/body[1]/div[1]/header[1]/div[2]/div[1]/div[3]/ul[1]/li[1]/div[1]/div[3]/div[2]/div[1]/div[1]/button[1]`
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
  }

  Opensubcategoria() {
    $(selectors.subcategoria).click();
    browser.pause(5000)
  }

  select_product() {
    // Hacer clic en tres productos aleatorios
    for (let i = 0; i < 3; i++) {
      // Obtener todos los checkboxes
      const checkboxes = $$(selectors.checkBox);

      // Seleccionar un checkbox aleatorio
      const randomCheckbox = checkboxes[Math.floor(Math.random() * checkboxes.length)];

      const headerHeight = 100;
      const checkboxPosition = randomCheckbox.getLocation('y') - headerHeight;

      // hacer un scrll a una posicion visible del checkbox
      browser.execute((position) => {
        window.scrollTo(0, position);
      }, checkboxPosition);
      randomCheckbox.click();
    }

    // Hacer clic en el botón de compra
    $(selectors.buttonBuyl).click();

    // Esperar a que se muestre la carta de compra
    browser.pause(2000);
  }
  AddToCart() {

    // Obtener todos los botones de agregar al carrito
    const buttonsCart = $$(selectors.buttonCart);

    // Hacer clic en cada botón de agregar al carrito
    for (const buttonCart of buttonsCart) {
      // Hacer clic en el botón de agregar al carrito sin necesidad de scroll
      buttonCart.click();

      // Esperar un tiempo para que se agregue el producto al carrito
      browser.pause(1000);
    }

    // Hacer clic en el botón de cerrar
    $(selectors.buttonCancel).click();
  }
}
