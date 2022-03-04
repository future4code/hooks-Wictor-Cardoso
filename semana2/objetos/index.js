// Exercícios de interpretação de código
// 1. leia o código a baixo
const filme = {
    nome: "Auto da Compadecida",
    ano: 2000,
    elenco: [
        "Matheus Nachtergaele", "Selton Mello", "Denise Fraga",
        "Virginia Cavendish"
    ],
    transmissoesHoje: [
        { canal: "Telecine", horario: "21h" },
        { canal: "Canal Brasil", horario: "19h" },
        { canal: "Globo", horario: "14h" }
    ]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

// a) O que vai ser impresso no console?
// Resposta = Matheus Nachtergaele
//            Virginia Cavendish
//            canal: Globo, horario: 14hr

// 2. Leia o código abaixo
const cachorro = {
    nome: "Juca",
    idade: 3,
    raca: "SRD"
}

const gato = { ...cachorro, nome: "Juba" }
const tartaruga = { ...gato, nome: gato.nome.replaceAll("a", "o") }

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// a) O que vai ser impresso no console?
// Resposta = nome: Juca, idade: 3, raca: SRD
//            nome: Juba, idade: 3, raca: SRD
//            nome: Jubo, idade: 3, raca: SRD

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// Resposta = Faz com que todo conteúdo que exista na lista anterior seja copiado para a próxima lista.

// 3. Leia o código abaixo
function minhaFuncao(objeto, propriedade) {
    return objeto[propriedade]
}

const pessoa = {
    nome: "Caio",
    idade: 23,
    backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// a) O que vai ser impresso no console?
// Resposta = false
//            undefined

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// Resposta = No primeiro console.log retornou o valor boleano atribuido para backender. Já no segundo console.log pediu para ser impresso o valor para altura, porém altura não existe na const pessoa, sendo retornado um valor "indefinido".

// Exercícios de escrita de código
// 1. Resolva os passos a seguir: 

// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:**
// Exemplo de entrada
// const pessoa = {
//     nome: "Amanda",
//     apelidos: ["Amandinha", "Mandinha", "Mandi"]
// }
// Exemplo de saída
"Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

const player = {
    nome: "Wictor",
    apelidos: ["Vitão", "Tertek", "Vitor"]
}
function identacaoPessoa(objeto) {
    const novoPlayer = {
        ...objeto
    }
    console.log(`Eu me chamo ${novoPlayer.nome} mas pode me chamar de: ${novoPlayer.apelidos[0]}, ${novoPlayer.apelidos[1]}, ${novoPlayer.apelidos[2]}`)
}
identacaoPessoa(player)

// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos.Depois, chame a função feita no item anterior passando como argumento o novo objeto
const novoPlayer = {
    ...player,
    apelidos: ["Hooks", "Labenu", "Nota mil"]
}
identacaoPessoa(novoPlayer)

// 2. Resolva os passos a seguir: 

//     a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

const obj1 = {
    nome: "João",
    idade: 32,
    profissao: "Programador"
}

const obj2 = {
    nome: "Maria",
    idade: 25,
    profissao: "Programadora"
}

//     b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:    
//     1. O valor de `nome`
//     2. O numero de caracteres do valor `nome`
//     3. O valor de `idade`
//     4. O valor de `profissão`
//     5. O numero de caracteres do valor `profissão`

function receber(objeto) {
    return [
        objeto.nome,
        objeto.nome.length,
        objeto.idade,
        objeto.profissao,
        objeto.profissao.length
    ]
}
console.log(receber(obj1))
console.log(receber(obj2))

// console.log(`O valor de nome: ${arr.nome}, o número de caracteres do valor nome: ${arr.nome.length}, o valor de idade: ${arr.idade}, o valor de profissão: ${arr.profissao}, o número de caracterres do valor profissão: ${arr.profissao.length}`)

// 3. Resolva os passos a seguir:     
//     a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
carrinho = []

//     b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
const objetoIdk1 = {
    nome: "maça",
    disponibilidade: "true",
}

const objetoIdk2 = {
    nome: "abacaxi",
    disponibilidade: "true",
}

const objetoIdk3 = {
    nome: "laranja",
    disponibilidade: "true",
}
//     c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 
function receberFruta(fruta) {
    carrinho.push(fruta)
}
receberFruta(objetoIdk1)
receberFruta(objetoIdk2)
receberFruta(objetoIdk3)

//     d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.**
console.log(carrinho)














