function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let convertirAMayuscula = array.map(palabra => {
    return palabra.toUpperCase();
  })
  return convertirAMayuscula;
}
let palabra = ['hola', 'todo', 'bien'];
console.log(convertirStringAMayusculas(palabra));
module.exports = convertirStringAMayusculas;
