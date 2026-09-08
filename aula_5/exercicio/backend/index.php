<?php 

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$jsonInput = file_get_contents('php://input');
$data = json_decode($jsonInput, true);

$nome = $data['nome'] ?? 'Sem nome';
$cpf = $data['cpf'] ?? '000.000.000-00';
$email = $data['email'] ?? 'Sem email';
$telefone = $data['telefone'] ?? 'Sem telefone';
$nascimento = $data['nascimento'] ?? '00/00/0000';

date_default_timezone_set('America/Sao_Paulo');
$timestamp = date("Y-m-d H:i:s");

$arrayData = [
    "timestamp" => $timestamp,
    "nome" => $nome,
    "cpf" => $cpf,
    "email" => $email,
    "telefone" => $telefone,
    "nascimento" => $nascimento
];

$jsonString = json_encode($arrayData, JSON_PRETTY_PRINT);

file_put_contents('dados.json', $jsonString);

echo json_encode([        // RETORNO AO JS
    "status" => "success",
    "mensagem" => "Hello $nome, you cpf is $cpf"
]);

?>