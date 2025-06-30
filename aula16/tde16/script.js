const time = document.getElementById('time')
const listaTimes = document.getElementById('listaTimes')

function adicionar(){
    const li = document.createElement('li')
    li.textContent = `${time.value} concluída em ${pegarHora()}`

    const btnRemover = document.createElement('button')
    btnRemover.textContent = 'Remover'

    li.appendChild(btnRemover)

    btnRemover.addEventListener('click', function(){
        li.remove()
    })

    listaTimes.appendChild(li)
}

function pegarHora(){
    const data = new Date()
    const dia = data.getDate()
    const mes = data.getMonth() + 1
    const hora = data.getHours()
    const minutos = data.getMinutes()
    return `${dia}/${mes} ${hora}:${minutos}`
}