function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:
  if(Array.isArray(arr) === true && arr.length > 0){
    return true;
  }else{
    return false;
  }
}
esArrayNoVacio([1, 2, 3]);
module.exports = esArrayNoVacio;