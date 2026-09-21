const emailCred = "admin@gmail.com";
const senhaCred = "admin123";

const inptEmail = document.getElementById("inptEmail");
const inptSenha = document.getElementById("inptSenha");
const btnEntrar = document.getElementById("btnEntrar");

btnEntrar.onclick = () => {
    console.log("cliquei");
    validate(inptEmail.value,inptSenha.value);
}

function validate(email,senha) {
    console.log("recebi ",email,senha);
    if (email == emailCred && senha == senhaCred) {
        console.log("LOGADO");
        window.location.href = "./paginas/inicial.html";
    }
    else{
        alert("Campos invalidos");
    }
}