// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//variables
let listaAmigos = []
let nombresSorteados = []
let resultado = (0)
let nombreDeAmigo = (0)
let amigoSorteado = (0)
let nombreSeleccionado = (0)

//Agrega nombre de amigo a la lista verificando si el imput es valido
function agregarAmigo() {
    let nombreDeAmigo = document.getElementById('amigo').value;
    if (nombreDeAmigo == '') {
        alert('Por favor ingrese un nombre de amigo valido.')
    } else {
        listaAmigos.push(nombreDeAmigo);
    }
    asignarTextoElemento('listaAmigos',`${listaAmigos}`);
    vaciarContenido('amigo');
    console.log(listaAmigos);
    return
}


function sortearAmigo() {
    //Usando la list de amigos, toma uno para mostrar como nombre de amigo sorteado
    let amigoSorteado = Math.floor(Math.random()*listaAmigos.length);
    let nombreSeleccionado = listaAmigos[amigoSorteado];
    //Muestra amigo sorteado en pantalla y consoleLog
    asignarTextoElemento("resultado",`${nombreSeleccionado}`);
    console.log(amigoSorteado);
    console.log(nombreSeleccionado);
}


function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
}

function vaciarContenido(elemento) {
    document.getElementById(elemento).value = '';
}


/*
Falta hacer que lista de amigos desaparezca cuando seleccione el boton sortear
Falta que lista de amigos se muestre en vertical
Falta que formato de lista de amigos muestre en rojo
*/

