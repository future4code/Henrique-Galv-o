function imprimeTarefa(){
    const tarefa = document.getElementById('tarefa')
    const seletor = document.getElementById('dias-semana')
    
    const semana = document.getElementById(`${seletor.value}`)
    if(tarefa.value !== ""){
        semana.innerHTML += `<li><a href="#"> ${tarefa.value} </a></li>`
        tarefa.value = ""
    }
}
