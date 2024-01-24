function encontrarElemento(elemento, array) {
  // Busca el elemento pasado por argumento dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:
  return array.indexOf(elemento);
}
let animales = ['Puma', 'Oso', 'Tigre', 'Leon', 'Puma'];
let animal = 'Leon';
console.log(encontrarElemento(animal, animales));
module.exports = encontrarElemento;
