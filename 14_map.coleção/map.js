/*
No js temos o metodo map(), e temos também a coleção map que nos retorna objetos diferentes.
é uma coleção do tipo chave:valor.
*/

const caixa = document.querySelector("#caixa")

let mapa = new Map() //dessa maneira definimos que o mapa é uma coleção do tipo map

/*para adicionar elementos podemos utilizar alguns dos metodos ou atributos da coleção detre elas, temos.

clear() -->  limpa os valores da coleção.
delete() --> deleta os itens de uma coleção.
entries() --> verifica as entradas da coleção
forEach() --> metodo que percorre todos os elementos da coleção.
get() --> pega os valores da coleção. 
has() --> verifica se tem determinado item na coleção.
keys() --> retorna todas as chaves, mas, sem os valores.
set() --> define um item para a coleção. Precisa se usar uma combinação chave:valor.
size --> retorna o tamanho da coleção.
values() --> retorna os valores da coleção, mas, sem as chaves.
*/

mapa.set("curso", "javascript")
mapa.set("aluno", "italo")
mapa.set("doggo", "Mochi")
mapa.set("amor", "Helena")
mapa.set("deletavel", "nulo")

mapa.delete("deletavel")

console.log(mapa)

let pes = "curso"
let res = ""

if(mapa.has(pes)){
    res="A chave existe na coleção com o valor " + mapa.get(pes) 
} else {
    res="A chave não está na coleção"
}
res+="</br> O tamanho da coleção é de " + mapa.size

caixa.innerHTML = res

mapa.forEach((el) => {
    console.log(el)
})

