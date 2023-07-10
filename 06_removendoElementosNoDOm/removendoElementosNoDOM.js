const caixa1 = document.querySelector("#caixa1")
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]

cursos.map((el, chave) => {
    const novosCursos = document.createElement("div")
    const chaveIndex = chave += 1
    novosCursos.setAttribute("id", "c"+chaveIndex)
    novosCursos.setAttribute("class", "curso c1")
    novosCursos.innerHTML = el

    const remove_item = document.createElement("div")
    remove_item.innerHTML = "X"
    remove_item.setAttribute("class", "btn_lixeira")
    remove_item.addEventListener("click", (evt) => {
        caixa1.removeChild(evt.target.parentNode)
    })
    
    caixa1.appendChild(novosCursos)
    novosCursos.appendChild(remove_item)
})

/*
document.createElement("atributo") --> cria novo atributo
novoAtributo.setAttibute("classs", "id", "src", "url")
novoAtributo.removeChild("elemento") --> remove um elemento
IMPORTANTE: ao se remover um item, deve se passar o caminho completo para a remoção do item

*/