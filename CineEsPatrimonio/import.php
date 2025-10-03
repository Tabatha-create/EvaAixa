<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "peliculas_db";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Leer archivo JSON
$json_data = file_get_contents('peliculas.json');
$movies = json_decode($json_data, true)["all_time_best"];

// Insertar datos en la base de datos
foreach ($movies as $movie) {
    $id = $movie["id"];
    $title = $movie["title"];
    $director = $movie["director"];
    $year = $movie["year"];
    $country = $movie["country"];
    $comment = $movie["comment"];
    $poster = $movie["poster"];
    $trailer = $movie["trailer"];
    $genero = $movie["genero"];
    $duracion = $movie["duracion"];
    $resumen = $movie["resumen"];
    $analisis = $movie["analisis"];
    $opinion = $movie["opinion"];
    $enlace_externo = $movie["enlace_externo"];
    $imdb_id = $movie["imdb_id"];

    $sql = "INSERT INTO peliculas (id, title, director, year, country, comment, poster, trailer, genero, duracion, resumen, analisis, opinion, enlace_externo, imdb_id)
            VALUES ('$id', '$title', '$director', $year, '$country', '$comment', '$poster', '$trailer', '$genero', '$duracion', '$resumen', '$analisis', '$opinion', '$enlace_externo', '$imdb_id')";

    if ($conn->query($sql) !== TRUE) {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

echo "Datos importados correctamente";

$conn->close();
?>
