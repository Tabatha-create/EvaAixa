const peliculas = [
    {
        id: "video1",
        titulo: "A es para átomo",
        director: "Carl Urbano",
        ano: 1953,
        pais: "USA",
        sinopsis: "Película científica que presenta la energía atómica como una fuerza pacífica y bélica."
    },
    {
        id: "video2",
        titulo: "Ha nacido una estrella",
        director: "William A. Wellman, Jack Conwa y Victor Fleming",
        ano: 1937,
        pais: "USA",
        sinopsis: "Una joven llega a Hollywood con sueños de estrellato, y los alcanza solo con la ayuda de un protagonista alcohólico cuyos mejores días han quedado atrás."
    },
    {
        id: "video3",
        titulo: "¿Cómo se hacen los dibujos animados?",
        director: "Wallace A. Carlson",
        ano: 1919,
        pais: "USA",
        sinopsis: "Wallace Carlson guía a los espectadores a través de la producción de un corto animado en Bray Studios."
    },
    {
        id: "video4",
        titulo: "Quiero ser marinero",
        director: "Tex Avery",
        ano: 1937,
        pais: "USA",
        sinopsis: "Un joven loro, en contra de los deseos de su madre, quiere convertirse en marinero como su padre, se escapa de casa y se dirige al océano con un pato joven que quiere unirse a él."
    },
    {
        id: "video5",
        titulo: "Vampiros en La Habana",
        director: "Juan Padrón",
        ano: 1985,
        pais: "Cuba",
        sinopsis: "Un científico vampiro ha creado el Vampisol, una pócima revolucionaria, que permite a los vampiros pasear bajo la luz del Sol. En cuanto la noticia llega a oídos de los grandes clanes de vampiros, todos viajan a La Habana para hacerse con el control de la fórmula: los estirados y siniestros vampiros europeos, y los mafiosos vampiros norteamericanos. Pepito, un trompetista, sobrino del creador de Vampisol, será perseguido por ambos grupos desde que se le encarga la custodia de la fórmula."
    },
    {
        id: "video6",
        titulo: "Vida con Papá",
        director: "Michael Curtiz",
        ano: 1947,
        pais: "USA",
        sinopsis: "En el domicilio neoyorquino del señor Clarence Day, un hombre que ha hecho fortuna en los negocios y gobierna su casa y a su familia con la mentalidad y los escrúpulos de un contable. La llegada de la tía Cora, acompañada de una jovencita encantadora, y la declaración del señor Day de que no ha sido bautizado produce una conmoción en la familia."
    },
    {
        id: "video7",
        titulo: "Que bello es vivir",
        director: "Frank Capra",
        ano: 1946,
        pais: "USA",
        sinopsis: "George Bailey es un honrado y modesto ciudadano que dirige y mantiene a flote un pequeño banco familiar, a pesar de los intentos de un poderoso banquero por arruinarlo. El día de Nochebuena de 1945, abrumado por la repentina desaparición de una importante suma de dinero, que supondría no solo la quiebra de su banco, sino también un gran escándalo, decide suicidarse, pero cuando está a punto de hacerlo ocurre algo extraordinario."
    }
];

function mostrarVideo(id) { 
    const videos = document.querySelectorAll('.video-wrapper'); 
    videos.forEach(video => { 
        video.classList.remove('active'); 
        const videoElement = video.querySelector('video'); 
        videoElement.pause(); 
    }); 
    
    const videoSeleccionado = document.getElementById(id); 
    videoSeleccionado.classList.add('active'); 
    const videoElement = videoSeleccionado.querySelector('video'); 
    videoElement.play(); 
    
    mostrarInfo(id); 

    videoElement.scrollIntoView({ behavior: 'smooth'});
} 

function cerrarVideo(id) { 
    const videoWrapper = document.getElementById(id); 
    videoWrapper.classList.remove('active'); 
    const videoElement = videoWrapper.querySelector('video'); 
    videoElement.pause(); 
    
    cerrarInfo(); 
} 

function mostrarInfo(id) { 
    const infoContainer = document.querySelector('.info'); 
    const pelicula = peliculas.find(pelicula => pelicula.id === id); 
    
    if (pelicula) { 
        infoContainer.innerHTML = ` 
            <h2>${pelicula.titulo}</h2> 
            <p><strong>Director:</strong> ${pelicula.director}</p> 
            <p><strong>Año:</strong> ${pelicula.ano}</p> 
            <p><strong>País:</strong> ${pelicula.pais}</p> 
            <p><strong>Sinopsis:</strong> ${pelicula.sinopsis}</p> 
        `; 
        infoContainer.classList.add('active'); 
    } 
} 

function cerrarInfo() { 
    const infoContainer = document.querySelector('.info'); 
    infoContainer.classList.remove('active'); 
}
