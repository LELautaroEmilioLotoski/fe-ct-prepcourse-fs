const breakStatement = require('../ejercicios/18');

test('Debe retornar un arreglo con la tabla de multiplicar del 6', function () {
  expect(breakStatement(60)).toEqual([0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60]);
});

test('La ejecución se debe interrumpir en el caso pedido', function () {
  expect(breakStatement(61)).toEqual('Se interrumpió la ejecución');
});
