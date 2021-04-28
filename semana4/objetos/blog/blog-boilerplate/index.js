const array = []
function criarPost(){
    let criarTitulo = document.getElementById('titulo-post')
    let criarAutor = document.getElementById('autor-post')
    let criarConteudo = document.getElementById('conteudo-post')
    let container = document.getElementById('container-de-posts')
    const postValores = {
        titulo: criarTitulo.value,
        autor: criarAutor.value,
        conteudo: criarConteudo.value
    }

    container.innerHTML += `<div id="post"><h2>${criarTitulo.value}</h2> <h3>${criarAutor.value}</h3>
    <p>${criarConteudo.value}</p></div>`


    array.push(postValores)
    criarTitulo.value = ""
    criarAutor.value = ""
    criarConteudo.value = ""
}

    