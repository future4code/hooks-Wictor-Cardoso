import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function  LoginPage () {
  const navigate = useNavigate()
  const ToAdminHomePage = () =>{
    navigate('/admin')
  }
  const ToBack = ()=>{
    navigate(-1)
  };
  return(
    <div>
      <p>LoginPage</p>
     <button onClick={()=>ToAdminHomePage()}>AdminHomePage</button>
     <button onClick={()=>ToBack()}>Voltar</button>
    </div>
    );
};
