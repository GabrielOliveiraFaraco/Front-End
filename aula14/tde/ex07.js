while (true) {
    let num = Number(prompt("Digite um número:"));
    if (num < 0) {
        alert(`O número ${num} é negativo.`);
        break
    }else {
        alert(`O número ${num} é positivo.`);
        continue;
    }
}