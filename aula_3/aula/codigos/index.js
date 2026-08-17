console.log("Aqui é meu JS rodando")
const inptNome = document.getElementById("inptNome")
const inptSenha = document.getElementById("inptSenha")
const btnEnviar = document.getElementById("btnEnviar")
const lblId = document.getElementById("lblId")

// function click(){
//     console.log("cliquei")
// }

// btnEnviar.onclick(this.click());

// or 

// btnEnviar.onclick(function(){
//     console.log("cliquei")
// });

// or

// btnEnviar.onclick(() => {
//     console.log("cliquei")
// })

btnEnviar.onclick = function(){
    console.log("teste")
    console.log(inptNome.value)
    console.log(inptSenha.value)

    if(validate(inptNome.value) && validate(inptSenha.value)){
        lblId.innerHTML = "SUCESSO!"
    } else{
        lblId.innerHTML = "ERRO!"
    }
}

function validate(text){
    if(text == ""){
        alert("ERRO!")
        return false
    }
    return true
}
