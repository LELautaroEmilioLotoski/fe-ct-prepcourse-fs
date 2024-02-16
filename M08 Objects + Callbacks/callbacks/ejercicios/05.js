function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Itera sobre el arreglo y por cada elemento iterado, ejecuta el callback con este valor.
  // Tu código:
  array.forEach((num) => {
    return cb(num);
  })
}
forEach([1, 2, 3], function(numero){
  console.log('numero' + numero);
});
module.exports = forEach;
