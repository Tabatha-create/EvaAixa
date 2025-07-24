 // Función para navegación suave
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Animación de entrada para elementos
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Aplicar animación a las secciones
        document.querySelectorAll('.section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });

        // Efecto de flotación para elementos decorativos
        function floatElement(element, duration = 3000) {
            if (element) {
                element.style.animation = `float ${duration}ms ease-in-out infinite`;
            }
        }

        // CSS para animación de flotación
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-20px); }
            }
        `;
        document.head.appendChild(style);

        // Aplicar flotación a elementos decorativos
        document.querySelectorAll('.decorative-element').forEach(element => {
            floatElement(element, 4000);
        });

        // Efecto de pulso para los iconos del footer
        document.querySelectorAll('.footer-symbol').forEach(symbol => {
            symbol.style.animation = 'pulse 2s ease-in-out infinite';
        });

        // Añadir animación de pulso al CSS
        const pulseStyle = document.createElement('style');
        pulseStyle.textContent = `
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.2); }
            }
        `;
        document.head.appendChild(pulseStyle);

// Obtener referencia al botón
const scrollToTopBtn = document.getElementById('scrollToTop');

// Función para mostrar/ocultar el botón
function toggleScrollButton() {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
}

// Función para hacer scroll suave hacia arriba
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Event listeners
window.addEventListener('scroll', toggleScrollButton);
scrollToTopBtn.addEventListener('click', scrollToTop);

// Ejecutar una vez al cargar la página
toggleScrollButton();

// JavaScript para el formulario desplegable de contacto
document.addEventListener('DOMContentLoaded', function() {
    
    // Manejo del envío del formulario
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener los valores del formulario
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Aquí puedes agregar la lógica para enviar el formulario a tu servidor
            // Ejemplo con fetch:
            /*
            fetch('/enviar-contacto', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Éxito:', data);
                alert('¡Gracias ' + name + '! Tu mensaje ha sido enviado. Te responderé pronto ♡');
                contactForm.reset();
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
            });
            */
            
            // Por ahora, solo mostrar mensaje de confirmación
            console.log('Formulario enviado:', { name, email, subject, message });
            alert('¡Gracias ' + name + '! Tu mensaje ha sido enviado. Te responderé pronto ♡');
            
            // Limpiar el formulario
            contactForm.reset();
            
            // Cerrar el dropdown después del envío
            const dropdown = document.querySelector('.contact-dropdown');
            if (dropdown) {
                dropdown.style.pointerEvents = 'none';
                setTimeout(() => {
                    dropdown.style.pointerEvents = 'auto';
                }, 2000);
            }
        });
    }

    // Validación en tiempo real
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value && this.checkValidity()) {
                this.style.borderColor = '#10b981';
            } else if (this.value && !this.checkValidity()) {
                this.style.borderColor = '#ef4444';
            }
        });
        
        // Limpiar colores de validación al empezar a escribir
        input.addEventListener('input', function() {
            if (this.style.borderColor === 'rgb(239, 68, 68)' || this.style.borderColor === 'rgb(16, 185, 129)') {
                this.style.borderColor = '#c084fc';
            }
        });
    });

    // Mantener el formulario abierto mientras se interactúa con él
    const dropdownForm = document.querySelector('.dropdown-form');
    if (dropdownForm) {
        dropdownForm.addEventListener('mouseenter', function() {
            this.style.opacity = '1';
            this.style.visibility = 'visible';
        });
        
        // Mantener abierto mientras se tiene focus en algún input
        formInputs.forEach(input => {
            input.addEventListener('focus', function() {
                dropdownForm.style.opacity = '1';
                dropdownForm.style.visibility = 'visible';
            });
        });
    }

    // Cerrar el formulario al hacer clic fuera de él
    document.addEventListener('click', function(e) {
        const contactDropdown = document.querySelector('.contact-dropdown');
        if (contactDropdown && !contactDropdown.contains(e.target)) {
            const dropdownForm = contactDropdown.querySelector('.dropdown-form');
            if (dropdownForm) {
                dropdownForm.style.opacity = '0';
                dropdownForm.style.visibility = 'hidden';
            }
        }
    });

    // Prevenir que el formulario se cierre al hacer clic dentro de él
    if (dropdownForm) {
        dropdownForm.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
});

// Función para abrir el formulario programáticamente (opcional)
function abrirFormularioContacto() {
    const dropdownForm = document.querySelector('.dropdown-form');
    if (dropdownForm) {
        dropdownForm.style.opacity = '1';
        dropdownForm.style.visibility = 'visible';
        dropdownForm.style.transform = 'translateX(-50%) translateY(0)';
    }
}

// Función para cerrar el formulario programáticamente (opcional)
function cerrarFormularioContacto() {
    const dropdownForm = document.querySelector('.dropdown-form');
    if (dropdownForm) {
        dropdownForm.style.opacity = '0';
        dropdownForm.style.visibility = 'hidden';
        dropdownForm.style.transform = 'translateX(-50%) translateY(-10px)';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Efecto de aparición gradual cuando se carga la página
    const socialSidebar = document.querySelector('.social-sidebar');
    if (socialSidebar) {
        setTimeout(() => {
            socialSidebar.style.opacity = '1';
            socialSidebar.style.transform = 'translateY(-50%) translateX(0)';
        }, 500);
        
        // Inicialmente oculto para el efecto de entrada
        socialSidebar.style.opacity = '0';
        socialSidebar.style.transform = 'translateY(-50%) translateX(-100px)';
        socialSidebar.style.transition = 'all 0.6s ease';
    }

    // Animación de entrada secuencial para cada botón
    const socialButtons = document.querySelectorAll('.social-btn');
    socialButtons.forEach((btn, index) => {
        btn.style.opacity = '0';
        btn.style.transform = 'translateX(-50px)';
        
        setTimeout(() => {
            btn.style.opacity = '1';
            btn.style.transform = 'translateX(0)';
            btn.style.transition = 'all 0.4s ease';
        }, 700 + (index * 100));
    });

    // Efecto de click con ondas
    socialButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Crear efecto de onda
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.marginLeft = '-25px';
            ripple.style.marginTop = '-25px';
            ripple.style.width = '50px';
            ripple.style.height = '50px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Ocultar/mostrar según el scroll (opcional)
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down - opcional: reducir opacidad
            if (socialSidebar) {
                socialSidebar.style.opacity = '0.7';
            }
        } else {
            // Scrolling up - mostrar completamente
            if (socialSidebar) {
                socialSidebar.style.opacity = '1';
            }
        }
        
        lastScrollY = currentScrollY;
    });
});

// CSS para la animación de ondas
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);