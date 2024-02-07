const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let a = 0;
  for(let prop in objeto){
      if(objeto.hasOwnProperty(prop)){
        a++;
      }
  }return a;
};
let auto = {
  marca: 'Ferrari',
  kilometraje: 50500,
}
let verAuto = contarPropiedades(auto);
console.log(verAuto);
module.exports = contarPropiedades;
