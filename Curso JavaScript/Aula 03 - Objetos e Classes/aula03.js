/* 
Objeto
Objeto em JS --> coleção dinâmica de chave - valor
Função dentro de um objeto --> método
pessoa['nome'] = 'teste' --> dinâmico, não precisa saber o atributo
pessoa.nome = 'teste' --> acesso direto, preciso saber o atributo modelo
*/

const Carro1 = {
    marca: "Ford",
    modelo: "Ranger",
    ano: 2023,
    preco: 228590.00,
    velocidade: 0,
    acelerar: function () {
        this.velocidade += 10
        console.log(`${this.modelo} esta a ${this.velocidade}km/h`)
    }
}
Carro1.acelerar()
Carro1.acelerar()
console.log(Carro1['marca'])
atributo = 'marca'
console.log(Carro1[atributo])

/*
Classe
Classe é a deinição do que deveria ser aquele objeto(como deve ser)
Instância é uma ocorrência de um objeto
 * Instanciando --> const modelo = new Classe
constructor() --> O que acontece quando uma classe é instanciada
    \--> constructor() {
        this.variavel = 'Jão'
        this.variavel = 20
    }
    \--> constructor(parametro1, parametro2) {
        this.variavel = variavel
        this.variavel = variavel
    }
        \--> const variavel = new Classe(parametro1, parametro2)
*/

class Carro {
    marca
    modelo
    ano
    preco
    constructor(marca, modelo, ano, preco) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.preco = preco
    }
}

function comparaValor(c1, c2) {
    if (c1.preco > c2.preco) {
        console.log(`${c1.modelo} é mais caro que ${c2.modelo}`)
    } else if (c1.preco < c2.preco) {
        console.log(`${c2.modelo} é mais caro que ${c1.modelo}`)
    } else {
        console.log(`${c1.modelo} e ${c2.modelo} tem o mesmo preço`)
    }
}

const meuCarro = new Carro("Ford", "Ranger", 2023, 228590.00)
const meuCarro1 = new Carro("Ford", "F150", 2023, 470000.00)
console.log(meuCarro)
comparaValor(meuCarro, meuCarro1)
