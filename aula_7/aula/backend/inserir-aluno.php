<?php 

    $host = "localhost";
    $banco = "escola";
    $user = "root";
    $senha = "";

    $body = json_decode(file_get_contents("php://input"), true);
    $pdo = new PDO("mysql:host=$host;dbname=$banco", $user, $senha);
    $senha = $pdo -> prepare("INSERT INTO Alunos(nome) VALUES (?)")

?>