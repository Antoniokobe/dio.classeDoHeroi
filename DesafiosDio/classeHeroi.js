// 1. Declaração das variáveis
let nomeHeroi = "Gandalf"; // Você pode mudar o nome aqui
let xpHeroi = 7500;        // Você pode mudar o XP aqui

// 2. Variável para armazenar o nível
let nivel;

// 3. Estrutura de decisão para classificar o nível
if (xpHeroi < 1000) {
    nivel = "Ferro";
} else if (xpHeroi <= 2000) { // entre 1001 e 2000
    nivel = "Bronze";
} else if (xpHeroi <= 5000) { // entre 2001 e 5000
    nivel = "Prata";
} else if (xpHeroi <= 7000) { // entre 5001 e 7000
    nivel = "Ouro";
} else if (xpHeroi <= 8000) { // entre 7001 e 8000
    nivel = "Platina";
} else if (xpHeroi <= 9000) { // entre 8001 e 9000
    nivel = "Ascendente";
} else if (xpHeroi <= 10000) { // entre 9001 e 10000
    nivel = "Imortal";
} else { // maior ou igual a 10001
    nivel = "Radiante";
}

// 4. Saída final
console.log(`O Herói de nome **${nomeHeroi}** está no nível de **${nivel}**`);