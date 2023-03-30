/*
    2. Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura))
    Instancie uma pesssoa chamadada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC
*/

class Pessoa {
    constructor(nome, peso, altura) {
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    calcularIMC() {
        return (`Meu IMC é de ${(this.peso / (Math.pow(this.altura, 2))).toFixed(2)}`);
        
    }
}

jose = new Pessoa('Jose', 70, 1.75)
console.log(jose)
console.log(jose.calcularIMC())