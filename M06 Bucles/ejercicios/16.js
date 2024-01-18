function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:
  let idioma1 = "aleman";
  let idioma2 = "mandarin";
  let idioma3 = "ingles";
  if(idioma === idioma1){
    return "Guten Tag!";
  }else if(idioma === idioma2){
    return "Ni Hao!";
  }else if(idioma === idioma3){
    return "Hello!";
  }else if(idioma !== idioma1 || idioma !== idioma2 || idioma !== idioma3 || idioma === undefined){
    return "Hola!";
  }
}
console.log(saludo("ingles"));
module.exports = saludo;
