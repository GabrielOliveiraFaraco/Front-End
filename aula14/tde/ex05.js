let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let nota3 = Number(prompt("Digite a terceira nota:"));

let media = (nota1 + nota2 + nota3) / 3;
if (media >= 6) {
    alert(`A média é ${media}. Você foi aprovado.`);
}else {
    alert(`A média é ${media}. Você foi reprovado.`);
}