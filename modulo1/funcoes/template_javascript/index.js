    Exercícios de interpretação de código

// 1. Leia o código abaixo
    
    function minhaFuncao(variavel) {
    	return variavel * 5
    }    
    console.log(minhaFuncao(2))
    console.log(minhaFuncao(10))
//         
//     a) O que vai ser impresso no console?
        r- 10 e 50
    
//     b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
        r- vai dar um erro, pois precisa do console.log para mostrar algo.
      
// 2. Leia o código abaixo
            
    let textoDoUsuario = prompt("Insira um texto");
        
     const outraFuncao = function(texto) {
         return texto.toLowerCase().includes("cenoura")
     }
             const resposta = outraFuncao(textoDoUsuario)
     console.log(resposta)
        
        
 //     a. Explique o que essa função faz e qual é sua utilidade
        r- transforma todo o texto em fonte minúscula para fazer uma verificação correta se há alguma palavra na frase, no caso "cenoura".
        
 //     b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
 //          i.   `Eu gosto de cenoura`
 //          ii.  `CENOURA é bom pra vista`
 //          iii. `Cenouras crescem na terra`

            r- i: "true"
            r- ii: "true"
            r- iii: "true" 


    Exercícios de escrita de código

    // 1. Escreva as funções explicadas abaixo:
    
    // a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
    
    // "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
      
    // Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

    function euInfo(){ 
    console.log(`Eu sou Wictor, tenho 28 anos, moro em Sertânia e sou estudante.`)  
    }
    euInfo()

            
    // b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
    
    // Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

   
    function caracteristica () {
        const nome = (prompt('Qual o seu nome?'))
        const idade = Number(prompt('Qual a sua idade?'))
        const endereco = (prompt('Qual a sua cidade?'))
        const profissao = (prompt('Qual a sua profissão?'))
        console.log(String(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`))
        return
    }
    caracteristica()
    
// 2. Escreva as funções explicadas abaixo:
    
//     a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
    
    function somarDuasEntradas() {
        const numero0 = Number(prompt("Digite um número"))
        const numero1 = Number(prompt("Digite outro número"))
        const soma = numero0 + numero1     
        return soma
    }
    console.log(O resultado da soma é: ${somarDuasEntradas()})

    // b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
    
    function compararDuasEntradas() {
        const numero0 = Number(prompt("Digite um número"))
        const numero1 = Number(prompt("Digite outro número"))
        const booleano = numero0 > numero1     
        return booleano   
    }
    compararDuasEntradas()

    // c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
    
    function compararDuasEntradas() {
        const numero = Number(prompt("Digite um número"))        
        const booleano = (numero % 2) === 0     
        return booleano   
    }
    compararDuasEntradas()

    // // d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
    
    function textoUpper(){
      const mensagem = prompt("Digite uma frase")
      console.log(mensagem.toUpperCase(), mensagem.length)    
    }    
    textoUpper()

  

// 3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e **chame** essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

function operacoesBase(){
const number01 = Number(prompt("Digite um número"))
const number02 = Number(prompt("Digite outro número"))
    function somar(){
        const soma = number01 + number02 
        return soma       
    }

    function subtrair(){
        const subtracao = number01 - number02
        return subtracao
    }

    function multiplicar(){
        const multiplicacao = number01 * number02
        return multiplicacao
    }

    function dividir(){
        const divisao = number01 / number02
        return divisao
    }

    function chamarConsole(){
    console.log(`
    O número 1 é: ${number01}
    O número 2 é: ${number02}
    A soma dos dois números é: ${somar()}
    A subtração dos dois números é: ${subtrair()}
    A multiplicação dos dois números é: ${multiplicar()}
    A divisão dos dois números é: ${dividir()}`)
    }
    console.log(chamarConsole())
}
    operacoesBase()      