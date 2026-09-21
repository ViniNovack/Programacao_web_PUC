const emailAdmin = "admin@gmail.com";

const emailUsu = document.getElementById("email");
const nascimentoUsu = document.getElementById("nascimento");
const verificar = document.getElementById("verificar");

verificar.onclick = () => {
    validate(emailUsu.value, nascimentoUsu.value)
}

function validate(email, nascimento) {
    if(email == emailAdmin && (2026 - nascimento) >= 18){
        window.location.href = "../pagina_2/pagina.html"
    } else{
        alert("Campos Invalidos")
    }
}