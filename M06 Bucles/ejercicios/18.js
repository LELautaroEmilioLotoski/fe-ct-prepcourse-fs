function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let resultado = 1;
  if(a > b){
    [a, b] = [b, a];
  }
  for(i = a; i <= b; i++){
    resultado *= i;
    if(resultado === 0){
      return 0;
    }
  }

  return resultado;
}
console.log(productoEntreNúmeros(2, 5));
module.exports = productoEntreNúmeros;