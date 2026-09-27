let cadastros = [
    {
        "nome":"Vinicius",
        "email":"vininomn@gmail.com",
        "senha":"12345"
    },
    {
        "nome":"Arthur",
        "email":"arthur@gmail.com",
        "senha":"ARTHUR"
    }
]

const corpo = document.getElementById("corpo");

let preenchimento = cadastros.map(item => `
    <tr>
        <td>${item.nome}</td>
        <td>${item.email}</td>
        <td>${item.senha}</td>
    </tr>
    `).join("")

corpo.innerHTML = preenchimento;