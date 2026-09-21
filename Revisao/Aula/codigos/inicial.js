console.log("JS RODANDO");

let filmes = [
    {
        "titulo": "As aventuras de PI",
        "genero": "aventura",
        "ano": 2015
    },
    {
        "titulo": "Kung fu Panda",
        "genero": "animação",
        "ano": 2008
    },
    {
        "titulo": "Os vingadores",
        "genero": "ação",
        "ano": 2012
    },
    {
        "titulo": "Capitão américa - Guerra civil",
        "genero": "ação",
        "ano": 2016
    }
]

const tabelaCorpo = document.getElementById("tabelaCorpo");

let respostaMap = filmes.map(item => `
            <tr>
                <td>${item.titulo}</td>
                <td>${item.genero}</td>
                <td>${item.ano}</td>
            </tr>
    `).join("");

console.log(respostaMap);

tabelaCorpo.innerHTML = respostaMap;