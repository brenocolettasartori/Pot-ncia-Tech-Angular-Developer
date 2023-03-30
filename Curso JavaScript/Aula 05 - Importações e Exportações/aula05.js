// para importar
// const funcoes = require('./funcoes-auxiliares')
// destructing
const { gets, print } = require('./funcoes-auxiliares')

print(gets())
//console.log(funcoes.get())


/*
Destructing --> permite extrair valores de arrays ou objetos de forma mais simples e conveniente
    \--> pode atribuir valores a variáveis ​​individuais em uma única instrução
        {get, print} --> construiu o objeto
        const pesssoa = {nome: 'joao'} --> construiu o objeto
        const {nome} = pessoa --> destructing
        const nome = pessoa.nome --> mesma coisa que o de cima
*/ 