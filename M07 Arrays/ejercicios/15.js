function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  return array.every((num) => num === array[0]);
}
console.log(todosIguales([10, 10, 10, 10]))
module.exports = todosIguales;
