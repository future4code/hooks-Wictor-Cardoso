import axios from "axios";
import React from "react";
import Cadastrados from "../Components/Cadastrados"
import { Main, Input, Ajuste } from "../Components/Styles";

class Cadastro extends React.Component {  

  componentDidMount(){
    // this.mostrarUsuarios()
  }

  createUser = () => {
    const urlCreatUser = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
  
    const headers = {
      Authorization:"wictor-feitosa-hooks"
    };
    
    const body = {
      name: this.props.nameState,
      email: this.props.emailState
    };
      axios
      .post(urlCreatUser, body ,headers)   
      .then((res) =>{
        alert(`Usuário ${this.props.nameState} criado com sucesso!`)
        this.setState({name:"", email:""}) // do state
     })
     .catch((err) => {
       alert("Ops, o usuário já existe!")
       });             
    };


  render() {
//     const usuariosCadastrados = this.props.usuarios.map((user)=>{
// return <li>{user.name}</li>
//     }); 
  
    return (
      <Main>
        <Ajuste>
          <div>
            <button onClick={this.props.mudarPagina}>Trocar de tela</button>           
          </div>   
          <Input placeholder="Nome" defaultValue={this.props.nameState} onChange={this.props.onUserName}></Input>
          <Input placeholder="E-mail" defaultValue={this.props.emailState} onChange={this.props.onUserEmail} ></Input>
          <button onClick={this.createUser}>Criar Usuário</button>
        </Ajuste>
      </Main>
    );
  }
}

export default Cadastro;
