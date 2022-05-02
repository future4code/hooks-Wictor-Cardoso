import styled from "styled-components";

export const Title = styled.h1`
  color: red;
  background-color: blue;
`;

export const Conteiner = styled.div`
  display: flex;
  justify-content: center;
`;

export const Campo = styled.div`
  max-width: 600px;
  height: 98.5vh;
  border: 1px solid black;
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  background: #0f0c29;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
color: white;
`;

export const DentroCampo = styled.div`
  display: flex;
`;

export const InputNome = styled.input`
  width: 100px;
`;

export const InputMensagem = styled.input`
  flex: 1 1 0%;
`;

export const CaixaBaixo = styled.div`
  display: flex;
`;

export const Mensagem = styled.p`
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: flex-end;
    padding: 20px;
`