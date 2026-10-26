<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: *");

if($_SERVER['REQUEST_METHOD'] === 'OPTIONS'){
    http_response_code(200);
    exit;
}

$host = "localhost";
$banco= "escola";
$user = "root";
$senha = "";

$body = json_decode(file_get_contents("php://input"),true);
$pdo = new PDO("mysql:host=$host;dbname=$banco",$user,$senha);
$sql = $pdo->prepare("INSERT INTO Alunos(nome) VALUES (?)");
$sql->execute([$body["nome"]]);
echo json_encode(["success" => "success"]);


?>