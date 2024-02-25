import { Page, PageContext, pageProvider } from "@testing/wdio-page-objects";

const selectors = {
  button_sesion: `.Account-module__icon-container___1rHHv`,
  email: `#testId-input-email`,
  password: `#testId-input-password`,
  button_login: `#testId-btn-login-button`
}

@PageContext({
  path: '/homecenter-co/',
  wrapper: 'body'//Nodo Padre
})

export class loginPage extends Page {
  enterCredentials(email: string, password: string) {
    $(selectors.button_sesion).click(),
      browser.pause(5000),
      $(selectors.email).setValue(email),
      $(selectors.password).setValue(password),
      $(selectors.button_login).click(),
      browser.pause(5000)
  }
}
