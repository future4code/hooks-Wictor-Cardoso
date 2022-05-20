import React from 'react';
import axios from 'axios';
import Cadastro from "./Components/Cadastro"
import Cadastrados from "./Components/Cadastrados"
import {Pagina} from "./Components/Styles"



class App extends React.Component {

  mudarPagina = () =>{
    if(this.state.paginaAtual === "cadastro"){
      this.setState({paginaAtual: "cadastrados"})
    }else {
      this.setState({paginaAtual: "cadastro"})
    }
  }

  // createUser = () => {
  //  const urlCreatUser = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
 
  //  const headers = {
  //    Authorization:"wictor-feitosa-hooks"
  //  };
   
  //  const body = {
  //    name: this.state.nameState,
  //    email: this.state.emailState
  //  };
  //    axios
  //    .post(urlCreatUser, body ,headers)   
  //    .then((res) =>{
  //      alert(`Usuário ${this.state.nameState} criado com sucesso!`)
  //      this.setState({nameState:"", emailState:""}) // do state
  //   })
  //   .catch((err) => {
  //     alert("Ops, o usuário já existe!")
  //     });
  //     console.log(this.createUser)
  //  };


  state = {
    paginaAtual: "cadastro",
    nameState:"",
    emailState:"",
    usuarios:[], 
  };

  onUserNome = (ev) => {
    this.setState({nameState: ev.target.value})
   }

   onUserEmail = (ev) => {
    this.setState({emailState: ev.target.value})
   }


  render(){
  return (
    <Pagina>
      {this.state.paginaAtual === "cadastro" ?
      <Cadastro  
      paginaAtual={this.state.paginaAtual}
      mudarPagina={this.mudarPagina}
      usuarios={this.state.usuarios}
      nameState={this.state.nameState}
      emailState={this.state.emailState}  
      onUserName={this.onUserName} 
      onUserEmail={this.onUserEmail}   
      /> :
      <Cadastrados      
      paginaAtual={this.state.paginaAtual}
      mudarPagina={this.mudarPagina}
      />}       
    </Pagina>
  );
};
};

export default App;
