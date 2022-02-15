// Exercícios de interpretação de código
// 1.  Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

let array
console.log('a. ', array) // a. undefined

array = null
console.log('b. ', array) // b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // c. 11

let i = 0
console.log('d. ', array[i]) // d. 3

array[i+1] = 19
console.log('e. ', array) // e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13

const valor = array[i+6]
console.log('f. ', valor) // f. 9

// 2. Leia o código abaixo com atenção. Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // SUBI NUM ÔNIBUS EM MIRROCOS?


// Exercícios de escrita de código

// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem: O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!  

const nomeDoUsuario = prompt('Digite o nome do usuário')
const emailDoUsuario = prompt('Digite o e-mail do usuário')
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem vinda(o), ${nomeDoUsuario}!`)

// 2. 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
    // a) Imprima no console o array completo
    
    // b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    
    // c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista

const comidasPreferidas = ['Batata frita', 'Arroz', 'Carne', 'Feijão', 'Macarrão']
console.log(comidasPreferidas)
console.log(`Essas são as minhas comidas preferidas:
${comidasPreferidas[0]}
${comidasPreferidas[1]}
${comidasPreferidas[2]}
${comidasPreferidas[3]}
${comidasPreferidas[4]}`)

const usuarioComida = prompt('Qual a sua comida preferida?')
let i = 1
comidasPreferidas[i] = usuarioComida
console.log(comidasPreferidas)

// 3. Faça um programa, seguindo os passos:
    
    // a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
    // b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
    // c) Imprima o array no console
    
    // d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
    // e) Remova da lista o item de índice que o usuário escolheu.
    
    // f) Imprima o array no console

const arrayVazia = []
listaDeTarefas = arrayVazia 
const tarefa1 = prompt('Qual atividade você precisa realizar hoje? 1 de 3')
const tarefa2 = prompt('Qual atividade você precisa realizar hoje? 2 de 3')
const tarefa3 = prompt('Qual atividade você precisa realizar hoje? 3 de 3')
listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)
console.log(listaDeTarefas)

const indiceRealizado = prompt('Qual índice de tarefa você já fez? 0, 1 ou 2')
const ab = indiceRealizado
listaDeTarefas.splice(ab,1)
console.log(listaDeTarefas)

