function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:
  let mesValido;
  do{
    for(i = mes; i <= 12; i++){
      if(mes === 1 || mes === "1"){
        return 31;
      }else if(mes === 2|| mes === "2"){
        return 28;
      }else if(mes === 4 || mes === "3"){
        return 30;
      }else{
        return 0;
      }
    }
  }while(mesValido >= 0 && mesValido <= 12);
  return 0;
}
console.log(diasEnMes(3));
module.exports = diasEnMes;
