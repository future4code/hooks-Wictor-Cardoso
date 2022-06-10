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

export default function CardMatch(props) {
  // GetProfileToChoose

  // props.perfil.map((element, position, array) => {
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
          <ButtonCard onClick={() => props.getProfileToChoose()}>x</ButtonCard>
        </Div>
        <Div>
          <ButtonCard onClick={() => props.getProfileToChoose()}>❤️</ButtonCard>
        </Div>
      </DivButton>
    </CardConteiner>
  );
}
