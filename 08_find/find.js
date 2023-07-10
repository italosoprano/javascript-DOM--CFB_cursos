/*
permite ao usuario pesquisar um elemento dentro de um array. Porém, só retorna o primeiro elemento encontrado desse array. 
Ex: array01 = [macaco, cobra, girafa, cobra, zebra, porco]
array01.find("cobra") --> cobra [1]
array01.find("cabrito") --> undefined
*/

const p_array = document.querySelector("#array")
const txt_pesquisar = document.querySelector("#txt_pesquisar")
const btnPesquisar = document.querySelector("#btnPesquisar")
const resultado = document.querySelector("#resultado")

const elementos_Array = [10, 5, 2, 9, 15, 20]
p_array.innerHTML = elementos_Array

btnPesquisar.addEventListener("click", (evt) => {
    resultado.innerHTML = "Valor não encontrado"
    const ret = elementos_Array.find((el, i) => {
        if(el.toUpperCase() == txt_pesquisar.value.toUpperCase()){
            resultado.innerHTML = "Valor encontrado " + el + " na posição " + i
            return el
        }
    })
})

