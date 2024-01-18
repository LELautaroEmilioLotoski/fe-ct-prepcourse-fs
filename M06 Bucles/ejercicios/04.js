function mayoriaDeEdad(edad) {
  // Determinar si la persona puede ingresar al evento según su edad.
  // Si tiene 18 años o más, retorna el string: "Allowed".
  // Caso contrario: "Not allowed".
  // Tu código:
  let date = edad;
  for(i = 0; i < 100; i++){
    date++;
    if(date >= 18){
      return "Allowed";
    }else if (date < 18){
      return "Not allowed";
    }
  }
}
console.log(mayoriaDeEdad(18))
module.exports = mayoriaDeEdad;
