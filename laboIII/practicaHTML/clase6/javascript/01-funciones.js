//Funciones

function sumar(numeroUno, numeroDos){
    return numeroUno + numeroDos;
}

const valorA = 10;
const valorB = 20;
const resultado = sumar(valorA, valorB);
console.log(resultado);

function restar(numeroUno = 100, numeroDos = 50){
    return numeroUno - numeroDos;
}

const resultado2 = restar();
console.log(resultado2);


//Template string

function saludar(nombre, edad){
    console.log('Hola soy ' + nombre + ' y tengo ' + edad + ' años');

    //'', "",`` las comillas invertidas concatenan strings

    console.log(`Hola soy ${nombre} y tengo ${edad} años`);

}

saludar('Leandro', 33);

// Funciones declaradas, pueden llamarse desde cualquier parte del codigo

funcionDeclarada();



function funcionDeclarada(){

    console.log("Esta es una funcion declarada, se puede invocar en cualq parte de nuestro codigo");

}

funcionDeclarada();

//Funciones expresadas, no se puede llamar desde cualquier parte del codigo. deben llamarse en instancias posteriores.

const funcionExpresada = function(){

    console.log("Esto es una funcion expresada, asignada como valor a una variable");
}

funcionExpresada();

//Ordenamiento del codigo

/**
 * modulos
 * declaracion de variables
 * declaraciones de las funciones
 * todo el codigo ejecutable
 */

// Funciones autoejecutables

(
    function(){
        console.log("Me autoejecuto");
    }

)();