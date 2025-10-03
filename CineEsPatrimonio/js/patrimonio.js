document.addEventListener('DOMContentLoaded', function() {
    const titulo = document.querySelector('.titulo-patrimonio');
    const colors = ['#f4f1ea', '#cd853f', '#d2b48c', '#8b4513'];

    setInterval(() => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        titulo.style.color = randomColor;
    }, 1000);
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    
    // Mostrar/ocultar el botón según la posición del scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    // Función para volver arriba al hacer clic
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});