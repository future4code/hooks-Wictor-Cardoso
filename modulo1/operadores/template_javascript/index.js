// Exercícios de interpretação de código

// 1.
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2
// // && se tiver uma parte falsa, tudo é falso

// let resultado = bool1 && bool2 
// console.log("a. ", resultado) // falso pois o boool2 é false

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) // falso pois o bool2 é false

// // || se tiver qualquer parte verdade, se aceita tudo como verdade
// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado) // verdade pois o bool1 é true

// console.log("d. ", typeof resultado)


// 2.
// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")
// const soma = primeiroNumero + segundoNumero
// console.log(soma) // retornará as duas palavras juntas pois todas são string e não números, para funcionar como deveria é necessário converter de string para número

// 3.
// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")
// const soma = Number(primeiroNumero) + Number(segundoNumero)
// console.log(soma) // converter na const soma para as variaveis primeiroNumero e segundoNumero serem convertidas para number antes de irem para o console.log


// Exercícios de escrita de código

1.
let idade = Number(prompt("Qual a sua idade?"))
let idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo(a)?")) 
let maior = idade > idadeAmigo
let diferenca = (idade - idadeAmigo) * -1 
console.log("Sua idade é maior do que a do seu amigo?", maior, diferenca) 

2.
let numeroPar = Number(prompt("Insira um número par"))
let resto = numeroPar % 2
console.log(resto) 
// o padrão que notei é que todos ficam com resultado igual a 0 
// se inserir número ímpar o resultado é 1 

3.
let idadeEmAnos = Number(prompt("Qual a sua idade em anos?"))
let idadeEmMeses = idadeEmAnos * 12
let idadeEmDias = idadeEmAnos * 365
let idadeEmHoras = (24 * 365) * idadeEmAnos
console.log("Um total de", idadeEmMeses, "meses", idadeEmDias, "dias", "e", idadeEmHoras, "em horas") 

4.
let numero1 = Number(prompt("Digite um número qualquer inteiro"))
let numero2 = Number(prompt("Digite outro número qualquer inteiro"))
let numeroMaior = numero1 > numero2
let numeroIgual = numero1 === numero2
let numeroDivisivel = (numero1 % numero2) === 0
let numeroDivisivel2 = (numero2 % numero1) === 0

console.log("O primeiro número é maior que o segundo?", numeroMaior, "primeiro número:", numero1, "segundo número:", numero2)
console.log("O primeiro numero é igual ao segundo?", numeroIgual, "primeiro número:", numero1, "segundo número:", numero2)
console.log("O primeiro numero é divisível pelo segundo?", numeroDivisivel, "primeiro número:", numero1, "segundo número:", numero2)
console.log("O segundo numero é divisível pelo primeiro?", numeroDivisivel2, "segundo número:", numero2, "primeiro número:", numero1)
