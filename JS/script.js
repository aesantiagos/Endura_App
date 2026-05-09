// Obtener elementos
const boton = document.getElementById('action-btn');
const texto = document.getElementById('status-text');

// Evento on clic
boton.addEventListener('click', () => {
    // Simulamos un cambio de estado
    if (texto.textContent.includes('desactivado')) {
        texto.textContent = 'DRS: ACTIVADO. ¡El aleron esta abierto!';
        texto.style.color = '#00ff00'; // Verde para activado
        boton.textContent = 'Cerrar DRS';
    } else {
        texto.textContent = 'DRS: actualmente desactivado.';
        texto.style.color = '#ffffff';
        boton.textContent = 'Revisar DRS';
    }
});