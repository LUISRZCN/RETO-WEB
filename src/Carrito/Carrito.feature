Feature: Agregar al carrito

  Background: Inicio de sesion exitoso
    Given Yo como usuario me encuentro en la pagina de inicio
    When Realizo el inicio de sesion con mi correo "rodriguezcalderon1990@gmail.com" mi contraseña "Theroop1425"
    Then El logueo se realiza exitosamente regresando a la pestaña de inicio

  @Carrito

  Scenario: añadir productos al carrito de compras
    Given Yo como usuario me encuentro en la pagina principal de Homecenter
    And nos posicionamos sobre categoria de construccion y ferreteria
    And doy click en la supcategoria de ladrillos y bloques
    And agrego tres productos aleatoriamente
    When Los agrego al carrito
    Then los productos se encuentran en el carrito de compras
