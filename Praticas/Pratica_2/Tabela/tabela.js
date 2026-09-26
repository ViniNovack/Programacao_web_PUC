let conteudo = [
    {
        "nome":"Vinicius",
        "idade":"20",
        "senha":"senha1234"
    },
    {
        "nome":"Vinicius",
        "idade":"20",
        "senha":"senha1234"
    }
]

const corpo = document.getElementById("corpo");

let preenchimento = conteudo.map(item => `
    <tr>
        <td>${item.nome}</td>
        <td>${item.idade}</td>
        <td>${item.senha}</td>
    </tr>
    `).join("")

corpo.innerHTML = preenchimento;