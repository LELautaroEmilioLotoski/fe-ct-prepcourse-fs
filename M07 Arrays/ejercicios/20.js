function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  let resultado = numeros;
  let numero =  0;
  for(let i = 0; i < numeros.length; i++){
    if(resultado[i]% 2 !== 0){
      continue;
    }else{
      numero++;
    } 
  }
  return numero;
}
contarParesConContinue([1, 2, 3, 4, 5, 6]);
module.exports = contarParesConContinue;
