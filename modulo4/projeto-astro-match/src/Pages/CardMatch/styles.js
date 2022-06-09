import styled from "styled-components";

export const CardConteiner = styled.div`
  background-color: white;
  width: 400px;
  height: 600px;
  color: white;
  border: 3px solid white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center; //alinha horizontalmente
  align-items: center;
`;

export const Card = styled.div`
  background-color: black;
  width: 360px;
  height: 450px;
  /* margin-top: 10px; */
  color: white;
  border-bottom: 3px solid red;
  border-right: 3px solid red;
  border-radius: 10px;
  display: flex;
  justify-content: center; //alinha horizontalmente
  align-items: center; //alinha verticalmente
`;

export const LikeRight = styled.div`
  /* width: 50%; */
  /* height: 5vh; */
  display: flex;
  /* flex-direction: row; */
  padding: 5px;
  /* padding-top:15px; */
  align-items: center;
  /* justify-items: space-between; */
  margin-left: 35%;
  /* padding-right: 15%; */
  /* margin: 0 auto; */
`;

export const CenterTitle = styled.div`
  /* width: 50%; */
  /* height: 5vh; */
  display: flex;
  /* flex-direction: row; */
  padding: 5px;
  /* padding-top:15px; */
  /* align-items: center; */
  /* justify-items: space-between; */
  padding-left: 15%;
  /* padding-right: 15%; */
  margin: 0 auto;
`;

export const Div = styled.div`
  /* width: max-content; */
  /* height: 5vh; */
  display: flex;
  /* flex-direction: row; */
  padding-top: 10px;
  /* margin-bottom: 45px; */
  margin: 0 auto;
  /* padding-top:15px; */
  /* align-items: center; */
  /* justify-self: space-between; */
  /* padding-left: 15%; */
  /* padding-right: 15%; */
  /* justify-content: space-between; */
`;

export const DivButton = styled.div`
  display: flex;
  width: 80%;
  justify-items: space-between;
`;

export const ButtonCard = styled.button`
  display: inline-block;
  width: 70px;
  height: 70px;
  border-radius: 56px;
`;

export const ButtonLikes = styled.button`
  /* margin-left: 90px; */
  /* display: inline-block;
width: 56px;
height: 56px; */
  /* border-radius: 56px; */
  
`;

export const Hr = styled.hr`
width: 100%;
margin-bottom: 10px;
` 

export const Img = styled.img`
width: 15vw;
height: auto;

` 