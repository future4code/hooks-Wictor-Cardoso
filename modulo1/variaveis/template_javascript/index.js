// Exercícios de interpretação de código
// 1.
/* let a = 10
let b = 10
console.log(b)      =   10
b = 5
console.log(a, b)   =   10, 5

2.
let a = 10
let b = 20
c = a
b = c
a = b
console.log(a, b, c) =  10, 10, 10

3.
let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
let recebimentoPorDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${recebimentoPorDia/horasTrabalhadas} por hora`)*/

// Exercícios de escrita de código
//1. a), b), c), d)
let meuNome 
let minhaIdade 
console.log(typeof meuNome, typeof minhaIdade)
// undefined undefined, por não ter nenhum valor atribuido ele retorna indefinido.

//1. e), f)
let meuNome = prompt ("Digite Wictor")
let minhaIdade = prompt ("Digite 28")
console.log(typeof meuNome, typeof minhaIdade)
// string string, teve alteração para tipo de "texto"

// 1. g)
const meuNome = prompt ("Digite seu nome")
const minhaIdade = prompt ("Digite sua idade")
console.log("Olá", meuNome,",", "você tem", minhaIdade, "anos.")
// Olá Wictor , você tem 28 anos.

// 2. a), b)
const primeiraResposta = prompt ("Está em casa hoje?")
const segundaResposta = prompt ("Gosta de refrigerante?")
const terceiraResposta = prompt ("Está com sono?")
console.log("Está em casa hoje?", primeiraResposta,", Gosta de refrigerante?", segundaResposta,", Está com sono?", terceiraResposta)
// Está em casa hoje? não , Gosta de refrigerante? não , Está com sono? não


// 3.
let a = 10
let b = 25 // Antes eu havia colocado let c = a e também deu certo
c = a
a = b
b = c
console.log("O novo valor de a é", a, "o novo valor de b é", b) // O novo valor de a é 25 e de b é 10
// O novo valor de a é 25 o novo valor de b é 10