import React from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";
import{ H3, Paragrafo, Total, Button} from "./components/Style"

state = {
  etapa: 1,
}

class App extends React.Component {
  render() {
    return (
      <Total>
        <Button>Próxima etapa</Button>
      </Total>
    );
  }
}

export default App;
