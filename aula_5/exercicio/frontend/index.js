const nome = document.getElementById("nome")
const cpf = document.getElementById("cpf")
const email = document.getElementById("email")
const telefone = document.getElementById("telefone")
const nascimento = document.getElementById("nascimento")
const enviar = document.getElementById("enviar")

enviar.onclick = function(){
    const data = {
        nome:nome.value,
        cpf:cpf.value,
        email:email.value,
        telefone:telefone.value,
        nascimento:nascimento.value
    }

    //adicionando uma chamada para a API

    fetch("http://localhost:8000", {
        method: "POST",
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(data)
    }).then(response => response.json())
    .then(data => {
        console.log('Sucess from PHP:', data)
    })
}