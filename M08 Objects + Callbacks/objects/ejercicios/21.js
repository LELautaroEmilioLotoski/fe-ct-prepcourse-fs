function agregarMetodoCalculoDescuento(objetoProducto) {
  // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
  // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
  // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
  // Luego debes restar del precio total del producto ese valor de descuento.
  // Retornar el precio final.
  // Ejemplo:
  // Precio ---> 10
  // PorcentajeDeDescuento ---> 0.2
  // Precio final ---> 8
  // Tu código:
  precioFinal = 0;
  precioDescuento = 0;
  objetoProducto.calcularPrecioDescuento = function(){
    precioDescuento = this.precio * this.porcentajeDeDescuento;
    precioFinal  = this.precio - precioDescuento;
    return precioFinal;
  }
  return objetoProducto;
}
/*
precioProducto = 0;
objetoProducto = {
  precio: 10,
  porcentajeDeDescuento: 0.2,
  calcularPrecioDescuento = function(){
    precioProducto = ****
  }
}
*/
module.exports = agregarMetodoCalculoDescuento;
