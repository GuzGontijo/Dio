let name = "Jorgito"
let xp = 1200
let ranking = [
    [1000, "Ferro"], 
    [2000, "Bronze"],
    [5000, "Prata"],
    [7000, "Ouro"], 
    [8000, "Platina"],
    [9000, "Ascendente"],
    [10000, "Imortal"]
]
let rankingTotal = ranking.length
let index = rankingTotal
let match = false
let level

while (match == false) {
    let line = rankingTotal-index
    if (xp <= ranking[line][0]) {
        level = ranking[line][1]
        match = true
    } else if (xp > 10000) {
        level = "Radiante"
        match = true
    }
    index--
}

console.log("O Herói de nome " + String(name) + " está no nível de " + level + ".");


// - Variáveis OK
// - Operadores OK
// - Laços de repetição OK
// - Estruturas de decisões OK

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante