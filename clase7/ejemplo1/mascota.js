 import {Animal} from "./animal.js"
 
 // Herencia en JS

export function Mascota(nombre, tipo, edad, vacunada = false){
    Animal.call(this, tipo, edad);
    let _nombre = nombre;
    this.vacunada = vacunada;
    this.setNombre = function(value){
        _nombre = value;
    };

    this.getNombre = function(){
        return _nombre;
    };


}

Mascota.prototype.informarHambre = function(){
    console.log(this.getNombre() + "tiene hambre");
};

// override de metodos de la clase padre 

Mascota.prototype.presentarse = function(){

    let mensaje = Animal.prototype.presentarse.call(this);
    return mensaje + " y me llamo " + this.getNombre();

};

// el object cuelga a la mascota de animal, hace un extend
Object.setPrototypeOf(Mascota.prototype, Animal.prototype);
