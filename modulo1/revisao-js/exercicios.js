// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
   return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
   let arrPar = []
   for (let i of array) {
      if ((i % 2) === 0) {
         arrPar.push(i)
      }
   }
   return arrPar
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
   let arrPar = []
   for (let i of array) {
      if ((i % 2) === 0) {
         arrPar.push(i ** 2)
      }
   }
   return arrPar
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
   return Math.max(...array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
   let maiorNumero = num1
   let menorNumero = num2

   if (num1 > num2) {
      maiorNumero = num1
      menorNumero = num2

   } else {
      maiorNumero = num2
      menorNumero = num1
   }

   const maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
   const diferenca = maiorNumero - menorNumero

   return {
      maiorNumero: maiorNumero,
      maiorDivisivelPorMenor: maiorDivisivelPorMenor,
      diferenca: diferenca
   }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let arrPar = []
   for (let i = 0; i <= ((n * 2) - 2); i++) {
      if ((i % 2) === 0) {
         arrPar.push(i)
      }
   }
   return arrPar
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
   if (ladoA === ladoB && ladoB === ladoC) {
      return "Equilátero"
   }
   else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
      return "Isósceles"
   }
   else {
      return "Escaleno"
   }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}