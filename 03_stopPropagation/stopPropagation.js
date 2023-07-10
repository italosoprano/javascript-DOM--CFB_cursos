/*
Ao criar um evento no js ocorre um efeito cascata. Todos os itens dentro do mesmo (propriedades filho) irão sofrer desse mesmo evento.
Para previnir isso devemos usar o stopPropagation()
*/

const caixa1 = document.querySelector("#caixa1")
const cursos = [...document.querySelectorAll(".curso")]

cursos.map((el) => {
    el.addEventListener("click", (evt) => {
        evt.stopPropagation()
    })
})