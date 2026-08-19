const numero_1 = document.getElementById("numero_1")
const numero_2 = document.getElementById("numero_2")
const botao = document.getElementById("botao")
const resultado = document.getElementById("resultado")
const voltar = document.getElementById("voltar")
const limpar = document.getElementById("limpar")
const caixa_resultado = document.getElementById("caixa_resultado")

botao.onclick = function(){
    const num1 = Number(numero_1.value)
    const num2 = Number(numero_2.value)
    const sinal = document.getElementById("calculadora").elements["sinal"].value

    switch(sinal){
        case "+":
            resultado.innerHTML = (num1 + num2)
            break
        case "-":
            resultado.innerHTML = (num1 - num2)
            break
        case "*":
            resultado.innerHTML = (num1 * num2)
            break
        case "/":
            resultado.innerHTML = (num1 / num2)
            break
    }
    caixa_resultado.classList.remove("escondido")
}

voltar.onclick = function(){
    window.location.href = "../pagina_inicial/index.html";
}

limpar.onclick = function(){
    document.getElementById("calculadora").reset()
    resultado.innerHTML = ""
    caixa_resultado.classList.add("escondido")
}