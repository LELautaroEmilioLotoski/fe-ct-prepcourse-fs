function agregarAmigo(objetoUsuario, nuevoAmigo) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
  // Debes agregar el "nuevoAmigo" al final de este arreglo.
  // Retornar el objeto.
  // Tu código:
  const nuevoObjetoUsuario = { ...objetoUsuario };
  
  if (!nuevoObjetoUsuario.hasOwnProperty('amigos')) {
    nuevoObjetoUsuario.amigos = [];
  }

  nuevoObjetoUsuario.amigos.push(nuevoAmigo);

  return nuevoObjetoUsuario;
}

module.exports = agregarAmigo;
