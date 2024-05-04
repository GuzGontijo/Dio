let victories = 560
let defeats = 5
let ranking = [
    [0, "Ferro"],
    [11, "Bronze"],
    [21, "Prata"],
    [51, "Ouro"],
    [81, "Diamante"],
    [91, "Lendário"],
    [101, "Imortal"]
]
let winRatio
let level

function ratioCalculator () {
    winRatio = victories - defeats
    checkRank();
}

function checkRank () {
    for (let index = 0; index < ranking.length; index++) {
        if (winRatio >= ranking[index][0]) {
            level = ranking[index][1]
            };
    }
}

ratioCalculator();

console.log("O Herói tem de saldo de " + String(winRatio) + " vitórias e está no nível de " + level + ".")

// - Variáveis OK
// - Operadores OK
// - Laços de repetição OK
// - Estruturas de decisões OK
// - Funções OK

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal