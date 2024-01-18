function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos "str1" e "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Tu código:
  var a = str1;
  var b = str2;
  return a.length === b.length;
  }
  console.log(tienenMismaLongitud("str1".length, "str2".length))
module.exports = tienenMismaLongitud;