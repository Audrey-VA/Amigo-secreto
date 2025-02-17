// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // Array que almacenará los amigos

function asignarTextoElemento(elemento, texto){    //aca se aplica un parametro que es la forma en que el comportamiento de la funcion se va a modificar de 
    let elementoHTML = document.querySelector(elemento); // de acuerdo a lo que reciba 
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    let nombreAmigos = document.getElementById('amigo').value.trim(); // Capturar el valor del campo de entrada y quitar espacios en blanco

    if (nombreAmigos === "") { // Revisa si esta vacio
        alert("Por favor, inserte un nombre."); 
        return;
    }

    amigos.push(nombreAmigos); // Agregar el nombre al array
    actualizarLista();
    document.getElementById('amigo').value = "";
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) { //"length " es el tamaño de la lista
        let nuevoElemento = document.createElement('li'); 
        nuevoElemento.textContent = amigos[i]; 
        lista.appendChild(nuevoElemento); 
    }
}

function sortearAmigo() { 
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear."); //aqui se valida si hay amigos para sortear 
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length); 
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `<li> ${amigoSorteado} es el amigo secreto!!</li>`;
}
