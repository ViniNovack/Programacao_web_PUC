let pessoas = [
    {
        "nome": "Vinicius",
        "idade": 18,
        "pais": "Brasil",
        "cidade": "curitiba"
    },
    {
        "nome": "Pedro",
        "idade": 40,
        "pais": "Brasil",
        "cidade": "curitiba"
    },
    {
        "nome": "Arthur",
        "idade": 18,
        "pais": "Brasil",
        "cidade": "floripa"
    },
    {
        "nome": "João",
        "idade": 50,
        "pais": "Brasil",
        "cidade": "Rio de Janeiro"
    },
    {
        "nome": "Carol",
        "idade": 18,
        "pais": "Brasil",
        "cidade": "São Paulo"
    }
]

const tabela = document.getElementById("tabela");

let resposta = pessoas.map(item => `
        <tr>
            <td>${item.nome}</td>
            <td>${item.idade}</td>
            <td>${item.pais}</td>
            <td>${item.cidade}</td>
        </tr>
    `).join("");

tabela.innerHTML = resposta;