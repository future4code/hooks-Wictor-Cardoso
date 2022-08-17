function checaAnoBissexto(ano:number):boolean {
    const cond1 = ano % 400 === 0
    const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
 }

 console.log(checaAnoBissexto(2012))

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme = {
    nome: string ,
    anoLancamento: number,
    genero: GENERO,
   pontuacao?: number
}

const filmeUm: Filme ={
    nome: "O senhor dos aneis",
    anoLancamento: 1990,
    genero: GENERO.ACAO,
    pontuacao: undefined
}

const filmeDois: Filme ={
    nome: "Loky",
    anoLancamento: 2010,
    genero: GENERO.ACAO,
    pontuacao: 9
}

console.table(filmeUm)
console.table(filmeDois)

