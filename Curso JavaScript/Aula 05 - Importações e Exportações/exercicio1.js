/*
    1. Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.
    
    Dados de entrada:
    5
    50
    10
    98
    23
    
    Saída:
    98
*/

const { gets, print } = require('./funcoes-auxiliares')

//const numerosSorteados = []

let maiorValor = 0

for (let index = 0; index < 5; index++) {
    const numeroSorteado = gets()
    //numerosSorteados.push(numeroSorteado)
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado
    }
}

print(maiorValor)