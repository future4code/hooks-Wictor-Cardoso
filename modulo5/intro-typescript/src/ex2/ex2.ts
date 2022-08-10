function imprimeTresCoresFavoritas(cor1:string ,cor2:string,cor3:string):string[] {
 const newArray =[]
   newArray.push(cor1, cor2, cor3)
   return newArray
 }

console.log(imprimeTresCoresFavoritas('red', 'green', 'blue'))