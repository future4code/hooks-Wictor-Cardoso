
function imprimeTresCoresFavoritas(cor1:string ,cor2:string,cor3:string):string[] {
 const newArray =[]
   newArray.push(cor1, cor2, cor3)
   return newArray
 }

console.log(imprimeTresCoresFavoritas('red', 'green', 'blue'))

const myVar: any = true;

console.log(typeof myVar);

if (typeof myVar === 'string') {
  console.log("Yes! String!!!"); 
}
if
   (typeof myVar === 'number'){
    console.log("Yes! Number!!!")
   }
if
  (typeof myVar === 'undefined'){
   console.log("Yes! Undefined!!!")
  }
  if
  (typeof myVar === 'boolean'){
   console.log("Yes! Boolean!!!")
  }

