const primeiro_numero = document.getElementById("primeiro_numero")
const segundo_numero = document.getElementById("segundo_numero")
const botao = document.getElementById("botao")
const maior = document.createElement('maior')

botao.onclick = function(){
    const num1 = Number(primeiro_numero.value)
    const num2 = Number(segundo_numero.value)

    if(num1 > num2){
        maior.innerText = num1
    } else{
        maior.innerText = num2
    }
    document.body.appendChild(maior)
}