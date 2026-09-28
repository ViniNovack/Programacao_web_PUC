let conteudo = [
    {
        "nome":"Vinicius",
        "nascimento":"2008-08-30",
        "email":"vini@gmail.com"
    },
    {
        "nome":"Arthur",
        "nascimento":"2008-08-30",
        "email":"arthur@gmail.com"
    }
]

const corpo = document.getElementById("corpo")

let aplication = conteudo.map(item => `
    <tr>
        <td>${item.nome}</td>
        <td>${item.nascimento}</td>
        <td>${item.email}</td>
    </tr>
    `).join("")

corpo.innerHTML = aplication