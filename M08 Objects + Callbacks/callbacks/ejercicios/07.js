function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  return arrayOfStrings.filter(function(elemento){
    return elemento.startsWith('a');
  })
}
let palabras = ['hola', 'asado', 'amarillo', 'almendra', 'pera', 'papel'];
let resultado = filter(palabras);
console.log(resultado);
module.exports = filter;
