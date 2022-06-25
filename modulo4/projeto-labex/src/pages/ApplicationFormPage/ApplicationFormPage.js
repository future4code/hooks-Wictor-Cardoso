import { countries } from "../../constants/countries";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 300px;
`;

export default function ApplicationFormPage(props) {
  const [viagem, setViagem] = useState("");
  const [viagemId, setViagemId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [applicationText, setApplicationText] = useState("");
  const [profession, setProfession] = useState("");
  const [country, setCountry] = useState("");
  const [bodyApply, setBodyApply] = useState({
    name: name,
    age: age,
    applicationText: applicationText,
    profession: profession,
    country: country
  })
  const aluno = localStorage.getItem("aluno");

  const navigate = useNavigate();
  const ToBack = () => {
    navigate(-1);
  };

  // Apply to Trip - endpoint recebe informações de um candidato e o relaciona a uma viagem
  const FApplyToTrip  = ()=> {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips/${escolhaViagem.id}/apply`;

  const body = bodyApply
    axios
      .get(url, body)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data);
        console.log(bodyApply);
      });
  };

  // colocar as viagens no estado para pegar o id
  useEffect(() => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips/`;

    axios
      .get(url)
      .then((res) => {
        setViagem(res.data.trips);
        // console.log(res.data.trips);
        // console.log(aluno);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  // onChange
  const onChangeViagem = (event) => {
    setViagemId(event.target.value);
  };

  const onName = (event) => {
    setName(event.target.value);
  };

  const onAge = (event) => {
    setAge(event.target.value);
  };

  const onApplicationText = (event) => {
    setApplicationText(event.target.value);
  };

  const onProfession = (event) => {
    setProfession(event.target.value);
  };

  const onCountry = (event) => {
    setCountry(event.target.value);
  };



  const escolhaViagem =
    viagem &&
    viagem.map((w) => {
      return (
        <option key={w.id} value={w.id}>
          {w.name}
        </option>
      );
    });

  return (
    <div>
      <p>ApplicationFormPage</p>
      <p>
        Para o usuário se candidatar à viagens, página que vai ter o formulário
        de inscrição
      </p>

      <button onClick={() => FApplyToTrip()}>Enviar</button>
      <button onClick={() => ToBack()}>Voltar</button>
      <Form>
        <select defaultValue="" onChange={onChangeViagem}>
          <option value="" disable>
            Escolha uma Viagem
          </option>
          {escolhaViagem}
        </select>
        <input placeholder="Nome" type="text" value={name} onChange={onName} />
          <input placeholder="Idade" type="number" value={age} onChange={onAge} />
        <input
          placeholder="Texto de Candidatura"
          type="text"
          value={applicationText}
          onChange={onApplicationText}
        />
        <input
          placeholder="Profissão"
          type="text"
          value={profession}
          onChange={onProfession}
        />
        <select defaultValue="" onChange={onCountry}>
          <option value="" disable>
            Escolha um país
          </option>
          {countries.map((country) => {
            return (
              <option value={country} key={country}>
                {country}
              </option>
            );
          })}
        </select>
      </Form>
    </div>
  );
}
