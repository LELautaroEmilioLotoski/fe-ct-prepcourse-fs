function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  let arr = array;
  let multiplicarPorDos = arr.map((num) => {
    return num * 2;
  })
  if(multiplicarPorDos){
    return multiplicarPorDos;
  }else if(multiplicarPorDos == []){
    return [];
  }
}
console.log(duplicarElementos([1, 2, 3]))
module.exports = duplicarElementos;
