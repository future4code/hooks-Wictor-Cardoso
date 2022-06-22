import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



export  default function AdminHomePage  ()  {
  const navigate = useNavigate()
  
const ToTripDetailsPage = () =>{
  navigate('/trip')
}

const ToCreateTripsPage = () =>{
  navigate('/create')
}

const ToBack = ()=>{
  navigate(-1)
};

return (
    <div>
      <p>AdminHomePage</p>
      <button onClick={()=> ToCreateTripsPage()}>CreateTripsPage</button>
      <button onClick={()=> ToTripDetailsPage()}>CreateTripsPage</button>
      <button onClick={()=>ToBack()}>Voltar</button>
    </div>
  );
};
