const botones = document.querySelectorAll('.boton');
const contenidos = document.querySelectorAll('.contenido');

botones.forEach((boton, index) => {
    boton.addEventListener('click', () => {
        contenidos.forEach((contenido, i) => {
            if (i === index) {
                contenido.style.maxHeight = contenido.style.maxHeight === '0px' ? `${contenido.scrollHeight}px` : '0px';
            } else {
                contenido.style.maxHeight = '0px';
            }
        });
    });
});
