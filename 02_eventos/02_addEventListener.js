/*
Adicionando eventos, usando o addEventListener

Podemos adicionar os eventos dentro da tag html.
Ou dentro do arquivo Js. Melhor utilizado.
Existem diversos eventos que podem ser disparados: click, mouseover, blur, focus, open, submit, keydown, keypress, keyup, play, [...] etc.

Dentro da tag: onClick="alert('mensagem')
Pode se também chamar uma função descrita no arquivo js. onClick="função()". E ela vai realizar tal coisa.

para adicionar um evento usamos o .addEventListener que é um escutador de eventos e passamos pra ele qual evento ele deve prestar atenção, além do nome da função que ele vai desempenhar. 

*/

const cursos = [...document.querySelectorAll(".curso")]

cursos.map((el) => {
    el.addEventListener("click", (evt) => {
        const el = evt.target
        el.classList.add("destaque")
        console.log(el.innerHTML + " foi clicado!!")
    })
})