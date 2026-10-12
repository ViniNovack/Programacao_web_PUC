<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");

$arquivo = "dados.json";

if (!file_exists($arquivo)) {
    echo "[]";
    exit;
}

$conteudo = file_get_contents($arquivo);
echo $conteudo ?: "[]";