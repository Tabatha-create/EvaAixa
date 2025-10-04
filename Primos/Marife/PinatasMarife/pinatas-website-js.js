// Funcionalidad del modal para la galería
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.querySelector('.modal-image');
    const closeBtn = document.querySelector('.close');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    // Función para abrir el modal
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            modal.style.display = "block";
            // Usar data-full si existe, si no usar src
            const fullImage = thumbnail.getAttribute('data-full') || thumbnail.src;
            modalImg.src = fullImage;
            modalImg.alt = thumbnail.alt;
            document.body.style.overflow = 'hidden'; // Previene el scroll
        });
    });

    // Función para cerrar el modal
    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = 'auto'; // Restaura el scroll
    }

    closeBtn.addEventListener('click', closeModal);
    
    // Cerrar al hacer click fuera de la imagen
    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.classList.contains('modal-content')) {
            closeModal();
        }
    });

    // Cerrar con la tecla ESC
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});

// Funcionalidad para mostrar/ocultar el procedimiento
document.addEventListener('DOMContentLoaded', function() {
    const pinnataCar = document.getElementById('pinnataCar');
    const procedimiento = document.getElementById('procedimiento');
    
    if (pinnataCar && procedimiento) {
        pinnataCar.addEventListener('click', function() {
            // Añadir una transición suave
            if (procedimiento.style.display === 'none' || !procedimiento.style.display) {
                procedimiento.style.display = 'block';
                // Scroll suave hasta el procedimiento
                procedimiento.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                procedimiento.style.display = 'none';
            }
        });
    }
});

// Funcionalidad para cargar más piñatas
document.addEventListener('DOMContentLoaded', function() {
    const btnMasPignatas = document.getElementById('masPignatas');
    const contenedorPignatas = document.getElementById('contenedorPignatas');
    
    if (btnMasPignatas && contenedorPignatas) {
        // Array con las rutas de las imágenes adicionales
        const pignatas = [
            { src: 'img/polar.jpg', alt: 'Piñata Polar' },
            // Agregar más piñatas aquí
        ];
        
        let pignatasAgregadas = false;
        
        btnMasPignatas.addEventListener('click', function() {
            if (!pignatasAgregadas) {
                pignatas.forEach(function(pignata) {
                    const card = document.createElement('div');
                    card.className = 'card';
                    
                    const img = document.createElement('img');
                    img.src = pignata.src;
                    img.alt = pignata.alt;
                    img.className = 'thumbnail';
                    img.setAttribute('data-full', pignata.src);
                    
                    // Agregar la misma funcionalidad del modal a las nuevas imágenes
                    img.addEventListener('click', () => {
                        const modal = document.getElementById('imageModal');
                        const modalImg = document.querySelector('.modal-image');
                        modal.style.display = "block";
                        modalImg.src = img.getAttribute('data-full') || img.src;
                        modalImg.alt = img.alt;
                        document.body.style.overflow = 'hidden';
                    });
                    
                    card.appendChild(img);
                    contenedorPignatas.appendChild(card);
                });
                
                pignatasAgregadas = true;
                btnMasPignatas.style.display = 'none'; // Ocultar el botón después de agregar las piñatas
            }
        });
    }
});
