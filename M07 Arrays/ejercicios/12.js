function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let resultado = arrayOfNums.reduce((accumulador, currentValue) => accumulador + currentValue);
  return resultado;
}
agregarNumeros([5, 2, 3]);
module.exports = agregarNumeros;
