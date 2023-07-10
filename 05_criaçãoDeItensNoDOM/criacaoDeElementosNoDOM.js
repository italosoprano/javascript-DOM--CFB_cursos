const caixa1 = document.querySelector("#caixa1")
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]

cursos.map((el, chave) => {
    const novosCursos = document.createElement("div")
    const chaveIndex = chave += 1
    novosCursos.setAttribute("id", "c"+chaveIndex)
    novosCursos.setAttribute("class", "curso c1")
    novosCursos.innerHTML = el
    caixa1.appendChild(novosCursos)
})