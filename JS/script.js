// Obtener elementos
const boton = document.getElementById('action-btn');
const texto = document.getElementById('status-text');

// Evento on clic
boton.addEventListener('click', () => {
    // Simulamos un cambio de estado
    if (texto.textContent.includes('desactivado')) {
        texto.textContent = 'DRS: ACTIVADO. ¡Aleron abierto!';
        texto.style.color = '#00ff00'; // Verde para activado
        boton.textContent = 'Cerrar DRS';
    } else {
        texto.textContent = 'DRS: DESACTIVADO. ¡Aleron cerrado!';
        texto.style.color = '#e10600'; //Rojo para desactivado
        boton.textContent = 'Revisar DRS';
    }
});