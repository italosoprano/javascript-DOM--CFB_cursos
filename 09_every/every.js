/*
every é uma função que verifica todos os elementos de um array e procura por equivalencias. Verifica se todos os elementos de um array correspondem ao que é passado dentro da função. 

*/

const p_array = document.querySelector("#array")
const btnVerificar = document.querySelector("#btnVerificar")
const resultado = document.querySelector("#resultado")

const elementos_Array = [21, 25, 19, 20, 16, 18, 22]
p_array.innerHTML = "["+elementos_Array+"]"

btnVerificar.addEventListener("click", (evt) => {

    const ret = elementos_Array.every((el, i) => {
        if (el < 18) {
            resultado.innerHTML = "Array não conforme na posição " + i
        }
        return el >= 18
    })
    if(ret) {
        resultado.innerHTML = "OK"
    }
})

/*

const ret = elementos_Array.every((el, i) => {
        if (el < 18) {
            resultado.innerHTML = "Array não conforme na posição " + i
        } else {
            resultado.innerHTML = "OK"
        }
    })

*/