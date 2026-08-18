const numero_1 = document.getElementById("numero_1")
const numero_2 = document.getElementById("numero_2")
const botao = document.getElementById("botao")
const resultado = document.getElementById("resultado")

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
}