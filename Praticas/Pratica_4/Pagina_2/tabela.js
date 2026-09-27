let informacao = [
    {
        "nome":"Vinicius",
        "idade":22
    },
    {
        "nome":"Arthur",
        "idade":23
    }
]

const corpo = document.getElementById("corpo");

let conteudo = informacao.map(item => `
    <tr>
        <td>${item.nome}</td>
        <td>${item.idade}</td>
    </tr>
    `).join("")

corpo.innerHTML = conteudo