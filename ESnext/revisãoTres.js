//ES8: Object.values/Object.entries

const objeto = { a: 1, b: 2, c: 3 }
console.log(Object.values(objeto))
console.log(Object.entries(objeto))

//Melhorias na Notação Literal

const nome = "Carla"
const pessoa = {
    nome,
    ola() {
        return `Olá, ${nome}`
    }
}

console.log(pessoa.nome,pessoa.ola())

//Class

class Animal{}
class Cachorro extends Animal{
    falar(){
        return "Au au!"
    }
}

console.log(new Cachorro().falar())