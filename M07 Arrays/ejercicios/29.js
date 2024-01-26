function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  if(numeros.length === 0){
    return null;
  }
  numeros.sort((a, b) => a - b);

  // Iterar a través del array para encontrar el número faltante
  for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros[i] + 1 !== numeros[i + 1]) {
      // Si el siguiente número no es consecutivo, entonces hay un número faltante
      return numeros[i] + 1;
    }
  }

  // Si no se encontró ningún número faltante, devolver null
  return null;
}
encontrarNumeroFaltante([1, 2, 3, 5, 6]);
module.exports = encontrarNumeroFaltante;