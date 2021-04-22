//Interpretação

//1

//Esse codigo realiza a checagem se o numero é par ou impar. Se o numero for par ele imprime "Passou no teste" e para impar ele imprime "Não passou no teste"

//2

//a. O codigo serve para informar o preço de cada fruta conforme o usuario escolhe as opções de fruta.
//b. "O preço da fruta Maçã é 2.25"
//c. "O preço da fruta PÊra é 5"

//3 

//a. A primeira linha está perguntando o numero para o usuario
//b. A mensagem seria Esse numero passou no teste. Se fosse -10 iria dar erro.
//c. Irá haver erro se o numero não for maior que 10 pois no bloco não ha um resultado para numeros menor que 10.

//Escrita

//4

// let idade = Number(prompt('Digite sua idade:'))

// if (idade > 18){
//     console.log('Voce pode dirigir!')
// } else {
//     console.log('Voce não pode dirigir.')
// }

//5 

// const turno = prompt('Que turno você estuda? Digite M para matutino, V para Vespertino, ou N para Noturno:')

// if (turno === 'M'){
//     console.log('Bom Dia!')
// } else if (turno === 'V') {
//     console.log('Boa tarde!')
// } else if (turno === 'N') {
//     console.log ('Boa noite!')
// } else {
//     console.log ('Escolha direito!')
// }

//6

// const turno = prompt('Que turno você estuda? Digite M para matutino, V para Vespertino, ou N para Noturno:')

// switch (turno){
//     case 'M':
//         console.log('Bom Dia!')
//         break
//     case 'V':
//         console.log('Boa tarde!')
//         break
//     case 'N':
//         console.log ('Boa noite!')
//         break
//     default:
//     console.log ('Escolha direito!')
// }

//7

// const genero = prompt('Qual o genêro do filme?')
// let preço = Number(prompt('Qual o preço do ingresso?'))

// if (genero === 'fantasia' && preço < '15'){
//     console.log('Bom filme!')
// } else{
//     console.log('Escolha outro filme!:(')
// }

//Desafio 

//1

// const genero = prompt('Qual o genêro do filme?')
// let preço = Number(prompt('Qual o preço do ingresso?'))
// const snack = prompt('Qual será seu snack?')

// if (genero === 'fantasia' && preço < '15'){
//     console.log('Bom filme! Com', snack)
// } else{
//     console.log('Escolha outro filme!:(')
// }

//2 //NÃO DEU KKK

const nome = prompt('Digite seu nome completo:')
const tipo = prompt('Digite o tipo do jogo (IN indica internacional; e DO indica doméstico):')
const etapa = prompt('Digite a etapa do jogo (SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final):')
const categoria = Number(prompt('Qual a categoria?'))
let numeroDeIngressos = Number(prompt('Quanto ingressos?'))


console.log('---Dados da Compra---')
console.log('Nome Completo:', nome)
switch (tipo){
    case 'IN':
        console.log('Tipo do jogo: Internacional')
        break
    case 'DO':
        console.log('Tipo do jogo: Nacional')
        break
    default:
        console.log('Escolha direito.')
}
switch(etapa){
    case 'SF':
        console.log('Etapa: Semi-Final')
        break
    case 'DT':
        console.log('Etapa: Decisão terceiro lugar')
        break  
    case 'FI':
        console.log('Etapa: Final')
        break
    default:
        console.log('Escolha direito.')           
}

console.log('Categoria:', categoria)
console.log('Numero de ingressos:', numeroDeIngressos, 'ingressos')
console.log('---Valores---')


if (tipo === 'DO' && etapa === 'SF' && categoria === 1){
    console.log('Valor do ingresso: R$', 1320)
    console.log('Valor total: R$', 1320*numeroDeIngressos)
} 

if (tipo === 'DO' && etapa === 'DT' && categoria === 1){
    console.log('Valor do ingresso: R$', 660)
    console.log('Valor total: R$', 660*numeroDeIngressos)
} 

if (tipo === 'DO' && etapa === 'FI' && categoria === 1){
    console.log('Valor do ingresso: R$', 1980)
    console.log('Valor total: R$', 1980*numeroDeIngressos)
} 

switch(tipo && etapa.toLocaleLowerCase().trim() && categoria){
    case 'DO' && 'FI' && 2:
        console.log('Valor do ingresso: R$', 1320)
        console.log('Valor total: R$', 1320*numeroDeIngressos)
        break;
    case 'DO' && 'FI' && 3:
        console.log('Valor do ingresso: R$', 880)
        console.log('Valor total: R$', 880*numeroDeIngressos)
        break  
    case 'DO' && 'FI' && 4:
        console.log('Valor do ingresso: R$', 330)
        console.log('Valor total: R$', 330*numeroDeIngressos)
        break
}

switch(tipo && etapa.toLocaleLowerCase().trim() && categoria){
    case 'DO' && 'DT' && 2:
        console.log('Valor do ingresso: R$', 440)
        console.log('Valor total: R$', 440*numeroDeIngressos)
        break
    case 'DO' && 'DT' && 3:
        console.log('Valor do ingresso: R$', 330)
        console.log('Valor total: R$', 330*numeroDeIngressos)
        break    
    case 'DO' && 'DT' && 4:
        console.log('Valor do ingresso: R$', 170)
        console.log('Valor total: R$', 170*numeroDeIngressos)
        break  
}

switch(tipo && etapa.toLocaleLowerCase().trim() && categoria){
    case 'DO' && 'SF' && 2:
        console.log('Valor do ingresso: R$', 880)
        console.log('Valor total: R$', 880*numeroDeIngressos)
        break;
    case 'DO' && 'SF' && 3:
        console.log('Valor do ingresso: R$', 550)
        console.log('Valor total: R$', 550*numeroDeIngressos)
        break 
    case 'DO' && 'SF' && 4:
        console.log('Valor do ingresso: R$', 220)
        console.log('Valor total: R$', 220*numeroDeIngressos)
        break  
}

