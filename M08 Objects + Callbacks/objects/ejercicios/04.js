function verificarPropiedad(objeto, propiedad) {
  // Verifica si el objeto posee la propiedad recibida.
  // Retorna true si la tiene, sino retorna false.
  // PISTA: Puedes usar el método hasOwnProperty().
  // Tu código:
  if(objeto.hasOwnProperty(propiedad)){
    return true;
  }else{
    return false;
  }
}
let persona = {
  Nombre: 'Emiliano',
  Edad: 34,
  Estatura: 1.83,
  Profesion: 'Full-stack Developer'
};
let verPropiedad = verificarPropiedad(persona, 'persona[Profesion]');
console.log(verPropiedad);
module.exports = verificarPropiedad;
