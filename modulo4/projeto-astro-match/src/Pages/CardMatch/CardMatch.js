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

} from "./styles";

import astromatch from "./img/astromatch.png"


export default function CardMatch() {
  return (
    <CardConteiner>
      <CenterTitle>
      <Img src={astromatch}/>        
        <LikeRight>
          <ButtonLikes>likes</ButtonLikes>
        </LikeRight>
      </CenterTitle>
      <Hr />
      <Card>nothing</Card>
      <DivButton>
        <Div>
          <ButtonCard>x</ButtonCard>
        </Div>
        <Div>
          <ButtonCard>❤️</ButtonCard>
        </Div>
      </DivButton>
    </CardConteiner>
  );
}
