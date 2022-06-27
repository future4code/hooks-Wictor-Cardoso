import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";


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
        // console.log(trips);
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

const Global = styled.div`
background-color: #DFE6ED;
height: 90vh;
margin: 50px;
`;

const Div1 = styled.div`
display: flex;
justify-content: center;
`;


const Div2 = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding-top: 20px;
width: 500px;
height: 20px;
`;

const Div3 = styled.div`
text-align: center;
background-color: white;
width: 350px;
`;

const P = styled.p`
width: 300px;
`;


const DivCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;  
  width: 500px;
  border: 1px solid black;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  align-items: center;
  text-align: center;
  `;



  return(
    <Global>
      ListTripsPage
      <button onClick={()=>ToBack()}>Voltar</button>
      <Div1>
      <Div2>
        <Div3>Lista de viagens</Div3>       
      <button onClick={()=>ToApplicationFormPage()}>Inscrever-se</button>
      </Div2>
      </Div1>
      {trips.map((w, p, a) => (        
        <DivCard key={w.id}>
          <p>Nome: {w.name}</p>
          <p>Descrição: {w.description}</p>
          <p>Planeta: {w.planet}</p>
          <p>Duração: {w.durationInDays}</p>
          <p>Data: {w.date}</p>         
          <p>ID: {w.id}</p>         
        </DivCard>     
      ))}
      
    </Global>
    );
};
