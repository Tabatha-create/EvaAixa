
  const btnUp = document.getElementById('btnUp');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {   // Aparece tras bajar 300px
      btnUp.style.display = 'block';
    } else {
      btnUp.style.display = 'none';
    }
  });

  btnUp.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
