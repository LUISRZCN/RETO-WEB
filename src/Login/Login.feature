@login

Feature: Inicio de sesion en Homecenter

  Scenario: Inicio de sesion exitoso
    Given Yo como usuario me encuentro en la pagina de inicio
    When Realizo el inicio de sesion con mi correo "rodriguezcalderon1990@gmail.com" mi contraseña "Theroop1425"
    Then El logueo se realiza exitosamente regresando a la pestaña de inicio
