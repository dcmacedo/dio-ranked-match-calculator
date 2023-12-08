// Desenvolvido por Danilo C. Macedo para Desafios DIO

// Criei uma variável para armazenar o nome dos jogadores
let players = ["Estrela Cósmica","Raio Nebuloso","Lâmina Sideral","Sentinela Ígnea","Espectro Radiante","Tempestade Lunar","Arauto Astral","Guardião Solar","Sombra Estelar","Ciclone Nebular"]

// Criei uma variável para armazenar a quantidade de vitórias
let victories = [50, 150, 100, 300, 950, 2500, 700, 850, 960, 750]

// Criei uma variável para armazenar a quantidade de derrotas
let defeats = [40, 135, 60, 230, 895, 2350, 610, 805, 860, 649]

// Criei uma variável para armazenar os saldos
let balances = []

// Criei uma variável para armazenar os rankings
let rankings = []

// Chamo a função de calculo e preencho a lista de saldos
for (let i = 0; i < victories.length; i++) {
    let balance = calcBalance(victories[i], defeats[i])
    let ranking = classifyRanking(balance)
    balances.push(balance)
    rankings.push(ranking)
}

// Mapeei os nomes dos jogadores e suas respectivas vitórias e derrotas usando o 'map' e uma arrow function
let playersBalances = players.map((player,index) => ({
    playerName: player,
    victories: victories[index],
    defeats: defeats[index],
    balance: balances[index],
    ranking: rankings[index] 
}))

// Percorro a lista de players e faço a classificação
for (const player of playersBalances) {
    console.log(`O Herói de nome ${player.playerName} tem de saldo de ${player.balance} vitórias e está no nível de ${player.ranking}`)
}

//console.log(balances)
//console.log(rankings)

//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador
function calcBalance(victories, defeats) {
    let balance = victories - defeats
    return balance
}

// Classificação: "Ferro","Bronze","Prata","Ouro","Diamante","Lendário","Imortal"
function classifyRanking(balance) {
    if (balance >= 101) {
        return "Imortal"
    }else if (balance >= 91) {
        return "Lendário"
    }else if (balance >= 81) {
        return "Diamante"
    }else if (balance >= 51) {
        return "Ouro"
    }else if (balance >= 21) {
        return "Prata"
    }else if (balance >= 11) {
        return "Bronze"
    }else {
        return "Ferro"
    }
}