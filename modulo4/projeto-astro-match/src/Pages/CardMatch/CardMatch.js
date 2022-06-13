// import React, { useState, useEffect } from "react";
import {
  CardConteiner,
  Card,
  ButtonCard,
  ButtonLikes,
  Div,
  CenterTitle,
  LikeRight,
  DivButton,
  Hr,
  Img,
  ImgProfile,
  BioCard,
  DivAline,
} from "./styles";



import astromatch from "./img/astromatch.png";

const CardMatch = (props)=>{

  const goToLikePage = (event) => {
    props.setPage ('Like');
  };

  return (
    <CardConteiner>
      <CenterTitle>
        <Img src={astromatch} />
        <LikeRight>
          <ButtonLikes onClick={goToLikePage}>likes</ButtonLikes>
        </LikeRight>
      </CenterTitle>
      <Hr />
      <div>
        <ImgProfile src={props.perfil.photo}></ImgProfile>
      </div>
      <div>
       Nome: {props.perfil.name}, Idade: {props.perfil.age}
      </div>
      <BioCard>{props.perfil.bio}</BioCard>
      
      <DivButton>
        <Div>
          {/* <button onClick={} value={}></button> */}
          <ButtonCard onClick={() => props.choosePersonUnlike()}>x</ButtonCard>
        </Div>
        <Div>
          <ButtonCard onClick={()=> props.choosePersonLike()}>❤️</ButtonCard>
        </Div>
      </DivButton>
    </CardConteiner>
  );
}

export default CardMatch