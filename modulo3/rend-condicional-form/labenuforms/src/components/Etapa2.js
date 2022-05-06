import React from "react";
import{ H3, Paragrafo, Total, Button} from "./Style"

class Etapa2 extends React.Component {
    render() {
      return (
        <Total>
        <H3>ETAPA 2 - INFORMÇAÕES DO ENSINO SUPERIOR</H3>
       <Paragrafo>5. Qual curso?</Paragrafo>
       <input></input>
       <Paragrafo>6. Qual a unidade de ensino?</Paragrafo>
       <input></input>
       <Button>Próxima etapa</Button>
     </Total>
      );
    }
  }

export default Etapa2;
