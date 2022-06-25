import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";



export  default function  CreateTripsPage  ()  {
  const navigate = useNavigate()
  const ToBack = ()=>{
    navigate(-1)
  };

  return(
    <div>
      <p>ApplicationFormPage</p>
      <p> Formulário para o administrador criar uma nova viagem</p>
      <button onClick={()=>ToBack()}>Voltar</button>
    </div>
    );
};
