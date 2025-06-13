function ola() {
    alert('Olá')
}
//ola()
function olaNome(nome){
    alert (`Olá ${nome}`)
}
//olaNome('Juliano')
function olaNomeIdade(nome, idade){
    alert (`Olá ${nome} . Você tem ${idade} anos de idade.`)
}
//olaNomeIdade('Vitória', 25)

const nome = document.getElementById('nome')

function saudacao(){
    alert(`Olá ${nome.value}.`)
}

const mouse = document.getElementById('mouse')

function mouseCima(){
    mouse.style.backgroundColor = 'green'
}
function mouseSaiu(){
    mouse.style.backgroundColor = 'lightblue'
}
function textoMudou(){
    alert('Texto mudou.')
}
const texto = document.getElementById('texto')

function ganhouFoco(){
    texto.innerText = 'Input com Foco'
}
function perdeuFoco(){
    texto.innerText = 'Input perdeu o foco'
}