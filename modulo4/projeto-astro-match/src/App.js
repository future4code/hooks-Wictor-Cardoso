import React, { useState, useEffect } from "react";
import axios from "axios";
import CardMatch from "./Pages/CardMatch/CardMatch";
import Like from "./Pages/like/Like";
import { Main } from "./styles";

const App = () => {
  // estado //
  let [page, setPage] = useState("CardMatch");
  const [perfil, setPerfil] = useState({});
  const [choiceLike, setChoiceLike] = useState({});
  const [choiceUnlike, setChoiceUnlike] = useState({});

  const currentPage = () => {
    switch (page) {
      case "CardMatch":
        return (
          <CardMatch
            getProfileToChoose={getProfileToChoose}
            perfil={perfil}
            choosePersonLike={choosePersonLike}
            choiceLike={choiceLike}
            choosePersonUnlike={choosePersonUnlike}
            choiceUnlike={choiceUnlike}
            setPage={setPage}
          />
        );
      case "Like":
        return <Like setPage={setPage} />;
    }
  };

  // monta a função getProfileToChoose na iniciação //
  useEffect(() => {
    getProfileToChoose();
  }, []);

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

  // função para guardar no estado todos os gostei //
  const choosePersonLike = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wictor-feitosa-hooks/person";
    const body = { id: `${perfil.id}`, choice: true };
    axios
      .get(url, body)
      .then((res) => {
        setChoiceLike(res);
        alert("Isso ai, deu MATCH!");
        console.log(res);
        getProfileToChoose();
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
        console.log(res);
        getProfileToChoose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <Main>{currentPage()}</Main>;
};

export default App;
