````function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let repeticao = 0;
  for (let i = 0; i < arrayDeNumeros.length; i++){
  if (arrayDeNumeros[i] === numeroEscolhido){repeticao++
  }
}
if(repeticao !== 0){
  return `O número ${numeroEscolhido} aparece ${repeticao}x`
}else{return `Número não encontrado`
}```
````
