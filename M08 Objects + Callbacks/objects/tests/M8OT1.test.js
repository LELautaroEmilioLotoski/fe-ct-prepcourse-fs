const obtenerValorPropiedad = require("../ejercicios/01.js");

describe("obtenerValorPropiedad", () => {
  const objeto = {
    nombre: "Juan",
    edad: 30
  };

  it("devuelve el valor de una propiedad utilizando dot notation", () => {
    expect(obtenerValorPropiedad(objeto, "nombre")).toBe("Juan");
    expect(obtenerValorPropiedad(objeto, "edad")).toBe(30);
  });


  it("devuelve undefined si la propiedad no existe", () => {
    expect(obtenerValorPropiedad(objeto, "apellido")).toBeUndefined();
    expect(
      obtenerValorPropiedad(objeto, "direccion.codigoPostal")
    ).toBeUndefined();
  });
});
