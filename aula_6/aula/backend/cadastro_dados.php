<?php 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    if($_SERVER['REQUEST_METHOD'] == 'OPITION'){
        http_response_code(204);
        exit;
    }

    $jsonInput = file_get_contents('php://input');
    $data = json_decode($jsonInput, true);

    $nome = $data['nome'] ?? "sem nome";
    $idade = $data['idade'] ?? "sem idade";

    date_
    $arrayData = [
        "timestamp" => date("Y-m-d H:i:s"),
        "nome" => $nome,
        "idade" => $idade
    ];

    $dados = file_get_contents("cadastro-dados.json");
    $lista = json_decode($dados, true);

    $lista[] = $arrayData;

    $jsonString = json_encode($lista, JSON_PRETTY_PRINT);
    file_put_contents('cadastro-dados.json', $jsonString);

    echo json_encode([
        "status" => "success",
        "message" => "Recebi $nome e $idade"
    ])
?>