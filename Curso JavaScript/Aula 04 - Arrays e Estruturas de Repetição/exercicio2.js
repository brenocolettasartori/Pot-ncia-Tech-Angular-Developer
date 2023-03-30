/*
    2. Crie um programa que seja capaz de percorrer uma lista de números e imprime cada número PAR encontrado
*/

const numeros = [2, 4, 6, 8, 13, 15, 19, 31]

for (let index = 0; index < numeros.length; index++) {
    const par = numeros[index]
    if (par % 2 === 0) {
        console.log(par)
    } else {

    }
}

