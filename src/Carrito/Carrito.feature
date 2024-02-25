@Carrito

Feature: Agregar al carrito

  Scenario: añadir productos al carrito de compras
    Given Yo como usuario me encuentro en la pagina principal de Homecenter
    And nos posicionamos sobre categoria de construccion y ferreteria
    And doy click en la supcategoria de ladrillos y bloques
    And selecciono el apartado de cementos
    When agrego tres productos aleatoriamente
    Then los productos se encuentran en el carrito de compras
