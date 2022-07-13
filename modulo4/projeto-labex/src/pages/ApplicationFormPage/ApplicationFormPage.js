import { countries } from "../../constants/countries";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 300px;
`;

export default function ApplicationFormPage(props) {
  const { form, onChange } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });
  const [viagem, setViagem] = useState("");
  const [tripId, setTripId] = useState("");

  const aluno = localStorage.getItem("aluno");

  const navigate = useNavigate();
  const ToBack = () => {
    navigate(-1);
  };

  // Apply to Trip - endpoint recebe informações de um candidato e o relaciona a uma viagem
  const ApplyToTrip = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips/${tripId}/apply`;

    const body = {
      name: "",
      age: "",
      applicationText: "",
      profession: "",
      country: "",
    };
    axios
      .get(url, body)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data);
        console.log(form);
      });
  };

  // colocar as viagens no estado
  useEffect(() => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips/`;
    axios
      .get(url)
      .then((res) => {
        setViagem(res.data.trips);
        console.log(viagem)
        // console.log(res.data.trips);
        // console.log(aluno);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  // onChange;
  // const prevent = (event) => {
  //   event.preventDefault();
  // };

  // useEffect (()=>[
  //   console.log(viagemId)
  // ],{viagemId})

// useEffect(()=>{

// },[])

const onClickSend = (e) => {
  e.preventDefault()
  (form)
}

const onChangeTrip = (e) => {
  setTripId(e.target.value)
}

  const escolhaViagem = 
    viagem &&
    viagem.map((w) => {     
      return <option key={w.id}>{w.name}</option>;
    });

  const Console = () => {
    console.log(tripId);
  };

  return (
    <div>
      <p>ApplicationFormPage</p>
      <p>
        Para o usuário se candidatar à viagens, página que vai ter o formulário
        de inscrição
      </p>

      <button type="submit" onClick={() => ApplyToTrip()}>Enviar</button>
      <button onClick={() => Console()}>console log</button>
      <button onClick={() => ToBack()}>Voltar</button>
      <Form onSubmit={onClickSend}>
        <select defaultValue="" onChange={onChangeTrip}>
          <option value="" disable>
            Escolha uma Viagem
          </option>
          {escolhaViagem}
        </select>
        <input
          placeholder="Nome"
          type="text"
          name="name"
          value={form.name}
          onChange={onChange}
        />
        <input
          placeholder="Idade"
          type="number"
          name="age"
          value={form.age}
          onChange={onChange}
        />
        <input
          placeholder="Texto de Candidatura"
          type="text"
          name="applicationText"
          value={form.applicationText}
          onChange={onChange}
        />
        <input
          placeholder="Profissão"
          type="text"
          name="profession"
          value={form.profession}
          onChange={onChange}
        />
        <select defaultValue="" name="country" value={form.country}  onChange={onChange}>
          <option>
            Escolha um país
          </option>
          {countries.map((country) => {
            return (
              <option  value={country} key={country}>
                {country}
              </option>
            );
          })}
        </select>
      </Form>
    </div>
  );
}
