function checaTriangulo (a:number, b:number, c:number): string  {
    if (a !== b && b !== c) {
        return "Escaleno";
    } else if (a === b && b === c) {
        return "Equilátero";
    } else {
        return "Isósceles";
    }
}
console.log(checaTriangulo(1,2,3))

const nome: string = "Wictor"
const data: string= "13/08/1993"
const splitted = data.split("/")

console.log(`Olá me chamo ${nome}, nasci no dia ${splitted[0]} do mês ${splitted[1]} do ano de ${splitted[2]}` )

