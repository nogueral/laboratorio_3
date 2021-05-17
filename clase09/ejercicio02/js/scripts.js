import {marcas} from "../marcas.js";
import {personas} from "../personas.js";

// console.log(marcas);

// CONVIERTO DE OBJETO A STRING - ENVIO DATOS 

// const texto = JSON.stringify(marcas);

// console.log(texto);

// CONVIERTO DE OBJETO A STRING - RECIBO DATOS Y LOS TENGO QUE CONVERTIR

// const obj = JSON.parse(texto);

// console.log(obj);

/*--------------------------------------------------------------------------------------------*/
let boton = null;

window.addEventListener("DOMContentLoaded", ()=>{

    boton = document.getElementById("btnLista");

    boton.addEventListener("click", handlerLoadList);

});

function handlerLoadList(e){
    renderizarLista(crearLista(marcas), document.getElementById("divLista"));
    e.target.textContent = "Eliminar Lista";
    e.target.removeEventListener("click", handlerLoadList);
    e.target.addEventListener("click", handlerDeleteList);
}

function handlerDeleteList(e){
    renderizarLista(null, document.getElementById("divLista"));
    e.target.textContent = "Crear Lista";
    e.target.removeEventListener("click", handlerDeleteList);
    e.target.addEventListener("click", handlerLoadList);

}

function renderizarLista(lista, contenedor){
    
    while(contenedor.hasChildNodes()){
        contenedor.removeChild(contenedor.firstChild);
    }

    if(lista){
       contenedor.appendChild(lista); 
    }
    
}


function crearLista(items){

    const lista = document.createElement("ul");

    items.forEach((element) => {
        const li = document.createElement("li");
        const contenido = document.createTextNode(element.marca);
        li.appendChild(contenido);
        lista.appendChild(li);
    });

    return lista;
}

function crearTabla(items){

    const tabla = document.createElement("table");

    tabla.appendChild(crearThead(items[0]));

    tabla.appendChild(crearTbody(items));

    return tabla;
}

function crearThead(item){

    const head = document.createElement("thead");

    items.forEach((element) => {

        const tr = document.createElement("tr");
        const contenido = document.createTextNode(Object.keys(element));
        
    });
}

function crearTbody(items){

}
