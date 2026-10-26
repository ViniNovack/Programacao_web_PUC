console.log("JS Rodando")
const tabelaCorpo = document.getElementById("tabelaCorpo")
const inptAluno = document.getElementById("inptAluno")
const btnEnviar = document.getElementById("btnEnviar")

function getData(){
    console.log("Pegando dados")
    // fetch, usando o verbo GET, get-dados.php
    fetch("http://localhost:8000/get-dados.php")
    .then(response => response.json())
    .then(data => populate(data))

}

function populate(data){
    console.log("populando tabela")
    let dadosMap = data.map(item => `
        <tr>
            <td>${item.id_aluno}</td>
            <td>${item.nome}</td>
        </tr>
    `).join("")
    tabelaCorpo.innerHTML = dadosMap
}

btnEnviar.onclick = () => {
    const dados = {nome: inptAluno.value}
    // fetch, enviando dados, inserir-aluno.php

    fetch("http://localhost:8000/inserir-aluno.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados)
    })
    .then(r => r.json())
    .then(() => {getData()});


}


getData()