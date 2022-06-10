import React, { useState, useEffect } from "react";
import axios from "axios";
import CardMatch from "./Pages/CardMatch/CardMatch";
import { Main } from "./styles";

export default function App() {
  const [perfil, setPerfil] = useState([]);
  
  useEffect(() => {
    getProfileToChoose();
  }, []);


  
  const getMatches  =()=>{
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wictor-feitosa-hooks/person";
    axios
    .get(url)
    .then((res)=>{})
    .catch((err)=>{console.log(err)})
  }

  const getProfileToChoose = () => {
const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wictor-feitosa-hooks/matches'

    axios
      .get(url)
      .then((res) => {
        setPerfil(res.data.profile);        
      })
      .catch((err) => {
        console.log(err);
      });
  };

// perfil.map((element, position, array) => {
//     return (
//       <li key={element.id}>
//         {element.bio},{element},
//       </li>
//     );
//   });

  return (
    <Main>
      {/*styled component*/}
      <CardMatch
        getProfileToChoose={getProfileToChoose}
        perfil={perfil}
      >{}</CardMatch>
      {/* <button onClick={() => getProfileToChoose()} value={valor}> */}
      {/* meu buton */}
      {/* </button> */}
      {/* <div>{valor} algo por aqui</div> */}
      {/* {valor} */}
      {/* {element} */}
    </Main>
  );
}
