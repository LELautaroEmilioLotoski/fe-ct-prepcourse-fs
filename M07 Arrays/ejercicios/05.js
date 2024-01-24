function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  const elementoEncontrado = array.find(function (elemento){
  return elemento.length >= 5;
}); 
return elementoEncontrado;
}
obtenerPrimerStringLargo(["hello", "world", "this", "is", "a", "test"]);
module.exports = obtenerPrimerStringLargo;
