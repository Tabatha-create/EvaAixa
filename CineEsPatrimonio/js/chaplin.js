
const quotes = [
    { image: 'Chaplin_1.jpg', quote: 'Aprende como si fueras a vivir toda la vida, y vive como si fueras a morir mañana.'},
    { image: 'Chaplin_3.jpg', quote: 'Ríe y el mundo reirá contigo; llora y el mundo, dándote la espalda, te dejará llorar.' },
    { image: 'Chaplin_4.jpg', quote: 'El verdadero significado de las cosas se encuentra al tratar de decir las mismas cosas con otras palabras.' },
    { image: 'Chaplin_5.jpg', quote: 'Nunca encontrarás un arcoíris si estás mirando hacia abajo.' },
    { image: 'Chaplin_6.jpg', quote: 'Todos somos unos aficionados. La vida es tan corta que no da para más.' },
];

function updateQuote(slideIndex) {
    const quote = quotes[slideIndex].quote;
    document.getElementById('quote').textContent = quote;
}

function moveSlide(containerId, direction) {
    const container = document.getElementById(containerId);
    const slides = container.children;
    const currentSlide = Array.prototype.indexOf.call(slides, container.querySelector('.carousel-slide.active'));
    const newSlideIndex = currentSlide + direction;

    if (newSlideIndex >= 0 && newSlideIndex < slides.length) {
        slides[currentSlide].classList.remove('active');
        slides[newSlideIndex].classList.add('active');
        updateQuote(newSlideIndex); //llama a la función updateQuote
    }
}