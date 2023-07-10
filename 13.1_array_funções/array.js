/*
É possivel criar um array com todo tipo de dados dentro deles, inclusive funções. Podemos criar um array com funções dentro deles e elas podem ser executadas ao serem chamadas.
*/

let valores = [1, 2, 3, 4, 5]

const op = [
    (val) => {
        let res = 0
        for (v of val) {
            res += v
        }
        return res
    }, // função para somar cada valor do array

    (val) => {
        let res = 1
        for (v of val) {
            res *= v
        }
        return res
    }, // função para multiplicar cada valor do array

    (val) => {
        for (v of val) {
            console.log(v)
        }
    } // função para imprimir cada valor do array
]

console.log(op[0](valores)) // mandando imprimir a função do indice [0] desse array, usando de parametro os valores contidos no array valores.

console.log(op[1](valores)) // mandando imprimir a função do indice [1] desse array, usando de parametro os valores contidos no array valores.

op[2](valores) // como a função já tem um console.log dentro dela nao precisa chamar com console.log, apenas chamar a função e o parametro. 