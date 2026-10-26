<?php 

    $host = "localhost";
    $banco = "escola";
    $user = "root";
    $senha = "";

    $body = json_decode(file_get_contents("php://input"), true);
    $pdo = new PDO("mysql:host=$host;dbname=$banco", $user, $senha);
    $sql = $pdo -> prepare("INSERT INTO Alunos(nome) VALUES (?)");
    $sql -> execute([$body["nome"]]);

?>