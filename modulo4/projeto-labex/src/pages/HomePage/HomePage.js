import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function  HomePage  ()  {

  const [aluno, setAluno] = useState("");

  const navigate = useNavigate()
  const ToListTripsPage = ()=>{
    navigate('/trips/list')
  }
  const ToLoginPage = ()=>{
    navigate('/login')
  }

  const onChangeAluno = (event) => {
    setAluno(event.target.value);  
  };

    const onSaveAluno =() =>{
      localStorage.setItem('aluno', aluno)
      console.log(aluno)
    }
  

  return(
    <div>
      <p>HomePage</p>
      <p>Para o usuário escolher entre Área Administrativa e Lista de Viagens</p>
      <input
        placeholder="User Postman"
        type="text"
        value={aluno}
        onChange={onChangeAluno}
        required
      />

      <button onClick={()=>onSaveAluno()}>save aluno</button>
      <button onClick={()=>ToListTripsPage()}>ListTripsPage</button>
      <button onClick={()=>ToLoginPage()}>LoginPage</button>
    </div>
    );
};
