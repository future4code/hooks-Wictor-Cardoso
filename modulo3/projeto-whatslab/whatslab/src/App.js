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
  Mensagem,
} from "./components/styles";



class App extends React.Component {

  state = {
    pessoas: [],
    valorUsuario : '',
    valorEmail: ''
  };
  
  adiconarPessoa = () => {
   const novaPessoa ={
      nome: this.state.valorUsuario,
      email: this.state.valorEmail
    }
    
    // Copia array de pessoas e adiciona uma pessoa no final
    const novoPessoas = [...this.state.pessoas, novaPessoa];
    
    // Define o estado "pessoas" como a variavel "novoPessoas"
    this.setState({ pessoas: novoPessoas });
  };

  onChangeUsuario = (event) => {
    this.setState({valorUsuario: event.target.value})
  }
  
  onChangeEmail = (event) => {
    this.setState({valorEmail: event.target.value})
  }

  
render() {
 const ListaDeComponentes = this.state.pessoas.map((pessoa)=> {
    return (
      <p>
        {pessoa.nome} diz: {pessoa.email}
      </p>
    )   
  });

  return (
    <Conteiner>
      <Campo>        
        <Mensagem>{ListaDeComponentes}</Mensagem>        
        <DentroCampo>
          <InputNome placeholder={"Usuário"} onChange={this.onChangeUsuario} value={this.state.valorUsuario}></InputNome>
          <InputMensagem placeholder={"Mensagem"} onChange={this.onChangeEmail} value={this.state.valorEmail}></InputMensagem>
          <button onClick={this.adiconarPessoa}>Enviar</button>          
        </DentroCampo>
      </Campo>
    </Conteiner>
  );
}
}

export default App;
