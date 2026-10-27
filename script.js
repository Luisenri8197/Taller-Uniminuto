document.addEventListener('DOMContentLoaded', () => {
    const imagen = document.getElementById('imagen-hero');
    const tooltip = document.getElementById('mensaje-tooltip');

    if (imagen && tooltip) {
        // Evento cuando el usuario pasa el mouse sobre la imagen
        imagen.addEventListener('mouseenter', () => {
            tooltip.classList.add('visible');
            imagen.classList.add('hover-activo');
        });

        // Evento cuando el usuario quita el mouse de la imagen
        imagen.addEventListener('mouseleave', () => {
            tooltip.classList.remove('visible');
            imagen.classList.remove('hover-activo');
        });
    }
});