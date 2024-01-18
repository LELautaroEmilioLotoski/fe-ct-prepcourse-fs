function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:
  const cadena1 = str1.toLowerCase().replace(/\s/g, '');
  const cadena2 = str2.toLowerCase().replace(/\s/g, '');

  // Verificar si ambas cadenas tienen la misma longitud
  if (cadena1.length !== cadena2.length) {
    return false;
  }

  // Convertir las cadenas a arreglos, ordenarlos y compararlos
  const arreglo1 = cadena1.split('').sort();
  const arreglo2 = cadena2.split('').sort();

  // Comparar si los arreglos son iguales
  return arreglo1.join('') === arreglo2.join('');
}

// Ejemplo de uso
let palabra1 = "Listen";
let palabra2 = "Silent";
console.log((esAnagrama(palabra1, palabra2)));

module.exports = esAnagrama;
