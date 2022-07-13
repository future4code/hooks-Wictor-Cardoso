import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


export  default function AdminHomePage  ()  {
  const navigate = useNavigate()
  
const ToTripDetailsPage = () =>{
  navigate('/admin/trips/:id')
}

const ToCreateTripsPage = () =>{
  navigate('/admin/trips/create')
}

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


return (
  <Global>  
      AdminHomePage
      <Div> 
      <div>
      <p> Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas</p>
      <button onClick={()=> ToCreateTripsPage()}>CreateTripsPage</button>
      <button onClick={()=> ToTripDetailsPage()}>TripDetailsPage</button>
      <button onClick={()=>ToBack()}>Voltar</button> 
      </div>  
      </Div> 
    </Global>
  );
};
