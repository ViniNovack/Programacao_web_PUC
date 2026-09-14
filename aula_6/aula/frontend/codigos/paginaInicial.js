console.log("JS RODANDO!")

const inptNome = document.getElementById("inptNome")
const inptIdade = document.getElementById("inptIdade")
const btnEnviar = document.getElementById("btnEnviar")

btnEnviar.onclick = () => {
    console.log("cliquei no botão")

    let dados = {
        "nome": inptNome.value,
        "idade": inptIdade.value
    }
    sendData(dados)
}

function sendData(data){
    fetch("---"{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(response => response.json())
    .then(data => console.log(data))
}

function getData() {
    fetch("---")
    .then(response => response.json())
    .then(data => dados = data)
}

getData()

let resultado = dados.map(item => `
    <tr class="linha2">
        <td>${item.nome}</th>
        <td>
    `)





// console.log("pagina inicial rodando!")
// const tabelaCorpo = document.getElementById("tabela-corpo")


// let dados = [
//     {aluno: "Marcos", idade:18, nota: 7.0},
//     {aluno: "pedro", idade:17, nota: 10.0},
//     {aluno: "ana", idade:22, nota: 8.0},
//     {aluno: "maria", idade:19, nota: 9.0},
//     {aluno: "paola", idade:17, nota: 7.5},
//     {aluno: "guilherme", idade:18, nota: 3.0},
//     {aluno: "nicolas", idade:23, nota: 10.0},
// ]

// let linhasProcessadas = dados.map(n => `
//         <tr class="linhas">
//             <td>${n.aluno}</td>
//             <td>${n.idade}</td>
//             <td>${n.nota}</td>
//         </tr>
//     `).join("")

// tabelaCorpo.innerHTML += linhasProcessadas

// console.log(linhasProcessadas)

// let dadosApp = [
//     {IdApp: 1, Nome:"Uber", desc:"teste" },
//     {IdApp: 2, Nome:"Tinder", desc:"teste" },
//     {IdApp: 3, Nome:"Instagram", desc:"teste" },
//     {IdApp: 4, Nome:"Twitter", desc:"teste" }
// ]

// const tabelaCorpo2 = document.getElementById("tabela-corpo2")

// let resultado = dadosApp.map(n => `
//         <tr class="linhas2">
//             <td>${n.IdApp}</th>
//             <td>${n.Nome}</th>
//             <td>${n.desc}</th>
//         </tr>
//     `).join("")

// tabelaCorpo2.innerHTML = resultado