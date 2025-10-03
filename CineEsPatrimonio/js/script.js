
// Acordeón de contenido Cine más allá de la pantalla
document.addEventListener('DOMContentLoaded', function() {
    const acordeonHeaders = document.querySelectorAll('.acordeon-header');

    acordeonHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const acordeonItem = this.parentElement;
            const contenido = acordeonItem.querySelector('.acordeon-contenido');
            
            // Cierra todos los demás items
            document.querySelectorAll('.acordeon-item').forEach(item => {
                if (item !== acordeonItem) {
                    item.classList.remove('activo');
                    item.querySelector('.acordeon-contenido').style.maxHeight = null;
                }
            });
            
            // Toggle del item actual
            acordeonItem.classList.toggle('activo');
            if (contenido.style.maxHeight){
                contenido.style.maxHeight = null;
            }else{
                contenido.style.maxHeight = contenido.scrollHeight + "px";
            }
        });
    });
});

// Formulario de registro
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var role = document.getElementById('role').value;

    if (name === '' || email === '' || role === '') {
        alert('Por favor, completa todos los campos.');
        event.preventDefault();
    } else {
        alert('Formulario enviado correctamente.');
    }
});

// Formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) { 
    var nombre = document.getElementById('nombreContacto').value; 
    var telefono = document.getElementById('telContacto').value; 
    var email = document.getElementById('emailContacto').value; 
    var mensaje = document.getElementById('mensajeContacto').value; 
    
    if (nombre === '' || telefono === '' || email === '' || mensaje === '') { 
        alert('Por favor, completa todos los campos del formulario de contacto.'); 
        event.preventDefault(); 
    } else { 
        alert('Formulario de contacto enviado correctamente.');
    }
});

// inicializar los carruseles
const carousels = {};
const autoplayIntervals = {};
const AUTOPLAY_DELAY = 3000; // 3 segundos entre cada transición

// Inicializar los carruseles
function initCarousels() {
    ['carousel-left', 'carousel-center', 'carousel-right'].forEach(id => {
        const container = document.getElementById(id);
        carousels[id] = {
            currentSlide: 0,
            totalSlides: container.children.length,
            isPlaying: false
        };
        startAutoplay(id); // Iniciar autoplay automáticamente
    });
}
// Mover las diapositivas con transición circular
function moveSlide(carouselId, direction) {
    const carousel = carousels[carouselId];
    const container = document.getElementById(carouselId);
    
    carousel.currentSlide = (carousel.currentSlide + direction + carousel.totalSlides) % carousel.totalSlides;   
// Aplicar la transición
    container.style.transform = `translateX(-${carousel.currentSlide * 100}%)`;
}
// Iniciar autoplay
function startAutoplay(carouselId) {
    if (!carousels[carouselId].isPlaying) {
        carousels[carouselId].isPlaying = true;
        updateAutoplayButton(carouselId);
        autoplayIntervals[carouselId] = setInterval(() => {
            moveSlide(carouselId, 1);
        }, AUTOPLAY_DELAY);
    }
}
// Detener autoplay
function stopAutoplay(carouselId) {
    if (carousels[carouselId].isPlaying) {
        carousels[carouselId].isPlaying = false;
        updateAutoplayButton(carouselId);
        clearInterval(autoplayIntervals[carouselId]);
    }
}
// Alternar autoplay
function toggleAutoplay(carouselId) {
    if (carousels[carouselId].isPlaying) {
        stopAutoplay(carouselId);
    } else {
        startAutoplay(carouselId);
    }
}
// Actualizar el botón de autoplay
function updateAutoplayButton(carouselId) {
    const carousel = document.getElementById(carouselId).parentElement;
    const playIcon = carousel.querySelector('.play-icon');
    const pauseIcon = carousel.querySelector('.pause-icon');
    
    if (carousels[carouselId].isPlaying) {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline';
    } else {
        playIcon.style.display = 'inline';
        pauseIcon.style.display = 'none';
    }
}
// Pausar autoplay cuando el usuario interactúa con los botones de navegación
document.querySelectorAll('.carousel-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        const carouselId = button.closest('.carousel').querySelector('.carousel-container').id;
        stopAutoplay(carouselId);
    });
});
// Inicializar cuando el documento esté listo
document.addEventListener('DOMContentLoaded', initCarousels); 

// botón para desplazar hacia arriba la página
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
