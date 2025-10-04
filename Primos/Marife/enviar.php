<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST['nombre']);
    $email = htmlspecialchars($_POST['email']);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    $destinatario = "tucorreo@ejemplo.com"; // Cambia esto
    $asunto = "Nuevo mensaje de $nombre";

    $contenido = "Nombre: $nombre\nCorreo: $email\n\nMensaje:\n$mensaje";

    $cabeceras = "From: $email";

    if (mail($destinatario, $asunto, $contenido, $cabeceras)) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Hubo un error al enviar el mensaje.";
    }
} else {
    echo "Acceso no autorizado.";
}
?>
