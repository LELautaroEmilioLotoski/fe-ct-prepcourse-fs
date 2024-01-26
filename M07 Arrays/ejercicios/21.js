function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  let resultado = 0;
  for(let i = 0; i < secuencia.length; i++){
    resultado = secuencia.find((multiplo) => multiplo % n === 0);
    if( resultado % n !==0 ){
      return undefined;
    }
  }
  return resultado;
}
encontrarPrimerMultiploDeN(2, [1, 2, 3, 4, 5, 6]);
module.exports = encontrarPrimerMultiploDeN;