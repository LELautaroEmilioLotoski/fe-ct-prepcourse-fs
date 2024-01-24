function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  let numeroPar = array;
  let numeros = numeroPar.filter(num =>{
    return num % 2 === 0;
  })
  return numeros
}
console.log(filtrarNumerosPares([1, 2, 3, 4, 5, 6]));
module.exports = filtrarNumerosPares;
