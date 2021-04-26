//Interpretação

//1a. 10, 50
//1b. Nada apareceria no console.

//2a. As saidas no console seria Darvas e Caio
//2b. Só iria aparacer Amanda e Caio

//3. Esse codigo, pega um array e devolve outro array com numeros que são pares

//Escrita

//4.

//a.

// function imprimirInfo(){
//     console.log('Oi eu sou Henrique, tenho 22 anos, moro em Vinhedo e sou estudante')

// }
// imprimirInfo()

//b.

// function imprimirInfo(){
//     const nome = prompt('Qual seu nome?')
//     const idade = Number(prompt('Qual sua idade?'))
//     const cidade = prompt('Qual a sua cidade?')
//     const estudante = prompt('Responda com sim ou não, voce é estudante?')

//     if (estudante === 'sim'){
//     console.log(`Oi eu sou ${nome}, e tenho ${idade} anos, moro em ${cidade} e sou estudante`)
//     }else if(estudante === 'não'){
//         console.log(`Oi eu sou ${nome}, e tenho ${idade} anos, moro em ${cidade} e não sou estudante`)
//     }
// }
// imprimirInfo()

//5

//a.

// function soma(){
//     const num1 = Number(prompt('Digite seu primeiro numero'))
//     const num2 = Number(prompt('Digite seu segundo numero'))

//     console.log(num1+num2)
// }

// soma()

//b.

// function comparar(){
//     const num1 = Number(prompt('Digite seu primeiro numero'))
//     const num2 = Number(prompt('Digite seu segundo numero'))

//     console.log(num1 > num2)
// }

// comparar()

// //c.

// function repeteDez(){
//     for(let contador = 0; contador < 10; contador++)
//     console.log('oi')   
// }
// repeteDez()


//6

//a.

// function imprimeArray(array){
//     for(let i=0; i < array.length; i++){
//     console.log(array[i])
//     }
//     return array.length
// }

// const arrayTeste = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// const tamanho = imprimeArray(arrayTeste)
// console.log('tamanho do array:', tamanho)

//b.
// const numeroRecebido = (numero)=>{
//     if (numero%2 === 0){
//         console.log(true)
//     }else{
//         console.log(false)
//     }
// }

// numeroRecebido(10)

//c.
// let array1 = []
// function imprimeArray(array){
//     for(let i = 0; i < array.length; i++){
//         if(array[i]%2 === 0){
//             array1.push(array[i])
//         }
//     }
//     return array1.lenght
// }
// imprimeArray([10, 23, 45, 78, 90, 52, 35, 67, 84, 22])
// console.log(array1)

//d.

// let array1 = []
// function imprimeArray(array){
//     for(let i = 0; i < array.length; i++){
//         if(array[i]%2 === 0){
//             console.log(true)
//         }else{
//            console.log(false)
//         }
//     }
//     return array1.lenght
// }
// imprimeArray([10, 23, 45, 78, 90, 52, 35, 67, 84, 22])
// console.log(array1)