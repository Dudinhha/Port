function adicionar(){
    let tarefa = document.getElementById('texto')
    let texto = tarefa.value.trim()

    if(texto !== ''){
        let lista = document.getElementById('lista')
        let novoitem = document.createElement('li')

        novoitem.className = 'item'
        novoitem.id = 'item'
        novoitem.innerHTML = texto + '<button id="botao" onclick="remover(this)">OK</button>'
        lista.appendChild(novoitem)
        tarefa.value = ''
    }else{
        alert('digite uma tarefa')
    }

}

function remover(elemento){
    let lista = document.getElementById('lista')
    let item = elemento.parentNode
    lista.removeChild(item)
}




