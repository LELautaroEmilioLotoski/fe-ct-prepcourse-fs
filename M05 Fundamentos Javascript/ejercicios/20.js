function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  if (typeof letra === 'string' && letra.length === 1) {
    // Convertir la letra a minúscula para facilitar la comparación
    let letraMinuscula = letra.toLowerCase();

    // Verificar si la letra es una vocal
    if (letraMinuscula === 'a' || letraMinuscula === 'e' || letraMinuscula === 'i' || letraMinuscula === 'o' || letraMinuscula === 'u') {
      return "Es vocal"
    } else {
      return "Dato incorrecto"
    }
  } else {
    return "Dato incorrecto"
  }

}
console.log(esVocal('a'));
console.log(esVocal("B"));
console.log(esVocal("xy"));
module.exports = esVocal;
