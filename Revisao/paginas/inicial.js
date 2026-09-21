console.log("JS rodando");

let filmes = [
    {
        "titulo": "As aventuras de PI",
        "genero": "Aventura",
        "Ano": 2015
    },

    {
        "titulo": "As aventuras de PI",
        "genero": "Aventura",
        "Ano": 2015
    },

    {
        "titulo": "As aventuras de PI",
        "genero": "Aventura",
        "Ano": 2015
    },

    {
        "titulo": "Capitão América",
        "genero": "Aventura",
        "Ano": 2015
    }
]

const tabelaCorpo = document.getElementById("tabelaCorpo");

let respostaMap = filmes.map(item => `
    <tr>
        <td>${item.titulo}<td>
        <td>${item.genero}<td>
        <td>${item.ano}<td>
    </tr>
    
    `).join("");

console.log(respostaMap);

tabelaCorpo.innerHTML = respostaMap;