/*
some funciona similar ao every, mas no caso ele verifica se pelo menos 1 item está de acordo com o que é pedido na função.
.reduce(anterior, atual, pos) recebe um novo valor de parametro

*/

const p_array = document.querySelector("#array")
const btnReduzir = document.querySelector("#btnReduzir")
const resultado = document.querySelector("#resultado")

const elementos_Array = [1, 2, 3, 4, 5]
let ant=[] //novo array criado para o metodo
let atu=[]
let dobro=[]

p_array.innerHTML = "["+elementos_Array+"]"

btnReduzir.addEventListener("click", (evt) => {
    dobro.push(elementos_Array[0]*2)
    elementos_Array.reduce((anterior, atual, pos) => {
        ant.push(anterior)
        atu.push(atual)
        dobro.push(atual*2)
        return atual + anterior
    })

    resultado.innerHTML = "</br>V. anterior: "+ant+"</br>V. atual: "+atu+"</br>V. Dobro: "+dobro
})
