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

   
    function caracteristica (nome, idade, endereco, profissao) {
        console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`))        
    }
    caracteristica("Wictor", 28, "Sertânia", "estudante")
    
// 2. Escreva as funções explicadas abaixo:
    
//     a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
    
    function somarDuasEntradas(num1, num2) {
          return soma = num1 + num2
    }
    console.log(somarDuasEntradas(2, 3))

    // b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
    
    function compararDuasEntradas(num1, num2) {
      return num1 > num2
    }
    compararDuasEntradas(2, 3)

    // c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
    
    function compararDuasEntradas(booleano) {
      return divisivel (booleano % 2) === 0    
    }
    compararDuasEntradas(22)

    // // d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
    
    function textoUpper(string){
      return `O texto ${string.toUpperCase()} contem ${string.length} caracteres.`   
    }    
    console.log(textoUpper("Wictor Feitosa"))

  

// 3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e **chame** essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

    function somar(num1, num2){
        return  num1 + num2                
    }

    function subtrair(num1, num2){
        return  num1 - num2       
    }

    function multiplicar(num1, num2){
        return num1 * num2       
    }

    function dividir(num1, num2){
        return num1 / num2                     
    }

    const num1 = Number(prompt("Digite um número"))
    const num2 = Number(prompt("Digite outro número"))

   
    console.log(`O meu número 1 é: ${num1}, e o número 2 é: ${num2}`)
    
    console.log(somar(num1, num2))
    console.log(subtrair(num1, num2))
    console.log(multiplicar(num1, num2))
    console.log(dividir(num1, num2))   

       
    // function somar(num1, num2){
    //     return num1 + num2              
    // }

    // function subtrair(num1, num2){
    //    return  num1 - num2        
    // }

    // function multiplicar(num1, num2){
    //   return num1 * num2       
    // }

    // function dividir(num1, num2){
    //    return  num1 / num2        
    // }

    // const fristNumber = Number(prompt("Digite um número: "))
    // const secondNumber = Number(prompt("Digite outro número: "))

    // console.log(`Nùmeros inseridos: ${fristNumber}, ${secondNumber}`)
    // console.log("soma:", somar(fristNumber, secondNumber))
    // console.log("subtracao:", subtrair(fristNumber, secondNumber))
    // console.log("multiplicacao:", multiplicar(fristNumber, secondNumber))
    // console.log("divisao:", dividir(fristNumber, secondNumber))
