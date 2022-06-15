import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  CardConteiner,
  Button,
  DivAlineCenter,

} from "./styles";

const Like = (props) => {
  const goToCardMatchPage = (event) => {
    props.setPage("CardMatch");
  };

  return (
    <CardConteiner>
      <Button onClick={goToCardMatchPage}>voltar</Button>
      <DivAlineCenter>Lista de matchs...S2 (Em breve)
      </DivAlineCenter>
      
      {/* {props.choiceLike.map((likes) => {
        return (
          <li>
            {likes.perfil.name}
          </li>
        );
      })} */}
    </CardConteiner>
  );
};
export default Like;
