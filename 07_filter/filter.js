/* 
filtra os elementos de um array, devolvendo um novo array apenas com os itens filtrados.
para usar o filter, podemos criar uma nova função anônima ou criar uma função externa e chamar esse dentro do Metodo. 

*/

const filtroMaior18 =(valor, indice, array)=> {
    if (valor >= 18) {
        return valor
    }
}
const idades = [12, 21, 30, 17, 18, 44, 12, 50]
const maior = idades.filter((val, ind, arr) => {
    if(val >= 18) {
        return val
    }
})
const menor = idades.filter((val, ind, arr) => {
    if(val <= 18) {
        return val
    }
})


console.log(idades)
console.log(maior)
console.log(menor)