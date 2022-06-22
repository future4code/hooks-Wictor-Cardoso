import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TripDetailsPage () {
  const navigate = useNavigate()
  const ToBack = ()=>{
    navigate(-1)
  };
  return(
    <div>
      <p>TripDetailsPage</p>
      <button onClick={()=>ToBack()}>Voltar</button>
    </div>
    );
};
