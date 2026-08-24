const tabelaCorpo = document.getElementById("tabela-corpo")
const botao = document.getElementById("botao")

botao.onclick = function(){
    window.location.href = "../pagina_inicial/index.html"
}

let dados = [
    {id: 1, nome: "batlocalizador", descricao: "O Alfred pode ver onde o batman está"},
    {id: 2, nome: "liga_seleciona", descricao: "Ele diz quais herois foram celecionados para uma mição"},
    {id: 3, nome: "liga_inst", descricao: "Rede social da liga da justisa"},
    {id: 4, nome: "super_alerta", descricao: "As pessoas podem pedir ajuda ao superman atravez dele"},
    {id: 5, nome: "entregas_flash", descricao: "Vocês faz pedidos que vão ser enreguês pelo flash"},
    {id: 6, nome: "aqua_marinha", descricao: "Pode ver a qualidade do mar, atraez das informações coletadas pelo aquaman"}
]

let linhas = dados.map(n => `
    <tr>
        <td>${n.id}</td>
        <td>${n.nome}</td>
        <td>${n.descricao}</td>
    </tr>
    `).join("")

tabelaCorpo.innerHTML = linhas