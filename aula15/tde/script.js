const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultado = document.getElementById("resultado");

function somar() {
    if(num1.value === '' || num2.value === '') {
        alert("Por favor, preencha ambos os campos.");
    }else{
        let soma = Number(num1.value) + Number(num2.value);
        resultado.textContent = `Resultado: ${soma}`;
    }
}