import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ThemeConsumer } from "styled-components";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const aluno = localStorage.getItem('aluno')

  const onChangeEmail = (event) => {
  setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };


  const onSubmitLogin = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/login`;

    const body = {
      email: email,
      password: password,
    };

    axios
      .post(url, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);         
        navigate("/admin/trips/list");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const navigate = useNavigate();

  // const ToAdminHomePage = () =>{
  //   navigate('/admin')
  // }
  const ToBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <p>LoginPage</p>
      <p>Para fazermos login como administrador</p> 

      <input
        placeholder="E-mail"
        type="email"
        value={email}
        onChange={onChangeEmail}
        required
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={onChangePassword}
        required
      />

      <button onClick={() => onSubmitLogin()}>Enviar</button>
      {/* <button onClick={()=>ToAdminHomePage()}>AdminHomePage</button> */}
      <button onClick={() => ToBack()}>Voltar</button>
    </div>
  );
}
