import React from "react";
import { Main, Input } from "../Components/Styles"

class Cadastrados extends React.Component{
render(){
    return(
        <Main>
        <button onClick={this.props.mudarPagina}>Trocar de tela</button>
        <hr/>
        <p>Procurar Usuário</p>   
        <Input placeholder="Nome exato para busca"></Input>     
        <button>Salvar edição</button>
        </Main>
    );
};
};

export default Cadastrados;