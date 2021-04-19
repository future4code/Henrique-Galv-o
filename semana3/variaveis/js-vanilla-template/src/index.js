//1 //10
    //10, 5

//2 //10, 10, 10


//1
const nome = prompt("Qual é o seu nome?")
let idade = prompt ("Qual a sua idade?")


console.log(typeof nome)
console.log(typeof idade)
Sem valor, recebo erro, com valor recebo "string" e "string"

console.log("Olá "+nome+", voce tem "+idade+" anos")



//2
const endereço = prompt("Qual o seu enderço?")
console.log("Resposta: "+endereço+"")

const carro = prompt("Qual o seu carro?")
console.log("Resposta: "+carro+"")

const cor = prompt("Qual é sua cor preferida?")
console.log("Resposta: "+cor+"")

const jogador = prompt("Qual o seu jogador preferido?")
console.log("Resposta: "+jogador+"")

const fruta = prompt("Qual a sua fruta preferida?")
console.log("Resposta: "+fruta+"")



//3
const arrayComidas = ["Queijo", "Macarrão", "Japones", "Pizza", "Hamburguer"]

console.log(arrayComidas)

console.log("Essas são minhas comidas preferidas:")
console.log(arrayComidas[0])
console.log(arrayComidas[1])
console.log(arrayComidas[2])
console.log(arrayComidas[3])
console.log(arrayComidas[4])

const comida = prompt("Qual sua segunda comida preferida?")

arrayComidas[1] = comida

console.log("Essas são minhas comidas preferidas:")
console.log(arrayComidas[0])
console.log(arrayComidas[1])
console.log(arrayComidas[2])
console.log(arrayComidas[3])
console.log(arrayComidas[4])


//4
const perguntas = ["Você gosta de comer?", "Você gosta de peixe cru?", "Você pularia de paraquedas?"]
const respostas = [true, true, true]

console.log(perguntas[0], respostas[0])
console.log(perguntas[1], respostas[1])
console.log(perguntas[2], respostas[2])







