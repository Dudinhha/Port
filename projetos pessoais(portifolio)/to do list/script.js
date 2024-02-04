let texto = document.getElementById('texto')
let botao = document.getElementById('botao')
botao.addEventListener('click', adicionar)
let lista = document.getElementById('lista')
function adicionar()
{
    let tarefa = document.createElement('li')
    let ok = document.createElement('input')
    ok.setAttribute('type', 'button')
    ok.setAttribute('id', 'botaoOk')
    ok.setAttribute('value', 'ok')
    tarefa.setAttribute('id', 'tarefa')
    ok.setAttribute('onclick', 'botaok()')
    
    tarefa.append(texto.value)
    tarefa.append(ok)
    lista.appendChild(tarefa)

    texto.value = ''
}


function botaok(){
    let tar = document.getElementById('tarefa')
    tar.remove()
    
    console.log('remove')
}


