function calcularRanked(vitorias, derrotas) {
    var saldoVitorias = vitorias - derrotas;
    var nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

var vitorias = parseInt(prompt("Digite o número de vitórias:"));
var derrotas = parseInt(prompt("Digite o número de derrotas:"));

var resultado = calcularRanked(vitorias, derrotas);

console.log("O Herói tem um saldo de " + resultado.saldoVitorias + " e está no nível de " + resultado.nivel + ".");
