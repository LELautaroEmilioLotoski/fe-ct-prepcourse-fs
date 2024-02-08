function actualizarPassword(objetoUsuario, nuevaPassword) {
  // Reemplaza la contraseña guardada en la propiedad "password" del "objetoUsuario".
  // La nueva contraseña la recibes por parámetro.
  // Retornar el objeto.
  // Tu código:
  objetoUsuario.password = nuevaPassword;
  return objeto;
}
const objeto = {
  usuario: 'lauty',
  password: 'Me encanta JS'
}
const password = 'Me encanta JS mucho más!';
actualizarPassword(objeto, password)
module.exports = actualizarPassword;
