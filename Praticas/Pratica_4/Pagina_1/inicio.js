const devsenha = "1234";

const Unome = document.getElementById("nome");
const Uidade = document.getElementById("idade");
const Usenha = document.getElementById("senha");
const botao = document.getElementById("botao");

botao.onclick = () => {
    testar(Uidade.value, Usenha.value)
}

function testar(idade, senha){
    if(idade >= 18 && senha == devsenha){
        window.location.href = "../Pagina_2/tabela.html"
    } else{
        alert("invalido")
    }
}