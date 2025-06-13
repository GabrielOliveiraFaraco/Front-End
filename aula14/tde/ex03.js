let nome = prompt("Digite seu nome:");
let idade = Number(prompt("Digite sua idade:"));

if (idade >= 18) {
    alert(`Olá ${nome}, você tem ${idade} e é maior de idade.`);
}else {
    alert(`Olá ${nome}, você tem ${idade} e é menor de idade.`);
}
