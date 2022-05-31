import styled from "styled-components";

export const BordaCard = styled.div`
width: max-content;
border: 2px solid black;
border-radius: 5px;
`;

export const MainStyle = styled.div`
/* display: flex;
flex-direction: column;
width: 10vw; */
`;

export const Input = styled.input`
border-radius: 5px;
`;


export const Button = styled.button`
border-radius: 5px;
`;

export const Card = styled.button`
display: flex;
border-radius: 5px;
justify-content: space-between;
width: 200px;
height: max-content;
padding: 2x;
margin: 5px;
border: 2px solid black;
 &:hover{
     cursor: pointer; 
     background-color: lightblue; 
} 
div{
    /* background-color: blue; */
    width: 100%;
    height: auto;
    padding: 0.3vh;
}
`;