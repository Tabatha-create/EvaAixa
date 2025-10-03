<?php
// Conectar a la base de datos y obtener los datos de la primera película
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// verificar conexión
if ($conn->connect_error) {
  die("Conexión fallida: " . $conn->connect_error);
}

// Leer el archivo JSON
$json_data = file_get_contents('../peliculas.json');
$peliculas = json_decode($json_data, true);

// Preparar y ejecutar la inserción de datos 
foreach ($peliculas['all_time_best'] as $pelicula) { 
  $titulo = $pelicula['title']; 
  $director = $pelicula['director']; 
  $ano = $pelicula['year']; 
  $pais = $pelicula['country']; 
  $comentario = $pelicula['comment']; 
  $poster = $pelicula['poster']; 
  $trailer = $pelicula['trailer']; 
  $genero = $pelicula['genero']; 
  $duracion = $pelicula['duracion']; 
  $resumen = $pelicula['resumen']; 
  $analisis = $pelicula['analisis']; 
  $opinion = $pelicula['opinion']; 
  $foto = $pelicula['foto']; 
  $fotos_adicionales = json_encode($pelicula['fotos_adicionales']); 
  $enlace_externo = $pelicula['enlace_externo']; 
  
  $sql = "INSERT INTO peliculas (titulo, director, ano, pais, comentario, poster, trailer, genero, duracion, resumen, analisis, opinion, foto, fotos_adicionales, enlace_externo) VALUES ('$titulo', '$director', $ano, '$pais', '$comentario', '$poster', '$trailer', '$genero', '$duracion', '$resumen', '$analisis', '$opinion', '$foto', '$fotos_adicionales', '$enlace_externo')"; 
  
  if ($conn->query($sql) === TRUE) { 
    echo "Registro insertado correctamente: " . $titulo . "<br>"; 
  } else { 
    echo "Error insertando el registro: " . $conn->error . "<br>"; 
  } 
} 
// Cerrar conexión 
$conn->close();
