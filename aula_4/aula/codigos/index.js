console.log("aqui é meu JS rodando!")
const inptNome = document.getElementById("inptNome")
const inptSenha = document.getElementById("inptSenha")
const btnEnviar = document.getElementById("btnEnviar")
const lblId = document.getElementById("lblId")

//funcao anonima
btnEnviar.onclick = function(){
    console.log("teste")
    console.log(inptNome.value)
    console.log(inptSenha.value)
    
    if(validate(inptNome.value) && validate(inptSenha.value)){
        lblId.innerHTML = "SUCESSO!"
        window.location.href = "./paginas/paginaInicial.html";

    }
    else{
        lblId.innerHTML = "ERRO!"
    }
};

function validate(texto){
    if(texto == ""){
        return false
    }
    return true
}