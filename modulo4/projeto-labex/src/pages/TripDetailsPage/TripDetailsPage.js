import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function TripDetailsPage(props) {

 

  const navigate = useNavigate();
  const ToBack = () => {
    navigate(-1);
  };




  return (
    <div>
      <p>TripDetailsPage</p>
      <p>
        Para o administrador ver o detalhe de uma viagem específica, bem como os
        candidatos que aplicaram para ela
      </p>
      {/* <button onClick={() => getTrips()}>getTrips</button> */}
      <button onClick={() => ToBack()}>Voltar</button>
     
    </div>
  );
}
