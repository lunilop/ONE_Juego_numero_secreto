let numeroSecreto = 0;                         
let intentos = 0;
let listaNroSorteados = [];                 
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);            
    elementoHTML.innerHTML = texto;                                      
    return;                                                                          
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);   

    if (numeroUsuario === numeroSecreto) {      
        asignarTextoElemento('p', `Acertaste el número! en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');              
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', `El número secreto es menor`);
        } else {
            asignarTextoElemento('p', `El número secreto es mayor`);
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';         
}

function generarNroSecreto() {                                                
    let nroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(nroSecreto);
    console.log(listaNroSorteados);

    if (listaNroSorteados.length == numeroMaximo) {                                  
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {                                                                     
        if (listaNroSorteados.includes(numeroSecreto)) {   
            return generarNroSecreto();                         
        } else {
            listaNroSorteados.push(numeroSecreto);                  
            return nroSecreto;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);          
    numeroSecreto = generarNroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    limpiarCaja();                           
    condicionesIniciales();                      
    document.querySelector('#reiniciar').setAttribute('disable', 'true');          
}

condicionesIniciales();