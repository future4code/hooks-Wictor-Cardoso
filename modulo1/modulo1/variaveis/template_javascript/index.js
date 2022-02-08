/* let a = 10
let b = 10

console.log(b)      =   10

b = 5
console.log(a, b)   =   10, 5



let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c) =  10, 10, 10


let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
let recebimentoPorDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${recebimentoPorDia/horasTrabalhadas} por hora`)*/


const meuNome = "Wictor"
const minhaIdade = 28
console.log(typeof meuNome, typeof minhaIdade)
// string undefined foram o tipos impressos, string por o meuNome conter aspas duplas,já o minhaIdade retornou um número por entender que se tarta de um número.

const meuNome = prompt ("Digite Wictor")
const minhaIdade = prompt ("Digite 28")
console.log(typeof meuNome, typeof minhaIdade)
// string string foram minhas respostas, devido as aspas duplas.

const meuNome = prompt ("Digite seu nome")
const minhaIdade = prompt ("Digite sua idade")
console.log("Olá", meuNome,",", "você tem", minhaIdade, "anos.")
// Olá Wictor , você tem 28 anos.

const primeiraResposta = prompt ("Está em casa hoje?")
const segundaResposta = prompt ("Gosta de refrigerante?")
const terceiraResposta = prompt ("Está com sono?")
console.log("Está em casa hoje?", primeiraResposta,", Gosta de refrigerante?", segundaResposta,", Está com sono?", terceiraResposta)
// Está em casa hoje? não , Gosta de refrigerante? não , Está com sono? não

let a = 10
let b = 25
let c = a
a = b
b = c
c = a
console.log("O novo valor de a é", a, "o novo valor de b é", b) // O novo valor de a é 25 e de b é 10
// O novo valor de a é 25 o novo valor de b é 10
