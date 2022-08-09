const operacao = process.argv[2];
switch (operacao) {
  case "mult":
    const mult = Number(process.argv[3]) * Number(process.argv[4]);
    console.log(mult);
    break;
  case "div":
    const div = Number(process.argv[3]) / Number(process.argv[4]);
    console.log(div);
    break;
  case "soma":
    const soma = Number(process.argv[3]) + Number(process.argv[4]);
    console.log(soma);
    break;
  case "sub":
    const sub = Number(process.argv[3]) - Number(process.argv[4]);
    console.log(sub);
    break;
  case "tarefas":
    const tarefas = ["Lavar a louça", "Comprar Leite"];
    tarefas.push(process.argv[3]);
    console.log(tarefas)
    break;
}


