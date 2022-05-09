import React from "react";
import{ H3, Paragrafo, Total, Button} from "./Style"

class Etapa3 extends React.Component {
    render() {
      return (
        <Total>
        <H3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</H3>
       <Paragrafo>5. Por que você não terminou um curso de graduação?</Paragrafo>
       <input></input>
       <Paragrafo>6. Você fez algum curso complementar?</Paragrafo>
       <select>
         <option value="Nenhum">Nenhum</option>
         <option value="Curso técnico">Curso técnico</option>
         <option value="Curso de inglês">Ensino superior incompleto</option>    
       </select>      
     </Total>
      );
    }
  }

export default Etapa3;
