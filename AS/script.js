const time = document.getElementById('tarefa')
const listaTimes = document.getElementById('listaTarefas')
const listaConcluidas = document.getElementById('tarefasConcluidas')
let prioridade = 'Baixa'

let tarefasPendentes = []
let tarefasConcluidas = []

window.onload = function() {
    const pendentesSalvas = localStorage.getItem('tarefasPendentes')
    const concluidasSalvas = localStorage.getItem('tarefasConcluidas')
    tarefasPendentes = pendentesSalvas ? JSON.parse(pendentesSalvas, dateReviver) : []
    tarefasConcluidas = concluidasSalvas ? JSON.parse(concluidasSalvas, dateReviver) : []
    renderizarTarefasPendentes()
    renderizarTarefasConcluidas()
}

function dateReviver(key, value) {
    if (key === 'data' || key === 'dataConclusao') {
        return value ? new Date(value) : value
    }
    return value
}

function salvarLocalStorage() {
    localStorage.setItem('tarefasPendentes', JSON.stringify(tarefasPendentes))
    localStorage.setItem('tarefasConcluidas', JSON.stringify(tarefasConcluidas))
}

function definirPrioridade(event){
    const prioridadeSelecionada = event.target.id
    time.classList.remove('baixa', 'media', 'alta')
    if(prioridadeSelecionada === 'baixa'){
        prioridade = 'Baixa'
        time.classList.add('baixa')
    } else if(prioridadeSelecionada === 'media'){
        prioridade = 'Média'
        time.classList.add('media')
    } else if(prioridadeSelecionada === 'alta'){
        prioridade = 'Alta'
        time.classList.add('alta')
    }
}

function adicionarTarefa(){
    if(time.value.trim() === ''){
        alert('Por favor, digite uma tarefa.')
        return
    }
    const dataCriacao = new Date()
    const tarefa = {
        texto: time.value,
        prioridade: prioridade,
        data: dataCriacao,
        id: Date.now()
    }
    tarefasPendentes.push(tarefa)
    salvarLocalStorage()
    renderizarTarefasPendentes()
    time.value = ''
    time.classList.remove('baixa', 'media', 'alta')
    prioridade = 'Baixa'
}

function concluirTarefa(id){
    const index = tarefasPendentes.findIndex(t => t.id === id)
    if(index !== -1){
        const tarefa = tarefasPendentes.splice(index, 1)[0]
        tarefa.dataConclusao = new Date()
        tarefasConcluidas.push(tarefa)
        salvarLocalStorage()
        renderizarTarefasPendentes()
        renderizarTarefasConcluidas()
    }
}

function removerTarefa(id, lista){
    if(lista === 'pendentes'){
        tarefasPendentes = tarefasPendentes.filter(t => t.id !== id)
        salvarLocalStorage()
        renderizarTarefasPendentes()
    } else {
        tarefasConcluidas = tarefasConcluidas.filter(t => t.id !== id)
        salvarLocalStorage()
        renderizarTarefasConcluidas()
    }
}

function renderizarTarefasPendentes(){
    listaTimes.innerHTML = ''
    tarefasPendentes.forEach(tarefa => {
        const li = document.createElement('li')
        li.classList.add('tarefas-javascript')
        if(tarefa.prioridade === 'Baixa') li.classList.add('baixa')
        if(tarefa.prioridade === 'Média') li.classList.add('media')
        if(tarefa.prioridade === 'Alta') li.classList.add('alta')
        li.innerHTML = `
            ${tarefa.texto} - Prioridade: ${tarefa.prioridade} - Adicionada em ${formatarData(tarefa.data)}
            <button style="margin-left:10px" onclick="concluirTarefa(${tarefa.id})">Concluir</button>
            <button style="margin-left:10px" onclick="removerTarefa(${tarefa.id}, 'pendentes')">Remover</button>
        `
        listaTimes.appendChild(li)
    })
}

function renderizarTarefasConcluidas(){
    listaConcluidas.innerHTML = ''
    tarefasConcluidas.forEach(tarefa => {
        const li = document.createElement('li')
        li.classList.add('tarefas-javascript')
        if(tarefa.prioridade === 'Baixa') li.classList.add('baixa')
        if(tarefa.prioridade === 'Média') li.classList.add('media')
        if(tarefa.prioridade === 'Alta') li.classList.add('alta')
        li.innerHTML = `
            ${tarefa.texto} - Prioridade: ${tarefa.prioridade} - Concluída em ${formatarData(tarefa.dataConclusao)}
            <button style="margin-left:10px" onclick="removerTarefa(${tarefa.id}, 'concluidas')">Remover</button>
        `
        listaConcluidas.appendChild(li)
    })
}

function formatarData(data){
    const dia = String(data.getDate()).padStart(2, '0')
    const mes = String(data.getMonth() + 1).padStart(2, '0')
    const hora = String(data.getHours()).padStart(2, '0')
    const minutos = String(data.getMinutes()).padStart(2, '0')
    return `${dia}/${mes} ${hora}:${minutos}`
}

// Funções de ordenação
function prioridadeParaNumero(prioridade){
    if(prioridade === 'Alta') return 3
    if(prioridade === 'Média') return 2
    return 1
}

function ordenarPendentesPorPrioridade(){
    tarefasPendentes.sort((a, b) => prioridadeParaNumero(b.prioridade) - prioridadeParaNumero(a.prioridade))
    salvarLocalStorage()
    renderizarTarefasPendentes()
}
function ordenarPendentesPorData(){
    tarefasPendentes.sort((a, b) => a.data - b.data)
    salvarLocalStorage()
    renderizarTarefasPendentes()
}
function ordenarConcluidasPorPrioridade(){
    tarefasConcluidas.sort((a, b) => prioridadeParaNumero(b.prioridade) - prioridadeParaNumero(a.prioridade))
    salvarLocalStorage()
    renderizarTarefasConcluidas()
}
function ordenarConcluidasPorData(){
    tarefasConcluidas.sort((a, b) => a.dataConclusao - b.dataConclusao)
    salvarLocalStorage()
    renderizarTarefasConcluidas()
}

window.definirPrioridade = definirPrioridade
window.adicionarTarefa = adicionarTarefa
window.concluirTarefa = concluirTarefa
window.removerTarefa = removerTarefa
window.ordenarPendentesPorPrioridade = ordenarPendentesPorPrioridade
window.ordenarPendentesPorData = ordenarPendentesPorData
window.ordenarConcluidasPorPrioridade = ordenarConcluidasPorPrioridade
window.ordenarConcluidasPorData = ordenarConcluidasPorData