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
  // GetProfileToChoose
  // props.profile.map((element, position, array) => {
  //   <div key={element.id}>
  //     <li>{element}</li>
  //     </div>;
  // });

  return (
    <CardConteiner>
      <CenterTitle>
        <Img src={astromatch} />
        <LikeRight>
          <ButtonLikes>likes</ButtonLikes>
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