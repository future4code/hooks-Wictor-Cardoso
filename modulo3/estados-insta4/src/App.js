import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={"Paulinha"}
          fotoUsuario={"https://picsum.photos/100/51"}
          fotoPost={"https://picsum.photos/200/150"}
        />

        <Post
          nomeUsuario={"Pedro"}
          fotoUsuario={"https://picsum.photos/152/52"}
          fotoPost={"https://picsum.photos/200/151"}
        />

        <Post
          nomeUsuario={"Carla"}
          fotoUsuario={"https://picsum.photos/200/53"}
          fotoPost={"https://picsum.photos/200/152"}
        />
      </MainContainer>
    );
  }
}

export default App;
