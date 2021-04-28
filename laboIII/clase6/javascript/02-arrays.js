const arrayRaro = new Array();

const arrayStandard = [10, false, 'Leandro', [1,2,3]];

// objetos

//console.log(arrayStandard[3]);

const arrayObjetos = [
    {nombre: "Leandro", edad: 33},
    {nombre: "Leandro", edad: 33},
    {nombre: "Leandro", edad: 33},
];

console.log(arrayObjetos[0].nombre);


const colores = ["rojo","verde","azul"];

console.log(colores.length);

colores.push("celeste");

console.log(colores);

colores.pop(); // elimina el ultimo

const incluyeVerde = colores.includes("verde");

console.log(incluyeVerde);

const arrayRelleno = Array(5).fill([1,2,3]);
console.log(arrayRelleno);

// MDN mozilla development network - documentacion de JS
// https://developer.mozilla.org/es/

const navegacion = ['home', 'about', 'contact', 'login'];

// navegacion.forEach(
    
//     function(elemento, index, arrayOriginal){

//         console.log(`<li id=${index}>${elemento}</li>`);
//     }
    
//     )


// Spread operator (operador de propagacion) ES6

const superiores = ['hombros', 'brazos', 'torso'];

const inferiores = ['cadera', 'piernas', 'rodilla'];

const cuerpo = ['cabeza', ...superiores, ...inferiores, 'pies'];

// unifica todo en un solo array

console.log(cuerpo);

console.log(
    [...arrayObjetos, {nombre:"Perlita", edad: 18}]
)

// combino con el array de objetos


