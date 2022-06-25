import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 500px;
  border: 1px solid black;
  margin-top: 20px;
  margin-bottom: 20px;
  align-items: center;
  text-align: center;
`;



export default function  ListTripsPage () {
  const [trips, setTrips] = useState([]);
  const aluno = localStorage.getItem("aluno");

  useEffect(() => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`;
  
    axios
      .get(url)
      .then((res) => {
        setTrips(res.data.trips);
        // console.log(res.data.trips);
        // console.log(aluno);
        localStorage.setItem('trips', aluno)
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []); 

  const navigate = useNavigate()
  const ToApplicationFormPage = ()=>{
    navigate('/trips/aplication')
  }
  const ToBack = ()=>{
    navigate(-1)
  }

  return(
    <div>
      <p>ListTripsPage</p>
      <p> Para vermos todas as viagens</p>    
      <button onClick={()=>ToApplicationFormPage()}>Inscrever-se</button>
      {trips.map((index) => (
        <DivCard key={index.id}>
          <p>Nome: {index.name}</p>
          <p>Descrição: {index.description}</p>
          <p>Planeta: {index.planet}</p>
          <p>Duração: {index.durationInDays}</p>
          <p>Data: {index.date}</p>         
          <p>ID: {index.id}</p>         
        </DivCard>
      ))}
      <button onClick={()=>ToBack()}>Voltar</button>
    </div>
    );
};
