const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultado = document.getElementById("resultado");

const ap1 = document.getElementById("ap1");
const ap2 = document.getElementById("ap2");
const as = document.getElementById("as");
const situacao = document.getElementById("situacao");

function somar() {
    if(num1.value === '' || num2.value === '') {
        alert("Por favor, preencha ambos os campos.");
    }else{
        let soma = Number(num1.value) + Number(num2.value);
        resultado.textContent = `Resultado: ${soma}`;
    }
}

function subtrair() {
    if(num1.value === '' || num2.value === '') {
        alert("Por favor, preencha ambos os campos.");
    }else{
        let subtracao = Number(num1.value) - Number(num2.value);
        resultado.textContent = `Resultado: ${subtracao}`;
    }
}

function multiplicar() {
    if(num1.value === '' || num2.value === '') {
        alert("Por favor, preencha ambos os campos.");
    }else{
        let multiplicacao = Number(num1.value) * Number(num2.value);
        resultado.textContent = `Resultado: ${multiplicacao}`;
    }
}

function dividir() {
    if(num1.value === '' || num2.value === '') {
        alert("Por favor, preencha ambos os campos.");
    }else if(Number(num2.value) === 0) {
        alert("Divisão por zero não é permitida.");
    }else{
        let divisao = Number(num1.value) / Number(num2.value);
        resultado.textContent = `Resultado: ${divisao}`;
    }
}

function limpar() {
    num1.value = '';
    num2.value = '';
    resultado.textContent = 'Resultado:';
}

function calcularMedia() {
    if(ap1.value === '' || ap2.value === '' || as.value === '') {
        alert("Por favor, preencha todos os campos.");
    } else if (Number(ap1.value) < 0 || Number(ap2.value) < 0 || Number(as.value) < 0) {
        alert("As notas não podem ser negativas.");
    } else if (Number(ap1.value) > 2 || Number(ap2.value) > 3 || Number(as.value) > 5) {
        alert("As notas devem ser respectivamente: AP1 = 0 - 2 / AP2 = 0 - 3 / AS = 0 - 5.");
    } else {
        let media = (Number(ap1.value) + Number(ap2.value) + Number(as.value));
        resultado.textContent = `Média: ${media.toFixed(2)}`;
        if (media >= 6) {
            situacao.textContent = `Situação: Aprovado. Parabéns!`;
        } else {
            situacao.textContent = `Situação: Reprovado. Estude mais para a AF.`;
        }
    }
}