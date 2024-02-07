const listarPropiedades = (objeto) => {
  // Lista y retorna todas las propiedades que posee el objeto recibido por la función.
  // PISTA: Puedes usar el método Object.keys().
  // Tu código:
  return Object.keys(objeto);
};
let auto = {
  puertas: 4,
  motor: 1.6
}
let verObjeto = listarPropiedades(auto);
console.log(verObjeto);
module.exports = listarPropiedades;
