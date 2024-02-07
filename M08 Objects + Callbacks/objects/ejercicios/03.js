const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
  // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
  // Tu código:
  objeto[propiedad] = valor;
  return objeto;
};
let auto = {
  marca: 'Ferrari'
}
agregarNuevaPropiedad(auto, 'auto.modelo', 'Testarroza');
console.log(auto);
module.exports = agregarNuevaPropiedad;
