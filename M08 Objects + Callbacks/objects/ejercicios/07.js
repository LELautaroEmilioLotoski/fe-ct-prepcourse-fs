// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.

const objetoAnidado = {
    propiedad1: 1,
    propiedad2: 2,
    propiedad3 :{ 
        propiedad4: 1,
        propiedad5: 2,
        propiedad6: {
            propiedad9: function(){
                return "valor7";
            }
        },
    },
};

if(
    objetoAnidado.hasOwnProperty(this.propiedad3)&&
    objetoAnidado.propiedad3.hasOwnProperty(this.propiedad3.propiedad6)&&
    objetoAnidado.propiedad3.propiedad6.hasOwnProperty(this.propiedad3.propiedad6.propiedad9)
    ){
    console.log(this.propiedad3.propiedad6.propiedad9);
}



module.exports = objetoAnidado;
