import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';


export  default function  CreateTripsPage  ()  {
  const navigate = useNavigate()
  const ToBack = ()=>{
    navigate(-1)
  };
  const Global = styled.div`
background-color: #DFE6ED;
height: 90vh;
margin: 50px;
`;
const Div = styled.div`
padding-top: 300px;
display: flex;
width: 100%;
justify-content: center;
text-align: center;
`;

  return(
    <Global>
      CreateTripsPage
      <Div>
        <div>
      <p> Formulário para o administrador criar uma nova viagem</p>
      <button onClick={()=>ToBack()}>Voltar</button>
      </div>
      </Div>
    </Global>
    );
};
