/* 
    Arrays
        Lista --> representado por []
*/

const alunos = ['João', 'Maria', 'Pedro']

console.log(alunos)
console.log(alunos[0], alunos[1])

alunos.push('Luan')
console.log(alunos)
alunos[1] = 'Julian'
console.log(alunos)

console.log()
const numeros = []
numeros.push(1) // adiciona 1
console.log(numeros)
numeros.push(2) // adiciona 2 
console.log(numeros)
numeros.pop() // remove ultimo elemento
console.log('POP:' + numeros)
numeros.push(2) // adiciona 2
numeros.shift() // remove primeiro elemento
console.log('SHIFT:' + numeros)
console.log(numeros.length) // tamanho da lista

/* 
    Estruturas de repetição
*/
const notas = []
notas.push(5)
notas.push(10)
notas.push(10)

let soma = 0

console.log()
for (let index = 0; index < notas.length; index++) {
    // index --> variável de controle
    // 2 parte --> estrutura condicional
    // 3 parte --> incrementação
    console.log(notas[index])
    const nota = notas[index]
    soma = soma + nota    
}

console.log()
const media = soma / notas.length
console.log(media)