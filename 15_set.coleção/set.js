/*
A coleção set é uma coleção de itens que não permite a entrada de itens duplicados, diferente do array. 
não funciona com base em chave:valor. 
*/

const caixa = document.querySelector("#caixa")

let musicas = new Set(["musica1", "musica2", "musica3", "musica4", "musica5"]) //como iniciamos a costrução de uma coleção set. Podemos já passar itens para dentro do construtor. 

//as funções são similares aos da coleção map, com a diferença de que ele usa o add() no lugar do set().

musicas.add(["musica6", "musica1"]) //ele só vai permitir a entrada do "musica6", pois o "musica1" já existe. 

musicas.forEach((el) => { 
    caixa.innerHTML+= el + "<br/>"
})

/*
metodo for of também funciona, mas o metodo forEach() é um metodo proprio do set. 

for (m of musicas) {
    caixa.innerHTML += m + "<br/>"
}
*/