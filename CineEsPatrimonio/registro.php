<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // echo "Datos recibidos:<br>"; 
    // echo "Nombre: " . $_POST['name'] . "<br>"; 
    // echo "Email: " . $_POST['email'] . "<br>"; 
    // echo "Ciudad: " . $_POST['ciudad'] . "<br>"; 
    // echo "País: " . $_POST['pais'] . "<br>"; 
    // echo "Rol: " . $_POST['role'] . "<br>";
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $ciudad = $_POST['ciudad'];
    $pais = $_POST['pais'];
    $role = $_POST['role'];

    $data = "Nombre: $name\nCorreo Electrónico: $email\nCiudad: $ciudad\nPaís: $pais\nRol: $role\n\n";
    file_put_contents('registros.txt', $data, FILE_APPEND);

    header('Location: index.html');
    exit(); // Importante para detener la ejecución del script
}
