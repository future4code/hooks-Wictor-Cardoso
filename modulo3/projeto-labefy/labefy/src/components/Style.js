import styled from "styled-components";

export const Main = styled.div`
display: flex;
margin: 0;
padding: 0;
width: 100vw;
height: 90vh;
/* justify-content: center; */
background-color:#FF1515;
flex-direction: column;
align-items: center;
padding-top: 10vh;
`;

export const Div = styled.div`
display: flex;
justify-content: center;
`;

export const Pad = styled.input`
background-color:yellow;
display: flex;
/* flex-direction: row; */
width: max-content;
height: max-content;
/* justify-content: center; */
/* justify-items: center; */
`;

export const Button = styled.button`
margin-bottom: 10px;
/* padding: 0; */
/* margin: 0; */
/* display: flex; */
/* justify-content: center; */
/* width: max-content; */
`;

export const Card = styled.div`
display: flex;
justify-content: space-between;
width: 260px;
height: max-content;
padding: 2px;
margin: 5px;
background-color: white;
border: 2px solid black;
`;