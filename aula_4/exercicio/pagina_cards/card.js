const corpo = document.getElementById("corpo")

let dados = [
    {src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQox21lC5RYVau0wzxrKLCJrKSjg7cLpd1QRILUzvP2rw&s=10", nome: "Batman o longo dia das bruxas"},
    {src: "https://upload.wikimedia.org/wikipedia/pt/3/39/Blackest_Night_1.jpg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original", nome: "A noite mais densa"},
    {src: "https://m.media-amazon.com/images/I/711mjCKjt0L._AC_UF1000,1000_QL80_.jpg", nome: "O dia mais claro"},
    {src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHkhek9f7gmckpF4uib0rDtRrcS6A-wOuvsE71_N6KSQ&s=10", nome: "A morte do superman"},
    {src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK4XAPCRznN5qjzb1dkdZio1rAwHDisWv_PWWKDDaJTg&s", nome: "Batman: A queda do morcego"}
]

let linhas = dados.map(n => `
    <div class="grande">
        <div class="card_1">
            <img src="${n.src}">
            <div class="card_2">
                <h1>${n.nome}</h1>
            </div>
        </div>
    </div>
    `).join("")

corpo.innerHTML = linhas