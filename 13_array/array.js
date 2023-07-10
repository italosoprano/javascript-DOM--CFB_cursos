/*
Existem diversos metodos para trabalhar arrays:
push() = adiciona item ao fim da array
pop() = remove o ultimo item do array
unshift() = adiciona um item ao inicio da lista
shift() = remove o item do inicio

*/

const caixa = document.querySelector("#caixa")

let cores = ["azul", "verde", "vermelho", ["claro", "escuro", "médio"]]
let cursos = ["HTML", "CSS", "Javascript", cores]

//cursos[0] = "C++"

// cursos.push("C++", "python") 
// cursos.shift()

console.log(cursos[3][1]) // verde (indice [3] = array cores. indice [1] = valor verde do array cores.)
console.log(cursos[3][3][2]) // médio (indice [3] = array cores. indice [3] = novo array dentro do array. indice [2] = valor "médio" dentro do array.)

cursos.map((el) => {
    let p = document.createElement("p")
    p.innerHTML = el
    caixa.appendChild(p)

})