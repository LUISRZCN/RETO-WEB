import { Page, PageContext, pageProvider } from "@testing/wdio-page-objects";

const selectors = {

}

@PageContext({
  path: '/',
  wrapper: 'body' //Nodo padre
})

export class loginPage extends Page {
  enterCredentials()
}