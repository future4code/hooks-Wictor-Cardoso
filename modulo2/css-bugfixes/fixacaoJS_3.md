```function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let notas = (Number(p1 + p2 + ex) / 3)
  if (notas >= 9){ 
  return "A"
  }else if(notas < 9 && notas >= 7.5){
   return "B" 
  }else if (notas < 7.5 && notas >= 6){
    return "C"
  }else if(notas < 6){
    return "D"
  }
  calculaNota()
}```