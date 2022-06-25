import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



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

return (
    <div>
      <p>AdminHomePage</p>
      <p> Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas</p>
      <button onClick={()=> ToCreateTripsPage()}>CreateTripsPage</button>
      <button onClick={()=> ToTripDetailsPage()}>TripDetailsPage</button>
      <button onClick={()=>ToBack()}>Voltar</button>
    </div>
  );
};
