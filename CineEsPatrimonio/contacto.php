<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombreContacto'];
    $telefono = $_POST['telContacto'];
    $email = $_POST['emailContacto'];
    $mensaje = $_POST['mensajeContacto'];

    // Depuración
    error_log("Nombre: $nombre, Teléfono: $telefono, Email: $email, Mensaje: $mensaje");

    $archivo = 'contactos.txt';

    if(!is_writable(dirname($archivo))){
        die("El directorio no tiene permisos de escritura.");
    }

    $data = "Nombre: $nombre\nTeléfono: $telefono\nCorreo Electrónico: $email\nMensaje: $mensaje\n\n";

    if (file_put_contents('contactos.txt', $data, FILE_APPEND) === false) {
        die("No se pudo escribir en el archivo.");
    }

    header('Location: index.html');
    exit();
}

