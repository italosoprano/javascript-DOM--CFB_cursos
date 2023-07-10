/*
nova forma de tratar strings dentro do js.
no lugar de declarar a string usando (""), usa se (``).
dentro da (``) pode se declarar qualquer variavel sem precisar iterar, apenas usando ${nomeVariavel}.
`string, string, string string string ${variavel1}, string, strin string string ${variavel2}`
metodo com template strings. Para adicionar quebra de linha precisa-se usar um /n no javascript ou <br/> para o html. 

*/

const caixa = document.querySelector("#caixa")

const carros = ["Polo", "Golf", "T-Cross", "HRV"]

let ul = "<ul>"

let frase = carros.map((el) => {
    ul+=`<li> ${el} <li/>`
})
ul + "<ul/>"

caixa.innerHTML = ul