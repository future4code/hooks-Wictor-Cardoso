/*1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
R. Está repetindo uma ação por 5x, mas não entendi exatamente...

2. Leia o código abaixo:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

a) O que vai ser impresso no console?
R. Os números maiores que 18 em ordem crescente serão exibidos.

b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
R. Acredito eu que usar o [] e a posição desejada seria o suficiente.

3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
R. Que legal kkkk, imprimiu 1 asterisco por linha de acordo com a linha, se for a linha 18 terá 18 asteriscos desde a primeira gradualmente, linha 1, 1 asterisco, mas como é a 4, seria linha 1 = 1 asterisco até a 4, com 4 asteriscos

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}*/

/*1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
    a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    
    b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
    
    c) Por fim, imprima o array com os nomes dos bichinhos no console*/
    
// let animal = Number(prompt("Quantos bichos de estimação você tem?"))
// if (animal === 0){
//     console.log("Que pena! Você pode adotar um pet!")
// } else {
//     for(let i = 0; i < animal; i++){
//     let guardarNome = prompt("Digite o nome do seu pet")
//     let arr = [guardarNome]
//     console.log(arr)     
//     }       
//   }

  /*2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:*/
    arrayOriginal = [12, 21, 34, 43, 90, 221, 1116, 8, 54, 33]
  /*a) Escreva um programa que **imprime** cada um dos valores do array original.*/
//   function imprimirArray(array) {
//       for(let num of array){
//           console.log(num)
//       }      
//   }
//   imprimirArray(arrayOriginal)

  /*b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10*/
//   function arrayPorDez(array){
//       for(let num of array){
//           dividir = num / 10
//           console.log(dividir)
//       }
//   }
//   arrayPorDez(arrayOriginal)
  
  /*c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array*/
//   function arrayPar(pares) {
//       for (let index of pares){
//           if(index % 2 === 0)
//           console.log(index)
//       }             
//   }
//    arrayPar(arrayOriginal)

  /*d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.*/
//   function novoArray(params) {
//       for(let i = 0; i<params.length; i++){
// console.log(`O elemento do index ${i} é o número ${params[i]}`)
//       }
//   }
//   novoArray(arrayOriginal)
  
  /*e) Escreva um programa que imprima no console o maior e o menor números contidos no array original*/


function maiorEMenor(params){
  for (let i = 0; i < params.length; i++){
    if (i > params) {
        params = i        
    console.log(i)
} else if (i < params){
        params = i
    console.log(i)}
}
}
maiorEMenor(arrayOriginal)