const tabela = document.getElementById("corpoTabela");

let conteudo = [
    {
        "nome":"Vincius",
        "idade":18,
        "pais":"Brasil"
    },
    {
        "nome":"Vincius",
        "idade":18,
        "pais":"Brasil"
    },
    {
        "nome":"Vincius",
        "idade":18,
        "pais":"Brasil"
    },
    {
        "nome":"Vincius",
        "idade":18,
        "pais":"Brasil"
    },
    {
        "nome":"Vincius",
        "idade":18,
        "pais":"Brasil"
    }
]

let preenchimento = conteudo.map(item => `
    <tr>
        <td>${item.nome}</td>
        <td>${item.idade}</td>
        <td>${item.pais}</td>
    </tr>

`).join("")

tabela.innerHTML = preenchimento;