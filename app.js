let numeroSecreto = 0;
let intentos = 0;

let listaNumerosSorteados = []; //Añadiendo array
/*let titulo = document.querySelector('h1'); //querySelector se utiliza para elegir un elemento HTML 
titulo.innerHTML = 'Juego del número secreto'; //El h1 mostrara el titulo asignado aquí.

let parrafo = document.querySelector('p'); //Aqui llamamos a p, para modificar su contenido.
parrafo.innerHTML = 'Indica un número del 1 al 10';
*/

/*Para reducir el codigo podemos utilizar una funcion la cual podemos utilizar en cualquier elemento HTML */
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() { //Onclick en html- cambiando texto de un elemento html con JavaScript
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento ('p', ` Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento ('p', 'El número es menor');
        } else {
            asignarTextoElemento ('p', 'El numero es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
} 

function limpiarCaja () {
    document.querySelector('#valorUsuario').value = ' ';
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', 'Indica el numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto ();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar número aleatorio
    //Deshabilitar el boton de nuevo juego 
    condicionesIniciales();
    //Inicializar el número de intentos
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();


