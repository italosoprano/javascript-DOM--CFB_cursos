const caixaCurso = document.querySelector("#caixaCurso")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]
const btnCursoSelecionado = document.querySelector("#btnCursoSelecionado")
const btnRemoveCurso = document.querySelector("#btnRemoverCurso")
const btnAdicionarNovoCursoAntes = document.querySelector("#btnAdicionarNovoCursoAntes")
const btnAdicionarNovoCursoDepois = document.querySelector("#btnAdicionarNovoCursoDepois")
const nomeCurso = document.querySelector("#nomeCurso")


let indice = 1

const tirarSelecao=()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el)=>{
        el.classList.remove("selecionado")
    })
}

const criarNovoCurso = (curso) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c" + indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = curso
    novoElemento.addEventListener("click", (evt) => {
        tirarSelecao()
        evt.target.classList.toggle("selecionado")
    })
    return novoElemento
}

cursos.map((el, chave) => {
    const novoElemento = criarNovoCurso(el)
    caixaCurso.appendChild(novoElemento)
    indice++
})

const cursoSelecionado = () => {
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    return cursoSelecionado[0]
}

btnCursoSelecionado.addEventListener("click", (evt) => {
    try{
        alert("Curso selecionado: " + cursoSelecionado().innerHTML)
    }catch(ex){
        alert("Selecione um curso")
    }
})

btnRemoveCurso.addEventListener("click", () => {
    const cs=cursoSelecionado()
    if(cs!=undefined){
        cs.remove()
    }else{
        alert("Selecione um curso")
    }
})

btnAdicionarNovoCursoAntes.addEventListener("click", () => {
    try{
        if(nomeCurso.value!=""){
            const novoCurso=criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado())
        }else{
            alert("Digite o nome do curso")
        }
    }catch(ex){
        alert("Selecione um curso")
    }
})

btnAdicionarNovoCursoDepois.addEventListener("click", () => {
    try{
        if(nomeCurso.value!=""){
            const novoCurso=criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado().nextSibling)
        }else{
            alert("Digite o nome do curso")
        }
    }catch(ex){
        alert("Selecione um curso")
    }
})
