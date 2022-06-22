import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function  HomePage  ()  {
  const navigate = useNavigate()
  const ToListTripsPage = ()=>{
    navigate('/list')
  }
  const ToLoginPage = ()=>{
    navigate('/login')
  }
  return(
    <div>
      <p>HomePage</p>
      <button onClick={()=>ToListTripsPage()}>ListTripsPage</button>
      <button onClick={()=>ToLoginPage()}>LoginPage</button>
    </div>
    );
};
