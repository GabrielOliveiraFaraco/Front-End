while (true) {
    let dia = Number(prompt("Digite o dia:"));
    if (dia >= 1 || dia <= 7) {
        switch (dia) {
            case 1:
                alert("Domingo");
                break;
            case 2:
                alert("Segunda-feira");
                break;
            case 3:
                alert("Terça-feira");
                break;
            case 4:
                alert("Quarta-feira");
                break;
            case 5:
                alert("Quinta-feira");
                break;
            case 6:
                alert("Sexta-feira");
                break;
            case 7:
                alert("Sábado");
                break;
        }
        break;
    }else {
        alert("Dia inválido. Por favor, digite um número entre 1 e 7.");
        break;
    }
}