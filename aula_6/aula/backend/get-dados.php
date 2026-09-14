<?php 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    if(file_exists("Cadastro-dados.json")){
        echo file_get_contents("cadastro-dados.json");
    } else{
        echo
    }




?>