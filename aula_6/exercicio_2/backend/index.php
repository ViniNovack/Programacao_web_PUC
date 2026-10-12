<?php 
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");

    if(file_exists("dados.json")){
        $conteudo = file_get_contents('dados.json');
        echo $conteudo ?: json_encode([]);
    } else{
        echo json_encode([]);
    }
?>