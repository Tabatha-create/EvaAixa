// =======================
// INICIALIZACIÓN GENERAL
// =======================
document.addEventListener("DOMContentLoaded", () => {

    // ============================
    // NAVEGACIÓN SUAVE
    // ============================
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const id = link.getAttribute("href").substring(1);
            const target = document.getElementById(id);
            if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    // ============================
    // ANIMACIÓN DE SECCIONES AL ENTRAR EN PANTALLA
    // ============================
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".section").forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        section.style.transition = "0.6s ease";
        observer.observe(section);
    });

    // ============================
    // BOTÓN SCROLL TO TOP
    // ============================
    const scrollBtn = document.getElementById("scrollToTop");

    function toggleScrollBtn() {
        if (window.scrollY > 300) scrollBtn.classList.add("show");
        else scrollBtn.classList.remove("show");
    }

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", toggleScrollBtn);
    toggleScrollBtn();

    // ============================
    // FORMULARIO DESPLEGABLE DE CONTACTO
    // ============================
    const dropdown = document.querySelector(".contact-dropdown");
    const formBox = document.querySelector(".dropdown-form");
    const contactForm = document.getElementById("contactForm");
    let interacting = false;

    function openForm() {
        formBox.style.opacity = "1";
        formBox.style.visibility = "visible";
        formBox.style.transform = "translateX(-50%) translateY(0)";
    }

    function closeForm() {
        if (!interacting) {
            formBox.style.opacity = "0";
            formBox.style.visibility = "hidden";
            formBox.style.transform = "translateX(-50%) translateY(-10px)";
        }
    }

    dropdown.addEventListener("mouseenter", openForm);
    dropdown.addEventListener("mouseleave", () => setTimeout(closeForm, 150));

    formBox.addEventListener("mouseenter", () => interacting = true);
    formBox.addEventListener("mouseleave", () => {
        interacting = false;
        setTimeout(closeForm, 150);
    });

    document.addEventListener("click", e => {
        if (!dropdown.contains(e.target)) {
            interacting = false;
            closeForm();
        }
    });

    document.addEventListener("keydown", e => {
        if (e.key === "Escape") {
            interacting = false;
            closeForm();
        }
    });

    // Validación visual simple en inputs
    document.querySelectorAll(".contact-form input, .contact-form textarea").forEach(input => {
        input.addEventListener("focus", () => {
            interacting = true;
            openForm();
            input.style.borderColor = "#c084fc";
        });

        input.addEventListener("blur", () => {
            interacting = false;

            if (input.value && input.checkValidity()) input.style.borderColor = "#10b981";
            else if (input.value) input.style.borderColor = "#ef4444";
            else input.style.borderColor = "#e5e7eb";

            setTimeout(closeForm, 200);
        });
    });

    // Envío de formulario
    if (contactForm) {
        contactForm.addEventListener("submit", async e => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const status = document.getElementById("form-status");

            try {
                const response = await fetch(contactForm.action, {
                    method: "POST",
                    body: formData,
                    headers: { Accept: "application/json" }
                });

                if (!response.ok) throw new Error();

                status.style.display = "block";
                status.style.color = "#10b981";
                status.textContent = "¡Mensaje enviado con éxito! Te responderé pronto ♡";

                contactForm.reset();
                interacting = false;

                setTimeout(() => {
                    closeForm();
                    status.style.display = "none";
                }, 3000);

            } catch {
                status.style.display = "block";
                status.style.color = "#ef4444";
                status.textContent = "Hubo un error. Intenta de nuevo.";
            }
        });
    }

    // ============================
    // BARRA LATERAL DE REDES SOCIALES
    // ============================
    const sidebar = document.querySelector(".social-sidebar");

    if (sidebar) {
        sidebar.style.opacity = "0";
        sidebar.style.transform = "translateY(-50%) translateX(-100px)";
        sidebar.style.transition = "0.6s ease";

        setTimeout(() => {
            sidebar.style.opacity = "1";
            sidebar.style.transform = "translateY(-50%) translateX(0)";
        }, 500);
    }

    // Animación secuencial de botones
    const socialBtns = document.querySelectorAll(".social-btn");
    socialBtns.forEach((btn, i) => {
        btn.style.opacity = "0";
        btn.style.transform = "translateX(-50px)";

        setTimeout(() => {
            btn.style.opacity = "1";
            btn.style.transform = "translateX(0)";
            btn.style.transition = "0.4s ease";
        }, 700 + i * 100);
    });

    // Efecto de onda al hacer clic
    socialBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const ripple = document.createElement("span");
            ripple.style.position = "absolute";
            ripple.style.borderRadius = "50%";
            ripple.style.width = "50px";
            ripple.style.height = "50px";
            ripple.style.margin = "-25px";
            ripple.style.background = "rgba(255,255,255,0.6)";
            ripple.style.animation = "ripple 0.6s linear";
            ripple.style.left = "50%";
            ripple.style.top = "50%";

            btn.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Opacidad dinámica según scroll
    let lastY = window.scrollY;
    window.addEventListener("scroll", () => {
        sidebar.style.opacity =
            window.scrollY > lastY && window.scrollY > 100 ? "0.7" : "1";
        lastY = window.scrollY;
    });

    // ============================
    // ELEMENTOS DECORATIVOS
    // ============================
    document.querySelectorAll(".decorative-element").forEach(el => {
        el.style.animation = "floatDecor 4s ease-in-out infinite";
    });

    document.querySelectorAll(".footer-symbol").forEach(el => {
        el.style.animation = "pulse 2s ease-in-out infinite";
    });
});

// ============================
// CSS dinámico para animaciones
// ============================
const dynamicCSS = `
@keyframes floatDecor {
    0%, 100% { transform: translateY(0);}
    50% { transform: translateY(-20px);}
}
@keyframes pulse {
    0%,100% { transform: scale(1);}
    50% { transform: scale(1.2);}
}
@keyframes ripple {
    to { transform: scale(2); opacity: 0; }
}
`;
const styleTag = document.createElement("style");
styleTag.textContent = dynamicCSS;
document.head.appendChild(styleTag);