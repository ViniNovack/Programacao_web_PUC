const chaveEmail = "admin@gmail.com";

const email = document.getElementById("email");
const idade = document.getElementById("idade");
const verificar = document.getElementById("verificar");

verificar.onclick = () => {
    validar(email.value, idade.value)
}

function validar(email, idade){
    if(email == chaveEmail && idade >= 18){
        window.location.href = "../pagina_2/tabela.html"
    } else{
        alert("Invalido")
    }
}