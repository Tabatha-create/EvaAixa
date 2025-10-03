

function mostrarCritica() { 
    const params = new URLSearchParams(window.location.search); 
    const peliculaId = params.get('pelicula'); 
    
    fetch('peliculas.json') 
        .then(response => response.json()) 
        .then(data => { 
            const pelicula = data.all_time_best.find(p => p.id === peliculaId); 
            
            if (pelicula) { 
                document.getElementById('titulo').innerText = "Título: " + pelicula.title; 
                document.getElementById('director').innerText = "Director: " + pelicula.director; 
                // console.log("Película encontrada:", pelicula);
                // console.log("Fotos adicionales:", pelicula.fotos_adicionales);
                document.getElementById('genero').innerText = "Género: " + pelicula.genero; 
                document.getElementById('duracion').innerText = "Duración: " + pelicula.duracion; 
                document.getElementById('resumen').innerText = "Resumen: " + pelicula.resumen; 
                document.getElementById('analisis').innerText = "Análisis: " + pelicula.analisis; 
                document.getElementById('opinion').innerText = "Opinión: " + pelicula.opinion;
                document.getElementById('foto').src = pelicula.foto;
                // Mostrar fotos adicionales
                const fotosContainer = document.getElementById('fotos-adicionales');
                fotosContainer.innerHTML = ''; // Limpiar contenedor

            if (pelicula.fotos_adicionales && Array.isArray(pelicula.fotos_adicionales)) {
                pelicula.fotos_adicionales.forEach(foto => {
                    const imgElement = document.createElement('img');
                    imgElement.src = foto;
                    imgElement.alt = `Foto adicional de ${pelicula.title}`;
                    imgElement.className = 'foto-adicional';
                    imgElement.onclick = () => {
                        document.getElementById('foto').src = foto;
                    };
                    fotosContainer.appendChild(imgElement);
                });
            }
    // configurar enlaces
        const leerMasLink = document.getElementById('leer-mas');
        leerMasLink.href = pelicula.enlace_externo || '#';

        const imdbLink = document.getElementById('imdb-link');
        imdbLink.href = `https://www.imdb.com/title/${pelicula.imdb_id}`;

        document.getElementById('trailer').src = pelicula.trailer;

            } else { 
                document.getElementById('contenido').innerText = "No se encontró la crítica para esta película."; 
            } 
        }) 
        .catch(error => console.error('Error al cargar el archivo JSON:', error)); 
    } 
    
    window.onload = mostrarCritica; 

