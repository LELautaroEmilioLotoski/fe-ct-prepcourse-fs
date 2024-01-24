function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let resultado = resultadosTest.reduce((accumulador, elemento) =>(accumulador + elemento));
  return resultado / resultadosTest.length;
}
promedioResultadosTest([10, 8, 2, 7, 9])
module.exports = promedioResultadosTest;
