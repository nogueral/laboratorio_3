export function Animal(tipo, edad){
    let _tipo = tipo;
    this.edad = edad;
    this.setTipo = function(value){
        _tipo = value;
    };

    this.getTipo = function(){
        return _tipo;
    };

}

Animal.prototype.presentarse = function(){
        return "Soy un animal de tipo " + this.getTipo();
    };


    //otra manera de exportar es:

    //export{Animal};
