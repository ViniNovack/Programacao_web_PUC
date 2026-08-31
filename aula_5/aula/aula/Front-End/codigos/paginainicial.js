console.log("pagina inicial rodando!")
const tabelaCorpo = document.getElementById("tabela-corpo")

let dados = [
    {aluno: "Marcelo", idade: 18, nota: 7.0},
    {aluno: "pedro", idade: 18, nota: 7.0},
    {aluno: "ana", idade: 18, nota: 7.0},
    {aluno: "maria", idade: 18, nota: 7.0},
    {aluno: "paola", idade: 18, nota: 7.0},
    {aluno: "guilherme", idade: 18, nota: 7.0},
    {aluno: "nicolas", idade: 18, nota: 7.0}
]

let linhasProcessadas = dados.map(n => `
        <tr>
            <td>${n.aluno}</td>
            <td>${n.idade}</td>
            <td>${n.nota}</td>
        </tr>
    `).join("")

tabelaCorpo.innerHTML += linhasProcessadas

console.log(linhasProcessadas)