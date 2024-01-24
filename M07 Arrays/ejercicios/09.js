function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let numero = array;
  let numeroMayor = 0;
  for(i = 0; i < numero.length; i++){
    if(numero[i] > 10){
      numeroMayor++;
    }
  }return numeroMayor;
}
contarElementosMayoresA10[1,5,8,10,20,50,80,90,70,60]
module.exports = contarElementosMayoresA10;
