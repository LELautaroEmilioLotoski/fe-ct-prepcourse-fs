function actualizarValorPropiedad(objeto, propiedad, valor) {
  // Actualiza el valor de la propiedad del objeto recibidos en la función.
  // Retorna el objeto actualizado.
  // Tu código:
  for(let prop in objeto){
    prop = propiedad;
    if(objeto.hasOwnProperty(prop)){
      let nuevoObjeto = {...objeto};
      nuevoObjeto[prop] = valor;
      return nuevoObjeto;
    }else if(!objeto.hasOwnProperty(prop)){
      let newObjeto = {...objeto};
      newObjeto[prop] = valor;
      return newObjeto;
    }
    return objeto;
  }
}
let casa = {
  calle: 'falsa',
  direccion: 123
}
actualizarValorPropiedad(casa, 'casa.calle', 'verdadera');
console.log(casa);
module.exports = actualizarValorPropiedad;
