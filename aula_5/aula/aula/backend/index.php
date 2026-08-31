<?php

    // configs de seguranca
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    // pegar dados do POST
    $jsonInput = file_get_contents('php://input');
    // transformar dados em array
    $data = json_decode($jsonInput, true);







?>