function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
    // Convertir la cadena a minúsculas y eliminar espacios en blanco
    const cadenaNormalizada = string.toLowerCase().replace(/\s/g, '');

    // Invertir la cadena
    const cadenaInvertida = cadenaNormalizada.split('').reverse().join('');
  
    // Comparar la cadena original con la invertida
    return cadenaNormalizada === cadenaInvertida;
}
let cadena1 = "anita lava la tina";
console.log(esPalindromo(cadena1));
module.exports = esPalindromo;
