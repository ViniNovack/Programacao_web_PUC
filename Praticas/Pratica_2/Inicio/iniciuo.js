const devNome = "DEV";
const devIdade = 20;
const devSenha = "senha1234";

const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const senha = document.getElementById("senha");
const enviar = document.getElementById("enviar");

enviar.onclick = () => {
    verificar(nome.value, idade.value, senha.value)
}

function verificar(nome, idade, senha){
    if(nome == devNome && idade == devIdade && senha == devSenha){
        window.location.href = "../Tabela/tabela.html"
    } else{
        alert("Invalido")
    }
}
