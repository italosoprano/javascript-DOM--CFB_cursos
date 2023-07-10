/*
Entendendo a relação dos itens do DOM. 
Cada elemento DOM está ligado diretamente ao seu elemento pai/parent (está acima na hierarquia), filho/child (está abaixo na hierarquia) e seus elementos irmãos/siblings (estão no mesmo nível hierarquico).
No HTML dessa pagina a Div caixa é o Root. E as Divs dentro dela são as filhas, HTML é a first child, MySQL é a last child.
Se pedirmos o child do HTML ele vai retornar o texto "HTML", se pedirmos o nodeChild, ele não vai retornar nada, pois o elemento não possui elementos filhos.
Podemos pegar alguns elementos: 

childNodes = retornar conteudo e elementos de dentro, texto, divs, imagens, paragráfos e afins.
children = retorna os elementos HTML [...]
firstChild = primeiro item (pode ser qualquer elemento, até texto)
firstElementChild = retorna o primeiro elemento HTML
lastChild = ultimo elemento
lastElementChild = retorna o ultimo elemento HTML
nextSiblings = proximo elemento irmão
nextElementSiblings = proximo elemento HTML irmão
beforeSiblings = elemento irmão anterior
beforeElementSiblings = elemento HTML irmão anterior
parentElement = elemento HTML pai
parentNode = lista de itens acima

Em Resumo:

- Element = elemento HTML
- Node = coleção de nós (nodes) e seus desdobramentos
- Children = coleção de itens HTML

Podemos indicar o elemento pelo Index. 

*/

const caixa1 = document.querySelector("#caixa1")
const btn_c = document.querySelectorAll(".curso")

console.log(caixa1.firstElementChild) // primeira div
console.log(caixa1.lastElementChild) // ultima div
console.log(caixa1.children) // coleção de div's
console.log(document.getRootNode()) // documento desde a raiz
console.log(document.ownerDocument) // o proprietario desse documento
console.log(document.hasChildNodes()) // retorna true se ele possuir filhos, pode ser elementos html ou textos.

// caso queira checar se ele possui elementos HTML filhos
// console.log(btn_c.children.length > 0 ? "Possui filhos" : "Não possui Filhos")

// para modificar o valor de um elemento filho
caixa1.firstElementChild.innerHTML = "ROLA"

/*
    <div >
        <div id="c1">
            <div id="c1_1">
                1
            </div>
        </div>
        <div id="c2">2</div>
        <div id="c3">3</div>
    </div>


se quisermos sair do 1 e irmos para o 2.
const c1_1 = document.querySelector("#c1_1")

console.log(c1_1.parentNode.children[2]) --> obteremos acesso a Div c3

*/