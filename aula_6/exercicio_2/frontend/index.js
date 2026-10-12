const corpo = document.getElementById("corpo");

async function carregar() {
    const r = await fetch("http://localhost:8000");
    const cadastros = await r.json();

    if(cadastros.length === 0){
        corpo.innerHTML = "<tr> <td colspan='3'>Sem dados salvos</td> </tr>";
        return;
    }

    let preenchimento = cadastros.map(item => `
        <tr>
            <td>${item.nome}</td>
            <td>${item.idade}</td>
        </tr>
        `).join("");
    
    corpo.innerHTML = preenchimento;
}

carregar();