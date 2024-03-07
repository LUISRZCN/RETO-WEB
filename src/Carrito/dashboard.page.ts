import { Page, PageContext, pageProvider } from "@testing/wdio-page-objects";


const selectors = {
  TextProducts: `.jsx-245626150.category-title`
};

@PageContext({
  path: '/',
  wrapper: `body`, //Padre  o nodo principal
})

export class dashboardPage extends Page {

  obtainText() {
    $(selectors.TextProducts).waitForDisplayed(5000)
    $(selectors.TextProducts).scrollIntoView();

    return $(selectors.TextProducts).isExisting();

  }

}