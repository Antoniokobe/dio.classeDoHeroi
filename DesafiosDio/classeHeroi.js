// Array de heróis (simulando múltiplas entradas)
const herois = [
    { nome: "Arthur", xp: 500 },
    { nome: "Lancelot", xp: 3000 },
    { nome: "Merlin", xp: 12000 }
];

// LAÇO DE REPETIÇÃO: percorre todos os heróis
for (let i = 0; i < herois.length; i++) {
    const heroi = herois[i];
    let nivel;

    // ESTRUTURA DE DECISÃO
    if (heroi.xp < 1000) nivel = "Ferro";
    else if (heroi.xp <= 2000) nivel = "Bronze";
    else if (heroi.xp <= 5000) nivel = "Prata";
    else if (heroi.xp <= 7000) nivel = "Ouro";
    else if (heroi.xp <= 8000) nivel = "Platina";
    else if (heroi.xp <= 9000) nivel = "Ascendente";
    else if (heroi.xp <= 10000) nivel = "Imortal";
    else nivel = "Radiante";

    // VARIÁVEIS sendo usadas
    console.log(`O Herói de nome **${heroi.nome}** está no nível de **${nivel}**`);
}