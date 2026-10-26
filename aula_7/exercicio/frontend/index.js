const tabela_corpo = document.getElementById("corpo_tabela");
const nome_aluno = document.getElementById("nome_aluno");
const botao = document.getElementById("botao");

function getData(){
    fetch("http://localhost:8000/get-dados.php")
}

getData()