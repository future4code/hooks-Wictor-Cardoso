import React from "react";
import { MeuPrimeiroComponente } from "./components/MeuPrimeiroComponente";
import MeuSegundoComponente from "./components/MeuSegundoComponente";
import {
  Title,
  Campo,
  Conteiner,
  DentroCampo,
  CaixaBaixo,
  InputNome,
  InputMensagem,
} from "./components/styles";

function App() {
  return (
    <Conteiner>
      <Campo>
        <DentroCampo>
          <InputNome type="text" placeholder="Usuário"></InputNome>
          <InputMensagem type="text" placeholder="Mensagem"></InputMensagem>
          <button>Enviar</button>
        </DentroCampo>
      </Campo>
    </Conteiner>
  );
}

export default App;
