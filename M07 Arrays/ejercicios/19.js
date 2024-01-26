function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  let resultado = [];
  for(let i = 1; i < 10; i++){
    num+=2;
    if(num[i] === 5){
      continue;
    }else{
      resultado.push(num);
    }
  }
  return resultado;
}
console.log(continueStatement(10));
module.exports = continueStatement;
