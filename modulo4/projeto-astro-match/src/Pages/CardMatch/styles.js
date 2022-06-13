import styled from "styled-components";

export const CardConteiner = styled.div`
position: fixed;
  background-color: red;
  width: 450px;
  height: 650px;
  color: white;
  border: 3px solid white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center; //alinha horizontalmente
  align-items: center;
`;

// export const Card = styled.div`
//   /* background-color: black; */
//   width: 360px;
//   height: 450px;
//   /* margin-top: 10px; */
//   /* color: black; */
//   border-bottom: 2px inset black;
//   border-right: 2px inset black;
//   /* box-shadow: 10px 10px 10px 1px black; */
//   border-radius: 10px;
//   display: flex;
//   margin-left: 4px;
//   /* margin: 0 auto; */
//   justify-content: center; //alinha horizontalmente
//   /* align-items: center; //alinha verticalmente */
// `;

export const LikeRight = styled.div`
  /* width: 50%; */
  /* height: 5vh; */
  display: flex;
  /* flex-direction: row; */
  padding: 5px;
  /* padding-top:15px; */
  align-items: center;
  /* justify-items: space-between; */
  margin-left: 30px;
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
  padding-left: 25%;
  /* padding-right: 15%; */
  /* margin: 0 auto; */
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
  width: 70%;
  justify-items: space-between;
`;

export const ButtonCard = styled.button`
  /* display: inline-block; */
  width: 80px;
  height: 50px;
  margin-bottom: 10px;
  /* border-radius: 5px;   */
`;

export const ButtonLikes = styled.button`
width: 70px;
height: 25px;
  /* padding-left: 70px; */
   /* display: inline-block; */
/* width: 56px; */
/* height: 56px;  */
  /* border-radius: 6px; */
  
`;

export const Hr = styled.hr`
width: 100%;
margin-bottom: 10px;
` 

export const Img = styled.img`
width: 140px;
height: auto;
border-radius: 5px;
margin-bottom: 10px;
margin-top: 10px;
` 

export const ImgProfile = styled.img`
width: 390px ;
height: 420px;
border-radius: 5px;
/* width: 360px; */
  /* height: 450px; */
  /* margin-top: 10px; */
  /* color: black; */
  border-bottom: 2px inset black;
  border-right: 2px inset black;
`

export const BioCard = styled.div`
display: flex;
text-align: center;
margin-left: 5px;
margin-right: 5px;
`

export const DivAline = styled.div`
display: flex;
text-align: center;
padding-left: 10px;
`