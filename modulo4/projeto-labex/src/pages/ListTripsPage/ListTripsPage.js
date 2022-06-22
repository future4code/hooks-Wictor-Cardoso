import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function  ListTripsPage () {
  const navigate = useNavigate()
  const ToApplicationFormPage = ()=>{
    navigate('/aplication')
  }
  const ToBack = ()=>{
    navigate(-1)
  }
  return(
    <div>
      <p>ListTripsPage</p>
      <button onClick={()=>ToApplicationFormPage()}>ApplicationFormPage</button>
      <button onClick={()=>ToBack()}>Voltar</button>
    </div>
    );
};
