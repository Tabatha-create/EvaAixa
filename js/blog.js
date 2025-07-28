// blog.js - Archivo reorganizado y corregido

document.addEventListener('DOMContentLoaded', function() {
    
    // ========== NAVEGACIÓN SUAVE ==========
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

    // ========== ANIMACIONES DE ENTRADA PARA SECCIONES ==========
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

    // ========== BOTÓN SCROLL TO TOP ==========
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    if (scrollToTopBtn) {
        console.log('Botón scroll encontrado correctamente'); // Debug
        
        // Función para mostrar/ocultar el botón
        function toggleScrollButton() {
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollPosition > 300) {
                scrollToTopBtn.classList.add('show');
                console.log('Mostrando botón scroll'); // Debug
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        }

        // Función para hacer scroll suave hacia arriba
        function scrollToTop() {
            console.log('Click en scroll to top'); // Debug
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Event listeners para scroll button
        window.addEventListener('scroll', toggleScrollButton);
        scrollToTopBtn.addEventListener('click', scrollToTop);

        // Ejecutar una vez al cargar la página
        toggleScrollButton();
    } else {
        console.error('¡Botón scroll-to-top no encontrado!');
    }

    // ========== FORMULARIO DE CONTACTO DESPLEGABLE ==========
    const contactDropdown = document.querySelector('.contact-dropdown');
    const dropdownForm = document.querySelector('.dropdown-form');
    const contactForm = document.getElementById('contactForm');
    
    // Variables para controlar el estado del formulario
    let formIsOpen = false;
    let interactingWithForm = false;

    // Función para abrir el formulario
    function openForm() {
        if (dropdownForm) {
            dropdownForm.style.opacity = '1';
            dropdownForm.style.visibility = 'visible';
            dropdownForm.style.transform = 'translateX(-50%) translateY(0)';
            formIsOpen = true;
        }
    }

    // Función para cerrar el formulario
    function closeForm() {
        if (dropdownForm) {
            dropdownForm.style.opacity = '0';
            dropdownForm.style.visibility = 'hidden';
            dropdownForm.style.transform = 'translateX(-50%) translateY(-10px)';
            formIsOpen = false;
        }
    }

    // Evento hover en el botón de contacto
    if (contactDropdown) {
        contactDropdown.addEventListener('mouseenter', function() {
            openForm();
        });

        contactDropdown.addEventListener('mouseleave', function() {
            // Solo cerrar si no estamos interactuando con el formulario
            setTimeout(() => {
                if (!interactingWithForm) {
                    closeForm();
                }
            }, 100);
        });
    }

    // Eventos para mantener el formulario abierto durante la interacción
    if (dropdownForm) {
        dropdownForm.addEventListener('mouseenter', function() {
            interactingWithForm = true;
            openForm();
        });

        dropdownForm.addEventListener('mouseleave', function() {
            interactingWithForm = false;
            setTimeout(() => {
                if (!interactingWithForm) {
                    closeForm();
                }
            }, 300);
        });

        // Prevenir que el formulario se cierre al hacer clic dentro
        dropdownForm.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // Eventos para los inputs del formulario
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            interactingWithForm = true;
            openForm();
        });

        input.addEventListener('blur', function() {
            // Validación visual
            if (this.value && this.checkValidity()) {
                this.style.borderColor = '#10b981';
            } else if (this.value && !this.checkValidity()) {
                this.style.borderColor = '#ef4444';
            }
            
            // Pequeño delay para permitir cambio entre inputs
            setTimeout(() => {
                if (!document.activeElement || !dropdownForm.contains(document.activeElement)) {
                    interactingWithForm = false;
                    setTimeout(() => {
                        if (!interactingWithForm) {
                            closeForm();
                        }
                    }, 200);
                }
            }, 100);
        });
        
        input.addEventListener('input', function() {
            if (this.style.borderColor === 'rgb(239, 68, 68)' || this.style.borderColor === 'rgb(16, 185, 129)') {
                this.style.borderColor = '#c084fc';
            }
        });
    });

    // Envío del formulario
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener los valores del formulario
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            console.log('Formulario enviado:', { name, email, subject, message });
            alert('¡Gracias ' + name + '! Tu mensaje ha sido enviado. Te responderé pronto ♡');
            
            // Limpiar el formulario
            contactForm.reset();
            
            // Cerrar el formulario después del envío
            interactingWithForm = false;
            setTimeout(() => {
                closeForm();
            }, 1000);
        });
    }

    // Cerrar formulario al hacer clic fuera (mejorado)
    document.addEventListener('click', function(e) {
        if (contactDropdown && !contactDropdown.contains(e.target) && formIsOpen) {
            interactingWithForm = false;
            closeForm();
        }
    });

    // Cerrar formulario con la tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && formIsOpen) {
            interactingWithForm = false;
            closeForm();
        }
    });

    // ========== BOTONES DE REDES SOCIALES ==========
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

    // Animación de entrada secuencial para cada botón social
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

    // Efecto de click con ondas en botones sociales
    socialButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
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

    // Control de opacidad de botones sociales según scroll
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            if (socialSidebar) {
                socialSidebar.style.opacity = '0.7';
            }
        } else {
            if (socialSidebar) {
                socialSidebar.style.opacity = '1';
            }
        }
        
        lastScrollY = currentScrollY;
    });

    // ========== ELEMENTOS DECORATIVOS ==========
    // Efecto de flotación para elementos decorativos
    function floatElement(element, duration = 3000) {
        if (element) {
            element.style.animation = `float ${duration}ms ease-in-out infinite`;
        }
    }

    // Aplicar flotación a elementos decorativos
    document.querySelectorAll('.decorative-element').forEach(element => {
        floatElement(element, 4000);
    });

    // Efecto de pulso para los iconos del footer
    document.querySelectorAll('.footer-symbol').forEach(symbol => {
        symbol.style.animation = 'pulse 2s ease-in-out infinite';
    });

    console.log('Todos los scripts cargados correctamente'); // Debug final
});

// ========== FUNCIONES AUXILIARES GLOBALES ==========
function abrirFormularioContacto() {
    const dropdownForm = document.querySelector('.dropdown-form');
    if (dropdownForm) {
        dropdownForm.style.opacity = '1';
        dropdownForm.style.visibility = 'visible';
        dropdownForm.style.transform = 'translateX(-50%) translateY(0)';
    }
}

function cerrarFormularioContacto() {
    const dropdownForm = document.querySelector('.dropdown-form');
    if (dropdownForm) {
        dropdownForm.style.opacity = '0';
        dropdownForm.style.visibility = 'hidden';
        dropdownForm.style.transform = 'translateX(-50%) translateY(-10px)';
    }
}

// ========== ESTILOS CSS DINÁMICOS ==========
// CSS para animación de flotación
const floatStyle = document.createElement('style');
floatStyle.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
    }
`;
document.head.appendChild(floatStyle);

// CSS para animación de pulso
const pulseStyle = document.createElement('style');
pulseStyle.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2); }
    }
`;
document.head.appendChild(pulseStyle);

// CSS para la animación de ondas
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);