function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let resultado = [];
  for(i = 0; i < array.length; i++){
    resultado.push(array[i] * i);
  }
  return resultado;
}
let miArray = [1, 2, 3, 4, 5];
multiplicarElementosPorIndice(miArray);
module.exports = multiplicarElementosPorIndice;
