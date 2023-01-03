
//                                       // 
// Exercícios de interpretação de código //
//                                       //

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }


// a) Explique o que o código faz. Qual o teste que ele realiza? 
// Resposta: vê se o número tem como resto de divisão 0, no caso se o número é par ou ímpar

// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// Resposta: todos os números pares

// c) Para que tipos de números a mensagem é "Não passou no teste"?
// Resposta: todos os números ímpares

2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

//     let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?
Resposta: para receber um valor, como fruta, e retornar o preço dela

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
Resposta: O preço da fruta Maçã é R$ 2.25

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
Resposta: O preço da fruta pêra é  R$ 5

3. Leia o código abaixo:

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo?
Resposta: recebendo uma variável nomeada numero, com propriedade numérica sendo enviado atravez de o usuário por meio do imput prompt

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
Resposta: se digitar 10 seria "esse número passou no teste", se for -10 não iá retornar nada

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
Resposta: sim, no console encontrei um erro de syntax, que me diz que há uma identificação inesperada, trantando - se do console.log recebendo mensagem.Como devo falar de escopo, acho que tudo deveria estar dentro de uma chave ou duas


//                                 //  
// Exercícios de escrita de código //
//                                 //


1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele / ela pode dirigir(apenas maiores de idade).

// a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

// b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

// c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

const idadeUsuario = Number(prompt("Qual a sua idade?"))
if (idadeUsuario > 17) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir.")
}

2. Agora faça um programa que verifica que turno do dia um aluno estuda.Peça para digitar M(matutino) ou V(Vespertino) ou N(Noturno).Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!".Utilize o bloco if/else

const turno = prompt("Digite M, V ou N")
if (turno.toUpperCase() === "M") {
    console.log("Bom Dia!")
}
else if (turno.toUpperCase() === "V") {
    console.log("Boa Tarde!")
}
else if (turno.toUpperCase() === "N") {
    console.log("Boa Noite!")
}

3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

const turno2 = prompt(`Escolha um período
    1 = matutino
    2 = para vespertino
    3 = para noturno`)

    switch (turno2) {
        case "1":
            console.log("Bom Dia!")
            break;

        case "2":
            console.log("Boa Tarde!")
            break;

        case "3":
            console.log("Boa Noite!")
            break;
    }

    4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele / ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais.Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme.Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

    const filmeQueVaiAssistir = prompt("Qual filme você vai assistir? Digite: FANTASIA ou NÃO.")
    const preco = prompt("Preço do ingresso")

    if (filmeQueVaiAssistir.toLowerCase() === "fantasia" && preco < 15) {
        console.log("Bom filme!")
    }
    else {
        console.log("Escolha outro filme :(")
    }
