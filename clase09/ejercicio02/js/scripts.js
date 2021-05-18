import {marcas} from "../marcas.js";
import Persona from "../personas.js";

// console.log(marcas);

// CONVIERTO DE OBJETO A STRING - ENVIO DATOS 

// const texto = JSON.stringify(marcas);

// console.log(texto);

// CONVIERTO DE OBJETO A STRING - RECIBO DATOS Y LOS TENGO QUE CONVERTIR

// const obj = JSON.parse(texto);

// console.log(obj);

/*--------------------------------------------------------------------------------------------*/
let boton = null;
let personas = [];

window.addEventListener("DOMContentLoaded", ()=>{

    document.forms[0].addEventListener("submit", handlerSubmit);

    boton = document.getElementById("btnLista");

    document.addEventListener("click", handlerClick);

    boton.addEventListener("click", handlerLoadList);

});

function handlerSubmit(e){
    e.preventDefault();
    console.log("Se envio formulario");
    let form = e.target;

    const p1 = new Persona(Date.now(), form.nombre.value, form.mail.value, form.sexo.value);

    altaPersona(p1);
}

function altaPersona(p1){
    personas.push(p1);

    //handlerLoadList();
}

function handlerLoadList(e){
    renderizarLista(crearTabla(personas), document.getElementById("divLista"));
    e.target.textContent = "Eliminar Tabla";
    e.target.removeEventListener("click", handlerLoadList);
    e.target.addEventListener("click", handlerDeleteList);
}

function handlerDeleteList(e){
    renderizarLista(null, document.getElementById("divLista"));
    e.target.textContent = "Crear Tabla";
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

    //tabla.setAttribute("style", "border: 1px solid black");

    return tabla;
}

function crearThead(item){

    const thead = document.createElement("thead");
    const tr = document.createElement("tr");

    for (const key in item) {

        if(key !== "id"){
            const th = document.createElement("th");
            th.textContent = key;
            tr.appendChild(th);
        }

    }

    thead.appendChild(tr);
    thead.setAttribute("style", "background-color: blue");
    return thead;

}

function crearTbody(items){

    const tbody = document.createElement("tbody");

    items.forEach(item => {

        const tr = document.createElement("tr");
        // tr.addEventListener("click", handlerClickTr);

        for (const key in item) {

            if(key === "id"){
                tr.setAttribute("data-id", item[key]);

            } else {

                const td = document.createElement("td");
                td.textContent = item[key];
                tr.appendChild(td);    
            }
    

        }
    
        tbody.appendChild(tr);

    });

    return tbody;
}

// function handlerClickTr(e){
//     console.log(e.target.parentNode.firstElementChild.textContent);
// }

function handlerClick(e){

    // if(e.target.matches("#btnLista")){
    //     console.log("Hiciste click en el boton");
    // }

    if(!e.target.matches("td")) return;

    //let id = e.target.parentNode.firstElementChild.textContent;

    let id = e.target.parentNode.dataset.id;

    console.log(id);
}
