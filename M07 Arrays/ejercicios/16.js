function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let meses = ["Enero", "Marzo", "Noviembre"];
  let mesesGuardados = [];

  for (let i = 0; i < array.length; i++) {
    if (meses.includes(array[i])) {
      mesesGuardados.push(array[i]);
    }
  }

  if (mesesGuardados.length !== meses.length) {
    return "No se encontraron los meses pedidos";
  }

  return mesesGuardados;
}
let mesesDesordenados = ["Julio", "Agosto", "Diciembre", "Marzo", "Febrero", "Enero", "Mayo", "Noviembre"]
let resultado = mesesDelAño(mesesDesordenados);
console.log(resultado);
module.exports = mesesDelAño;
