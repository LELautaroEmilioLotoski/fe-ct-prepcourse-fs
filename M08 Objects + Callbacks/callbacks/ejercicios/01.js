function invocarCallback(cb) {
  // Invoca/ejecuta el callback `cb`.
  // NOTA: no debes retornar nada.
  // Tu código:
  cb();
}
invocarCallback(function() {
  console.log('El callback fue invocado con éxito');
});
module.exports = invocarCallback;
