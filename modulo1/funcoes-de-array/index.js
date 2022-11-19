// Exercícios de interpretação de código

// 1.  Leia o código abaixo

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]

//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

//   a) O que vai ser impresso no console?
//   R-vão ser impresso os objetos dentro da array, com seu item e indice.

// 2.  Leia o código abaixo

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]

//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })  
//   console.log(novoArrayB)

//   a) O que vai ser impresso no console?
//   R-os nomes dos objetos no array

// 3. Leia o código abaixo

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]

//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })  
//   console.log(novoArrayC)

//   a) O que vai ser impresso no console?
//   R-retornou o item e o apelido de 2 dos objetos, pois 1 dos objetos tem o apelido "Chijo" e de acordo com o pedido do return, só é pra retornar quem não tem apelido Chijo.

// Exercícios de escrita de código

// 1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

// a) Crie um novo array que contenha apenas o nome dos doguinhos
let soDog = pets.map((item, indice, array) => {
    return item.nome
})
console.log(soDog)

// b) Crie um novo array apenas com os [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)
arraySoSalsicha = []
let soSalsicha = pets.filter((item, indice, array) => {
    if (item.raca == "Salsicha") {
        arraySoSalsicha.push(item)
    }
})
console.log(arraySoSalsicha)

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"
arrayCachorro = []
let poodle = pets.filter((item, indice, array) => {
    if (item.raca == "Poodle") {
        arrayCachorro.push(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)
    }
})
console.log(arrayCachorro)

// 2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// a) Crie um novo array que contenha apenas o nome de cada item
let apenasNomeDoItem = produtos.map((item, indice, array) => {
    return item.nome
})
console.log(apenasNomeDoItem)

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
let desconto = produtos.map((item, indice, array) => {
    const novoPreco = (item.preco * 0.95).toFixed(2)
    return { nome: item.nome, preco: novoPreco }
})
console.log(desconto)

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
let bebidas = produtos.filter((item, indice, array) => {
    return item.categoria == "Bebidas"
})
console.log(bebidas)

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
let temYpe = produtos.filter((item, indice, array) => {
    if (item.nome.includes("Ypê")) {
        return item
    }
})
console.log(temYpe)

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
let ypeNovo = temYpe.map(temYpe => {
    return `Compre ${temYpe.nome} por ${temYpe.preco}`
})
console.log(ypeNovo)