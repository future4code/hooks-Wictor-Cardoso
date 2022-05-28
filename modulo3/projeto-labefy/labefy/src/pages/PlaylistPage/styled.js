import styled from "styled-components";

export const ContinerCard = styled.div`
width: max-content;

border: 2px solid black;
`;


export const Card = styled.div`
display: flex;
justify-content: space-between;
width: 200px;
height: max-content;
padding: 2px;
margin: 5px;
background-color: white;
border: 2px solid black;
&:hover{
    /* cursor: pointer; */
    background-color: lightblue;
}
`;