/*
o que são iteradores?
É um objeto que sabe como acessar cada item de uma coleção, enquanto mantém o rastreamento da posição atual 
Existem uma serie de coleções em js que podem ser iteraveis (arrays, strings, map, sets[...])

*/

const valores = [10, 9, 2, 15, 4, 7, 0]
const it_valores = valores[Symbol.iterator]()

const texto = "youtube"
const it_texto = texto[Symbol.iterator]()

console.log("iniciando iteração array")
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())

console.log("iniciando iteração string")
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())