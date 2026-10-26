<?php
    echo json_encode(["teste"]);

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");

    $host = "localhost";
    $banco = "escola";
    $user = "root";
    $senha = "PUC@1234";

    $pdo = new PDO("mysql:host;dbname=$banco", $user, $senha);
    $sql = $pdo -> query("SELECT * FROM escola.Aluno;");
    $dados = $sql -> fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($dados);
?>