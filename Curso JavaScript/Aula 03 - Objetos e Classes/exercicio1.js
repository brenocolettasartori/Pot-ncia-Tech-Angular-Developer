/*
    1. Crie uma classe para representar carros. 
    Os carros possuem uma marca, uma cor e um gasto médio de combustível. 
    Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
    constructor(marca, cor, gastoMedioPercurso) {
        this.marca = marca
        this.cor = cor
        this.gastoMedioPercurso = gastoMedioPercurso // km por L
    }

    gastoMedioCombustivel(distancia, precoCombustivel){
        const gastoMedio = (distancia/this.gastoMedioPercurso) * precoCombustivel
        return (`${this.marca}, gastará cerca de R$ ${(gastoMedio).toFixed(2)}`)
        }
    }


const meuCarro = new Carro("Ford", "Preto", 9/1)
console.log(meuCarro)
console.log(meuCarro.gastoMedioCombustivel(100, 5.19))
