// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// reglas del programa
/*
crear un array para almacenar los nombres
Implementar una funcion para agregar amigos
Implementar una funcion para actualizar lista de amigos
Implementar una funcion para sortear los amigos
*/

let arregloAmigos = []

function agregarAmigo(){
    let nuevoAmigo = document.getElementById('amigo');

    let nombreAmigo = nuevoAmigo.value;
    if(nombreAmigo === ''){
        alert("Por favor, inserte un nombre");
    }else{
        arregloAmigos.push(nombreAmigo);
        console.log(arregloAmigos);
        

        
        actualizarListaAmigos(nombreAmigo);
        limpiarEntrada();

    }

    

}

function limpiarEntrada(){
    document.getElementById('amigo').value= '';

}

function sortearAmigo(){

    if(arregloAmigos.length == 0){
        alert('Primero agrega tus amigos');

    }else{
        let numeroRandom = Math.floor((Math.random()*arregloAmigos.length));
        asignarTextoElemento('resultado', `Tu amigo secreto es ${arregloAmigos[numeroRandom]}`);
    }
    
    
    
    
}

function actualizarListaAmigos(amigo){
    let listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = '';

    for(let i = 0 ; i < arregloAmigos.length ; i++){
        let li = document.createElement('li');
        li.textContent= arregloAmigos[i];
        listaAmigos.appendChild(li);
    }
    

}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function reiniciar(){
    listaAmigos.innerHTML = '';
    arregloAmigos = []
    actualizarListaAmigos();
    asignarTextoElemento('resultado', '');

}