import React from "react";
import{ H3, Paragrafo, Total, Button} from "./Style"


class Etapa1 extends React.Component {
  render() {
    return <>
    <Total>
        <H3>ETAPA 1 - DADOS GERAIS</H3>
        <Paragrafo>1. Qual o seu nome?</Paragrafo>
        <input></input>
        <Paragrafo>2. Qual a sua idade?</Paragrafo>
        <input></input>
        <Paragrafo>3. Qual seu e-mail?</Paragrafo>
        <input></input>
        <Paragrafo>4. Qual sua escolaridade?</Paragrafo>
        <select>
          <option value="Ensino médio incompleto">Ensino médio incompleto</option>
          <option value="Ensino médio completo">Ensino médio completo</option>
          <option value="Ensino superio incompleto">Ensino superior incompleto</option>
          <option value="Ensino superio completo">Ensino superior completo</option>
        </select>
        <Button>Próxima etapa</Button>
      </Total>
    </>;
  }
}
export default Etapa1;
