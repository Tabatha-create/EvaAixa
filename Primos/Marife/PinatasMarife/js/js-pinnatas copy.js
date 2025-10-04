document.addEventListener('DOMContentLoaded', function() {
            const modal = document.getElementById('imageModal');
            const modalImg = document.querySelector('.modal-image');
            const closeBtn = document.querySelector('.close');
            const thumbnails = document.querySelectorAll('.thumbnail');
            const procedimientoBtn = document.getElementById('pinnataCar');
            const procedimiento = document.getElementById('procedimiento');

            // Funcionalidad del modal
            thumbnails.forEach(thumbnail => {
                thumbnail.addEventListener('click', function() {
                    const fullImageSrc = this.getAttribute('data-full');
                    modalImg.src = fullImageSrc;
                    modal.style.display = 'block';
                });
            });

            // Cerrar modal
            closeBtn.addEventListener('click', function() {
                modal.style.display = 'none';
            });

            // Cerrar modal al hacer clic fuera de la imagen
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });

            // Mostrar/ocultar procedimiento
            procedimientoBtn.addEventListener('click', function() {
                if (procedimiento.style.display === 'none' || procedimiento.style.display === '') {
                    procedimiento.style.display = 'block';
                } else {
                    procedimiento.style.display = 'none';
                }
            });

            // Cerrar modal con tecla Escape
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && modal.style.display === 'block') {
                    modal.style.display = 'none';
                }
            });
        });