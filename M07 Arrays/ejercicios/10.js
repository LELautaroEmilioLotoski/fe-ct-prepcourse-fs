function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  if (array.length === 0) {
    return 0;
  }

  // Inicializa la variable con el primer índice
  let indiceMasGrande = 0;

  // Recorre el array desde el segundo elemento
  for (let i = 1; i < array.length; i++) {
    // Compara cada elemento con el número en el índiceMasGrande
    if (array[i] > array[indiceMasGrande]) {
      // Actualiza el índiceMasGrande si encuentras un número más grande
      indiceMasGrande = i;
    }
  }

  // Devuelve el índice del número más grande
  return indiceMasGrande;
}
const miArray = [3, 8, 2, 12, 5];
encontrarIndiceMayor(miArray);
module.exports = encontrarIndiceMayor;
