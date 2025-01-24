let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    // Acertó
    if (numeroDeUsuario === numeroSecreto) {
      asignarTextoElemento('p', `Felicidades! Acertaste el Número en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}.`);
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // No acertó.
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento ('p', 'Casi! El número secreto es Menor. Vuelve a Intentarlo!');
        } else {
        asignarTextoElemento ('p', 'Casi! El número secreto es Mayor. Vuelve a Intentarlo!');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(numerosSorteados);

    // Si ya sorteamos todos.
    if (numerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', "Ya se sortearon todos los números posibles.");
    } else {
        // Si el numero generado está en el array se hace una cosa, sino otra.
        if (numerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();

        } else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    return;
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Inserta un número del 1 al ${numeroMaximo}:`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    return;

}



function reiniciarJuego() {
    // Limpiar caja
    limpiarCaja();
    // Indicar mensaje de Inicio & generar numero aleatorio
    condicionesIniciales();
    // Inicializar intentos
    // Deshabilitar botón de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', true);

}

condicionesIniciales();