// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//variables
let listaAmigos = []
let resultado = (0)
let nombreDeAmigo = (0)
let amigoSorteado = (0)
let nombreSeleccionado = (0)


function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
}

asignarTextoElemento('h1','Amigo secreto!2');
asignarTextoElemento('h2','Digite el nombre de sus amigos!2');



function agregarAmigo() {
    //Verifica si es valido con if y lo agrega a la lista
    let nombreDeAmigo = document.getElementById('amigo').value;
    if (nombreDeAmigo == '') {
        alert('Por favor ingrese un nombre de amigo valido.')
    } else {
        listaAmigos.push(nombreDeAmigo);
    }
    asignarTextoElemento("listaAmigos",`${listaAmigos}`);
    console.log(listaAmigos);
    return
}


function sortearAmigo() {
    //Usando la list de amigos, toma uno para mostrar como nombre de amigo sorteado
    let amigoSorteado = Math.floor(Math.random()*listaAmigos.length);
    let nombreSeleccionado = listaAmigos[amigoSorteado];
    //Muestra amigo sorteado en pantalla y consoleLog
    asignarTextoElemento("resultado",`${amigoSorteado}`);
    console.log(amigoSorteado);
    console.log(nombreSeleccionado);
    return

}
/*
Falta hacer que lista de amigos desaparezca cuando seleccione el boton sortear
Falta que lista de amigos se muestre en vertical
Falta que formato de lista de amigos muestre en rojo
*/

