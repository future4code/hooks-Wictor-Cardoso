
function comparaDoisNumeros(num1: number, num2:number): number {
    let maiorNumero;
    let menorNumero;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca = maiorNumero - menorNumero;
  
    return diferenca 
  }

  console.log(comparaDoisNumeros(2, 4))

enum SETOR {
	MARKETING="marketing",
	VENDAS="vendas",
	FINANCEIRO="financeiro"
}

type Pessoas = {
    nome: string ,
    salario: number,
    setor: SETOR,
   presencial: boolean,   
}

const colaboradores: Pessoas[]=[
{ nome: "Marcos", salario: 2500, setor: SETOR.MARKETING, presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: SETOR.VENDAS, presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "João" ,salario: 2800, setor: SETOR.MARKETING, presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: SETOR.VENDAS, presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: SETOR.MARKETING, presencial: true }
]

const filterColaborador = colaboradores.filter((obj)=>{
  if(obj.setor === SETOR.MARKETING && obj.presencial === true){
    console.table(obj)
  }else{
    console.log("It not.")
  }
})

console.log(filterColaborador)



