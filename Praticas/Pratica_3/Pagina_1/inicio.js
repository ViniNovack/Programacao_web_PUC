const devNome = "dev";
const devEmail = "dev@gmail.com";
const devSenha = "Senha1234";


const Unome = document.getElementById("nome");
const Uemail = document.getElementById("email");
const Usenha = document.getElementById("senha");
const Uverificar = document.getElementById("verificar");

verificar.onclick = () => {
    escaniar(Unome.value, Uemail.value, Usenha.value)
}

function escaniar(nome, email, senha){
    if(nome == devNome && email == devEmail && senha == devSenha){
        window.location.href = "../Pagina_2/tabela.html"
    } else{
        alert("Invalido")
    }
}