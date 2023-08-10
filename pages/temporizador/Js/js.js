
let tiempo = 0;
let intervalo;

function actualizarContador() {
    const contadorElemento = document.getElementById('contador');
    contadorElemento.innerText = tiempo + ' segundos';
}

function iniciarTemporizador() {
    if (!intervalo) {
        intervalo = setInterval(() => {
            tiempo++;
            actualizarContador();
        }, 1000); // Actualiza cada segundo (1000 ms)
    }
}

function pausarTemporizador() {
    clearInterval(intervalo);
    intervalo = null;
}