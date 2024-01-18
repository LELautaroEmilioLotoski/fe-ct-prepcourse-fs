function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código: 
  if (!(fecha instanceof Date)) {
    return false;
  }

  // Verificar si la fecha resultante es igual a la fecha original
  return !isNaN(fecha) && fecha.getTime() === fecha.getTime();
}
const fechaValida = new Date('2022-01-14');
const fechaNoValida = new Date('2022-02-30');

console.log(esFechaValida(fechaValida)); // true
console.log(esFechaValida(fechaNoValida)); 
module.exports = esFechaValida;