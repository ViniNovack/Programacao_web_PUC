const nome = document.getElementById("nome")
const cpf = document.getElementById("cpf")
const email = document.getElementById("email")
const telefone = document.getElementById("telefone")
const nascimento = document.getElementById("nascimento")
const enviar = document.getElementById("enviar")

enviar.onclick = function(){
    const data = {
        nome:nome.ariaValueMax,
        cpf:cpf.ariaValueMax,
        email:email.ariaValueMax,
        telefone:telefone.ariaValueMax,
        nascimento:nascimento.ariaValueMax,
    }
}