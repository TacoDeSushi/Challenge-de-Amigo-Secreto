let listaAmigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre');
        return;
    }
    
    if (listaAmigos.includes(nombreAmigo)) {
        alert('Este nombre ya está en la lista');
        limpiarInput();
        return;
    }
    
    listaAmigos.push(nombreAmigo);
    
    actualizarListaAmigos();
    
    limpiarInput();
}

function actualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = '';
    
    listaAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigosElement.appendChild(li);
    });
}

function limpiarInput() {
    document.getElementById('amigo').value = '';
    document.getElementById('amigo').focus();
}

function limpiarResultados() {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('Debes agregar al menos un nombre para realizar el sorteo');
        return;
    }
    
    limpiarResultados();
    
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];
    
    mostrarResultado(amigoSorteado);
}

function mostrarResultado(amigoSorteado) {
    const resultadoElement = document.getElementById('resultado');
    
    const mensaje = document.createElement('li');
    mensaje.textContent = `El Amigo Secreto Sorteado es: ${amigoSorteado}`;
    resultadoElement.appendChild(mensaje);
}

document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});