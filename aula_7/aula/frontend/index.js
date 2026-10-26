const inptAluno = document

function getData(){
    fetch("")
    .then(response => response.json())
    .then(data => console.log(data))
}

function populate(data){
    console.log("populando tabela")
    data.map(item => `
        <tr>
            <td>${item.id_aluno}</td>
            <td>${item.nome}</td>
        </tr>
    `).join("")
    tabelaCorpo.innerHTML = dadosMap;
}

btnEnviar.onclick = () => {
    const dados = {nome: inptAluno.value}

    fetch()
}

getData()