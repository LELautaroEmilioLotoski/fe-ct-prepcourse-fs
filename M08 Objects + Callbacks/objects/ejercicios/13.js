function eliminarPropiedad(objeto, propiedad) {
  // El parámetro "propiedad" es una propiedad del objeto que recibes.
  // Debes eliminarla del objeto y retornarlo finalmente.
  // Tu código:
  delete objeto[propiedad];
  return objeto;
}
const perro = {
  patas: 4,
  cola: 1,
}
eliminarPropiedad(perro, 'patas');
module.exports = eliminarPropiedad;
