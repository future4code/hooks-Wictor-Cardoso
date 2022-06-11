import React, { useState, useEffect } from "react";
import axios from "axios";
import CardMatch from "./Pages/CardMatch/CardMatch";
import { Main } from "./styles";

const App = () => {
  const [perfil, setPerfil] = useState({});

  useEffect(() => {
    getProfileToChoose();
  }, []);

  // const getMatches  =()=>{
  //   const url =
  //     "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wictor-feitosa-hooks/person";
  //   axios
  //   .get(url)
  //   .then((res)=>{console.log(res)})
  //   .catch((err)=>{console.log(err)})
  // }

  const getProfileToChoose = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wictor-feitosa-hooks/person";
    axios
      .get(url)
      .then((res) => {
        setPerfil(res.data.profile);      
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Main>
      {/*styled component*/}
      <CardMatch
        getProfileToChoose={getProfileToChoose}
        perfil={perfil}
      ></CardMatch>
    </Main>
  );
};

export default App;
