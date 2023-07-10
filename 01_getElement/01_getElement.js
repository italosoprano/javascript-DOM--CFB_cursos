/*
html - root
html --> head / body
html --> body --> elementos (tags)

existem 4 metodos de pegar as propriedades de um elemento DOM

getElementById("id")
getElementByTagName("tag") --> retorna uma coleção de elementos html
getElementByClassName(".class")
QuerySelector("#id/.class") / QuerySelectorAll("#id/.class")

 */

/*
Usando o getElementById

const dc1 = document.getElementById("c1")
const dc2 = document.getElementById("c2")
const dc3 = document.getElementById("c3")
const dc4 = document.getElementById("c4")
const dc5 = document.getElementById("c5")
const dc6 = document.getElementById("c6")

let arrayElementos = [dc1, dc2, dc3, dc4, dc5, dc6]

arrayElementos.map((e) => { //.map() = tipo um loop For, melhor otimizado.
    e.innerHTML = "eaae"
    console.log(e)
})
*/

const cursoTodos = [...document.getElementsByClassName("curso")]
const cursoC1 = [...document.getElementsByClassName("c1")]
const cursoC2 = [...document.getElementsByClassName("c2")]

cursoC2.map((el) => {
    el.classLists.add("destaque")
})

/*
QuerySelector e QuerySelectorAll

o QuerySelector seleciona o primeiro item encontrado se ele for um conjunto de elementos não específico. Ex: <Div>
o QuerySelectorAll me retorna um NodeList que é um similar ao HtmlCollection
(".class") --> elementos daquela classe
("#id") --> elementos daquele ID
(".class, tag") --> elementos com aquele ID e que usama aquela tag
("tag [class]") --> elementos daquela tag coma aquela class
("tag 1 > tag 2") --> elementos da tag 1 que tem tag 2 dentro

*/

const query_cursoTodos = [...document.querySelectorAll(".curso")]
const query_cursoC1 = [...document.querySelectorAll(".c1")]
const query_cursoC2 = [...document.querySelectorAll(".c2")]
