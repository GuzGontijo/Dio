let name = "Jorgito"
let xp = 5432
let ranking = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]
let level

if (xp <= 1000) {
    level = ranking[0]
}else if (xp <= 2000) {
    level = ranking[1]
}else if (xp <= 5000) {
    level = ranking[2]
}else if (xp <= 7000) {
    level = ranking[3]
}else if (xp <= 8000) {
    level = ranking[4]
}else if (xp <= 9000) {
    level = ranking[5]
}else if (xp <= 10000) {
    level = ranking[6]
}else {
    level = ranking[7]
}

// while (xp < 10000) {
//     level = ranking[0]
// }


console.log("O Herói de nome " + String(name) + " está no nível de " + level + ".");



// - Variáveis OK
// - Operadores OK
// - Laços de repetição
// - Estruturas de decisões OK

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante