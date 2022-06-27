import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function TripDetailsPage(props) {

 

  const navigate = useNavigate();
  const ToBack = () => {
    navigate(-1);
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
      TripDetailsPage
      <Div>
        <div>
      <p>
        Para o administrador ver o detalhe de uma viagem específica, bem como os
        candidatos que aplicaram para ela
      </p>
      {/* <button onClick={() => getTrips()}>getTrips</button> */}
      <button onClick={() => ToBack()}>Voltar</button>
      </div>
      </Div>
    </Global>
  );
}
