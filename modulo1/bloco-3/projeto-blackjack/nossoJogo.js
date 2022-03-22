/**
 * 
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Boas vindas ao jogo de Balckjack")
if (confirm("Quer iniciar uma rodada?")) {
   const cartaUmJogador = comprarCarta();
   const cartaDoisJogador = comprarCarta();
   const cartaUmComputador = comprarCarta();
   const cartaDoisComputador = comprarCarta();
   const somaJogador = cartaUmJogador.valor + cartaDoisJogador.valor
   const somaComputador = cartaUmComputador.valor + cartaDoisComputador.valor
   console.log(`Usuário cartas - ${cartaUmJogador.texto} ${cartaDoisJogador.texto} - pontuação ${somaJogador}`)
   console.log(`Computador cartas - ${cartaUmComputador.texto} ${cartaDoisComputador.texto} - pontuação ${somaComputador}`)

   if (somaJogador > somaComputador) {
      console.log("O Usuário ganhou!")
   }
   else if (somaJogador === somaComputador) {
      console.log("Empate!")
   } else if
      (somaJogador < somaComputador) {
      console.log("O computador ganhou!")
   }



} else {
   console.log("O jogo acabou")
}
