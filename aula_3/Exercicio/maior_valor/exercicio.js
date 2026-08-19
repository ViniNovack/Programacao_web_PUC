const primeiro_numero = document.getElementById("primeiro_numero")
const segundo_numero = document.getElementById("segundo_numero")
const botao = document.getElementById("botao")
const resultado = document.getElementById('resultado')
const voltar = document.getElementById("voltar")
const limpar = document.getElementById("limpar")
const caixa_resultado = document.getElementById("caixa_resultado")

botao.onclick = function(){
    const num1 = Number(primeiro_numero.value)
    const num2 = Number(segundo_numero.value)

    if(num1 > num2){
        resultado.innerHTML = num1
    } else{
        resultado.innerHTML = num2
    }
    caixa_resultado.classList.remove("escondido")
}

voltar.onclick = function(){
    window.location.href = "../pagina_inicial/index.html";
}

limpar.onclick = function(){
    document.getElementById("analizar").reset()
    resultado.innerHTML = ""
    caixa_resultado.classList.add("escondido")
}