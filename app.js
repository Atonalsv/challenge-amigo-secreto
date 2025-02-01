// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//variables
let listaAmigos = []
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
    return;
}

function sortearAmigo() {
    //Usando la list de amigos, genera un nombre aleatorio para mostrar.
    if (listaAmigos.length === 0) {
        asignarTextoElemento('resultado','Ya se han sorteado todos los nombres.');
    } else if (listaAmigos.length == listaAmigos.length) {
        let amigoSorteado = Math.floor(Math.random()*listaAmigos.length);
        let nombreSeleccionado = listaAmigos[amigoSorteado];
        //Muestra amigo sorteado en pantalla
        asignarTextoElemento("resultado",`${nombreSeleccionado}`);
        //Remueve el nombre del amigo sorteado y actualiza array para seguir jugando
        listaAmigos.splice(amigoSorteado,1);
        asignarTextoElemento('listaAmigos',`${listaAmigos}`);
        console.log(amigoSorteado);
        console.log(nombreSeleccionado); 
        return;
    }
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

