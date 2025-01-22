// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//variables
let listaAmigos = []
let resultado = (0)
let nombreDeAmigo = (0)
let amigoSorteado = (0)
let nombreSeleccionado = (0)

function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHtml = texto;
    return;
}

asignarTextoElemento('h1','Amigo secreto!2');
asignarTextoElemento('h2','Digite el nombre de sus amigos!2');


function agregarAmigo() {
    //agregar nombre de amigo a la lista
    let nombreDeAmigo = document.getElementById('amigo').value;
    listaAmigos.push(nombreDeAmigo);
    console.log(listaAmigos);
    return
}

function sortearAmigo() {
    //Usando la list de amigos, toma uno para mostrar como nombre de amigo sorteado
    let amigoSorteado = Math.floor(Math.random()*listaAmigos.length);
    let nombreSeleccionado = listaAmigos[amigoSorteado];
    console.log(amigoSorteado);
    console.log(nombreSeleccionado);
    return

}




