 
     // Animaciones básicas
    document.querySelectorAll('[class*="animate-"]').forEach(el => {
      el.style.opacity = 0;
      el.style.transform = "translateY(30px)";
      setTimeout(() => {
        el.style.transition = "all 1s ease";
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }, 200);
    });