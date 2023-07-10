/*
some funciona similar ao every, mas no caso ele verifica se pelo menos 1 item está de acordo com o que é pedido na função. 

*/

const p_array = document.querySelector("#array")
const btnVerificar = document.querySelector("#btnVerificar")
const resultado = document.querySelector("#resultado")

const elementos_Array = [16, 12, 10, 17, 13, 15, 19]
p_array.innerHTML = "["+elementos_Array+"]"

btnVerificar.addEventListener("click", (evt) => {

    const ret = elementos_Array.some((el, i) => {
        if (el < 18) {
            resultado.innerHTML = "Array não conforme na posição " + i
        }
        return el >= 18
    })
    if(ret) {
        resultado.innerHTML = "OK"
    }
})
