// Exercício 2
// a)
function obterEstatisticas(numeros:any) {

    const numerosOrdenados:any = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// b)
// const numerosOrdenados
// const soma
// const estatisticas
// recebendo por parâmetro numeros
// Passei o parametro como any o soma como number os dois valores A e B como number e estatisticas já recebe number/any então não mexi nele

// c)
type Estatisticas = {
    maior: number,
    menor: number,
    media: number
}

type amostraDeDados = (
    numeros: number[])=>
    Estatisticas 

