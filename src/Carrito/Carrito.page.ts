import { Page, PageContext, pageProvider } from "@testing/wdio-page-objects"

const selectors = {
  categoria: `//a[contains(text(),'Construcción y Ferretería')]`,
  subcategoria: `(//a[contains(text(),'Cementos, Concreto y Morteros')])[1]`,
  producto: `(//button[@type='button'][normalize-space()='Agregar al carro'])`
}

@PageContext({
  path: '/',
  wrapper: 'body'
})

export class AddCard extends Page {

  OpenCategoria() {
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



}
