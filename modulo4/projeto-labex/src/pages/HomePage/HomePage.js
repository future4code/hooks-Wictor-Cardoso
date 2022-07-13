import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

//efeito 3 cores


// const Global = styled.div`
// background-color: #DFE6ED;

// `;

const Global = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #DFE6ED;
height: 88vh;
margin: 50px;
`;

const Div1 = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 90%;
height: 90%;
background-color: white;
`;

const Div2 = styled.div`
background-color: #DFE6ED;
width: 90%;
height: 90%;
margin: 20px;
`;

// botão canto superior direito
const DivAdmin = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 88px;
height: 44px;
background-color: white;
border: 1px solid #DFE6ED;
`;

const Div3 = styled.div`
display: flex;
flex-direction: row-reverse;
`;

// alinhar labex

const DivLabex = styled.div`
width: 243px;
height: 64px;
`;

const ContLabex = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
`;

const DivButtonViagens = styled.div`
margin-top: 300px;
`;



export default function HomePage() {
  const [aluno, setAluno] = useState("");

  const navigate = useNavigate();
  const ToListTripsPage = () => {
    navigate("/trips/list");
  };
  const ToLoginPage = () => {
    navigate("/login");
  };

  const onChangeAluno = (event) => {
    setAluno(event.target.value);
  };

  const onSaveAluno = () => {
    localStorage.setItem("aluno", aluno);
    alert("Aluno salvo");
    setAluno("");
  };

  return (
  <div>
      HomePage      
    <Global>
      <Div1>
        <Div2>
          <Div3>
          <DivAdmin>
          <button onClick={() => ToLoginPage()}>Admin</button>
          </DivAdmin>
          </Div3>
          <ContLabex>
          <DivLabex>
          <p>Labex</p>          
          <input
            placeholder="User Postman"
            type="text"
            value={aluno}
            onChange={onChangeAluno}
            required
          />
            <button onClick={() => onSaveAluno()}>Salvar</button>
            <DivButtonViagens>
          <button onClick={() => ToListTripsPage()}>ListTripsPage(Viagens)</button>
          </DivButtonViagens>
            </DivLabex>
            </ContLabex>        
        </Div2>
      </Div1>      
    </Global>
    </div>
  );
}
