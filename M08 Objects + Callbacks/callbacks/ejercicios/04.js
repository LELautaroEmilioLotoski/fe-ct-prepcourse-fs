function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // NOTA: no debes retOrnar nada.
  // Tu código:
  var suma = arrayOfNumbers.reduce(function (total, numero) {
    return total + numero;
  }, 0);

  cb(suma);
}
sumarArray([1, 2, 3, 4, 5], function (resultado) {
  console.log("La suma es: " + resultado);
});
module.exports = sumarArray;
