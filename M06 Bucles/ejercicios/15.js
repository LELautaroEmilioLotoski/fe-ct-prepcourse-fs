function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:
  let dia = numero;
  for(i = 0; i < 7; i++){
    if(dia === 1){
      return "Lunes";
    }else if(dia === 2){
      return "Martes";
    }else if(dia === 3){
      return "Miercoles";
    }else if(dia === 4){
      return "Jueves";
    }else if(dia === 5){
      return "Viernes";
    }else if(dia === 6){
      return "Sabado";
    }else if(dia === 7){
      return "Domingo";
    }else{
      return "No es un dia de la semana";
    }
  }
}
console.log(obtenerDiaSemana(5));
module.exports = obtenerDiaSemana;