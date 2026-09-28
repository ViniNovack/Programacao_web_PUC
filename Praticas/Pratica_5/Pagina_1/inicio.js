const devsenha = "1234";

const Unome = document.getElementById("nome")
const Unascimento = document.getElementById("nascimento")
const Uemail = document.getElementById("email")
const Usenha = document.getElementById("senha")
const botao = document.getElementById("botao")

botao.onclick = () => {
    verificar(Usenha.value)
}

function verificar(senha){
    if(senha == devsenha){
        window.location.href = "../Pagina_2/tabela.html"
    } else{
        alert("Invalido")
    }
}