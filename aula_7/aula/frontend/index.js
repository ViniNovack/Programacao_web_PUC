const tabela_corpo = document.getElementById("corpo_tabela");
const nome_aluno = document.getElementById("nome_aluno");
const botao = document.getElementById("botao");

function getData(){
    fetch("http://localhost:8000/get-dados.php")
    .then(resposta => resposta.json())
    .then(data => populate(data))
}

function populate(data){
    let dadosMap = data.map(item => `
        <tr>
            <td>${item.id_aluno}</td>
            <td>${item.nome_aluno}</td>
        </tr>
        `).join("")
    tabelaCorpo.innerHTML = dadosMap
}

btnEnviar.onclick = () => {
    const dados = {nome: nome_aluno.value}

    fetch("http://localhost:8000/inserir-aluno.php", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(dados)
    }).then(r => r.json())
    .then(() => {getData()});
}

getData()