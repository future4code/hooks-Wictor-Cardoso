import React, { useState, useEffect } from "react";
import axios from "axios";
import CardMatch from "./Pages/CardMatch/CardMatch";
import { Main } from "./styles";

const App = () => {
  // estado //
  const [perfil, setPerfil] = useState({});
  const [choiceLike, setChoiceLike] = useState({})
  const [choiceUnlike, setChoiceUnlike] = useState({})

  // monta a const getProfileToChoose na iniciação //
  useEffect(() => {
    getProfileToChoose();
  }, []);

   // função para guardar no estado todos os gostei //
  const choosePersonLike = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wictor-feitosa-hooks/person";
    const body = { id: `${perfil.id}`, choice: true };
    axios
      .get(url, body)
      .then((res) => {
        setChoiceLike(res);
        console.log('tudo certo com o choosePerson Like')
        getProfileToChoose()
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
   // botão para guardar no estado todos os não gostei //
  const choosePersonUnlike = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wictor-feitosa-hooks/person";
    const body = { id: `${perfil.id}`, choice: false };
    axios
      .get(url, body)
      .then((res) => {
        setChoiceUnlike(res);
        console.log('tudo certo com o choosePerson Unlike')
        getProfileToChoose()
      })
      .catch((err) => {
        console.log(err);
      });
  };

   // função para fazer a API mostrar a foto, nome, idade e bio //
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
        choosePersonLike={choosePersonLike}
        choiceLike={choiceLike}
        choosePersonUnlike={choosePersonUnlike}
        choiceUnlike={choiceUnlike}
      ></CardMatch>
    </Main>
  );
};

export default App;
