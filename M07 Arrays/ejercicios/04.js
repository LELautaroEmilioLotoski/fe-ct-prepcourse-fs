function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  if (array.length === 0) {
    return undefined; // Retorna undefined si el arreglo está vacío
  }

  // Genera un índice aleatorio utilizando Math.random()
  const indiceAleatorio = Math.floor(Math.random() * array.length);

  // Retorna el elemento correspondiente al índice aleatorio
  return array[indiceAleatorio];
}
let arr = [1, 2, 3];
console.log(obtenerElementoAleatorio(Math.random(arr)));
module.exports = obtenerElementoAleatorio;
