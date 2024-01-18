function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  return texto.split('').reverse().join('');
}
let cadenaOriginal = "Hola, mundo!";
console.log(invertirTexto(cadenaOriginal));
module.exports = invertirTexto;